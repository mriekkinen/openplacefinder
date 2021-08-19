import { Poi } from '../types';
import { initialState, State } from './state';

//import { fetchOverpass } from '../services/overpassService';
import { fetchOverpass } from '../services/overpassServiceMock';
import { overpass2Poi } from '../utils';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type Action =
  | {
      type: 'SET_POI_LIST',
      data: Poi[]
    }
  | {
      type: 'SET_LOADING',
      data: boolean
    }
  | {
      type: 'SET_SELECTED',
      data: Poi | null
    }
  | {
      type: 'SET_HOVER',
      data: Poi | null
    };

export type AppThunk = ThunkAction<void, State, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<State, unknown, AnyAction>;

export const queryOverpass = (query: string): AppThunk => {
  return async dispatch => {
    dispatch(setLoading(true));
    const overpassJson = await fetchOverpass(query);
    const newData = overpass2Poi(overpassJson);
    dispatch(setPoiList(newData));
    dispatch(setLoading(false));
  };
};

export const setLoading = (loading: boolean): Action => {
  return {
    type: 'SET_LOADING',
    data: loading
  };
};

export const setPoiList = (pois: Poi[]): Action => {
  return {
    type: 'SET_POI_LIST',
    data: pois
  };
};

export const setSelected = (poi: Poi | null): Action => {
  return {
    type: 'SET_SELECTED',
    data: poi
  };
};

export const setHover = (poi: Poi | null): Action => {
  return {
    type: 'SET_HOVER',
    data: poi
  };
};

export const reducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'SET_POI_LIST':
      return {
        ...state,
        pois: action.data
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.data
      };
    case 'SET_SELECTED':
      return {
        ...state,
        selected: action.data
      };
    case 'SET_HOVER':
      return {
        ...state,
        hover: action.data
      };
    default:
      return state;
  }
};
