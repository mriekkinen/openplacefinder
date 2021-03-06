import { OverpassJson } from 'overpass-ts';

import { Poi } from '../types';
import { Country, initialState, PoiState, QueryStatus } from './state';
import { Action, AppThunk } from './actions';
import { showOverpassErrorModal, showSizeWarningModal } from './uiReducer';
import { RESULT_SET_WARNING_THRESHOLD } from '../conf';

import { fetchOverpass, overpass2Poi } from '../overpass';
import { presetSingleton } from '../presets';

export const queryOverpass = (query: string): AppThunk => {
  return async dispatch => {
    dispatch(setStatus('loading'));

    let overpassJson: OverpassJson | null = null;
    try {
      overpassJson = await fetchOverpass(query);
    } catch (error) {
      console.log(error);
      dispatch(setPoiList([]));
      dispatch(setFields(new Set<string>()));
      dispatch(setStatus('failed'));
      dispatch(showOverpassErrorModal(error));
      return;
    }

    const newData1 = overpass2Poi(overpassJson);
    const newData2 = presetSingleton.extend(newData1);
    const newFields = presetSingleton.enumerateFields(newData2);

    const updateData = () => {
      dispatch(setPoiList(newData2));
      dispatch(setFields(newFields));
      dispatch(setStatus('succeeded'));
    };

    if (newData2.length >= RESULT_SET_WARNING_THRESHOLD) {
      dispatch(setStatus('pending'));
      dispatch(showSizeWarningModal(
        newData2.length,
        ok => ok ? updateData() : dispatch(clearPoiList())
      ));
      return;
    }

    updateData();
  };
};

export const clearPoiList = (): AppThunk => {
  return async dispatch => {
    dispatch(setPoiList([]));
    dispatch(setFields(new Set<string>()));
    dispatch(setStatus('idle'));
  };
};

const setPoiList = (pois: Poi[]): Action => {
  return {
    type: 'poiList/setData',
    data: pois
  };
};

const setFields = (fields: Set<string>): Action => {
  return {
    type: 'poiList/setFields',
    data: fields
  };
};

const setStatus = (status: QueryStatus): Action => {
  return {
    type: 'poiList/setStatus',
    data: status
  };
};

export const setCountry = (country: Country): Action => {
  return {
    type: 'poiList/setCountry',
    data: country
  };
};

export const poiReducer = (
  state: PoiState = initialState.poiList,
  action: Action
): PoiState => {
  switch (action.type) {
    case 'poiList/setData':
      return {
        ...state,
        data: action.data
      };
    case 'poiList/setFields':
      return {
        ...state,
        fields: action.data
      };
    case 'poiList/setStatus':
      return {
        ...state,
        status: action.data
      };
    case 'poiList/setCountry':
      return {
        ...state,
        country: action.data
      };
    default:
      return state;
  }
};
