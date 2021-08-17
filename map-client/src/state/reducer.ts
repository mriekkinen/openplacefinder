import { Poi } from '../types';
import { initialState, State } from './state';

export type Action =
  | {
      type: 'SET_POI_LIST',
      data: Poi[]
    }
  | {
      type: 'SET_SELECTED',
      data: Poi | null
    }
  | {
      type: 'SET_HOVER',
      data: Poi | null
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
