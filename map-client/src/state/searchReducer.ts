import { LatLngBounds } from 'leaflet';

import { initialState, SearchState, Category } from './state';
import { Action } from './actions';

export const setCategory = (category: Category | null): Action => {
  return {
    type: 'search/setCategory',
    data: category
  };
};

export const setBoundary = (name: string, id: number): Action => {
  return {
    type: 'search/setBoundary',
    data: {
      name, id
    }
  };
};

export const setBBox = (bbox: LatLngBounds): Action => {
  return {
    type: 'search/setBBox',
    data: {
      bbox
    }
  };
};

export const searchReducer = (
  state: SearchState = initialState.search,
  action: Action
): SearchState => {
  switch (action.type) {
    case 'search/setCategory':
      return {
        ...state,
        category: action.data
      };
    case 'search/setBoundary':
      return {
        ...state,
        area: {
          type: 'boundary',
          name: action.data.name,
          id: action.data.id
        }
      };
    case 'search/setBBox':
      return {
        ...state,
        area: {
          type: 'bbox',
          bbox: action.data.bbox
        }
      };
    default:
      return state;
  }
};
