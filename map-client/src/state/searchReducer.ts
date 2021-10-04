import { LatLngBounds } from 'leaflet';

import { initialState, SearchState, MapFeature } from './state';
import { Action } from './actions';

export const setMapFeature = (feature: MapFeature | null): Action => {
  return {
    type: 'search/setMapFeature',
    data: feature
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
    case 'search/setMapFeature':
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
