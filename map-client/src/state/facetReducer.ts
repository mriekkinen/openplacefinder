import { initialState, FacetState } from './state';
import { Action } from './actions';

export const setName = (name: string): Action => {
  return {
    type: 'facets/setName',
    data: name
  };
};

export const setBrand = (brand: string): Action => {
  return {
    type: 'facets/setBrand',
    data: brand
  };
};

export const clear = (): Action => {
  return {
    type: 'facets/clear'
  };
};

export const facetReducer = (
  state: FacetState = initialState.facets,
  action: Action
): FacetState => {
  switch (action.type) {
    case 'facets/setName':
      return {
        ...state,
        name: action.data
      };
    case 'facets/setBrand':
      return {
        ...state,
        brand: action.data
      };
    case 'facets/clear':
      return initialState.facets;
    default:
      return state;
  }
};
