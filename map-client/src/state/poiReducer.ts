import { Poi } from '../types';
import { initialState, PoiState, Status } from './state';
import { Action, AppThunk } from './actions';

import { fetchOverpass } from '../services/overpassService';
//import { fetchOverpass } from '../services/overpassServiceMock';
import { overpass2Poi } from '../utils';

export const queryOverpass = (query: string): AppThunk => {
  return async dispatch => {
    dispatch(setStatus('loading'));
    const overpassJson = await fetchOverpass(query);
    if (overpassJson === null) {
      return dispatch(setStatus('failed'));
    }

    const newData = overpass2Poi(overpassJson);
    dispatch(setPoiList(newData));
    dispatch(setStatus('succeeded'));
  };
};

const setStatus = (status: Status): Action => {
  return {
    type: 'poiList/setStatus',
    data: status
  };
};

const setPoiList = (pois: Poi[]): Action => {
  return {
    type: 'poiList/setData',
    data: pois
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
    case 'poiList/setStatus':
      return {
        ...state,
        status: action.data
      };
    default:
      return state;
  }
};
