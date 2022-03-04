import { initialState, SearchState, MapFeature } from './state';
import { Action } from './actions';

export const setMapFeature = (feature: MapFeature | null): Action => {
  return {
    type: 'search/setMapFeature',
    data: feature
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
        feature: action.data
      };
    default:
      return state;
  }
};
