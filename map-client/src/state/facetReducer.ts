import { initialState, facetReset, FacetState } from './state';
import { Action } from './actions';

export const setName = (name: string): Action => {
  return {
    type: 'facets/setName',
    data: name
  };
};

export const requireOpeningHours = (openingHours: boolean): Action => {
  return {
    type: 'facets/requireOpeningHours',
    data: openingHours
  };
};

export const requireOpenNow = (openNow: boolean): Action => {
  return {
    type: 'facets/requireOpenNow',
    data: openNow
  };
};

export const checkCuisine = (cuisine: string, isChecked: boolean): Action => {
  return {
    type: 'facets/checkCuisine',
    data: {
      cuisine,
      isChecked
    }
  };
};

export const migrateFacets = (fields: Set<string>): Action => {
  return {
    type: 'facets/migrate',
    data: fields
  };
};

export const clearFacets = (): Action => {
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
    case 'facets/requireOpeningHours':
      return {
        ...state,
        openingHours: action.data
      };
    case 'facets/requireOpenNow':
      return {
        ...state,
        openNow: action.data
      };
    case 'facets/checkCuisine': {
      const newCuisines = new Set(state.cuisines);
      if (action.data.isChecked) {
        newCuisines.add(action.data.cuisine);
      } else {
        newCuisines.delete(action.data.cuisine);
      }

      return {
        ...state,
        cuisines: newCuisines
      };
    }
    case 'facets/migrate': {
      const newFacets: FacetState = {};
      const fields = action.data;

      if (fields.has('name')) {
        newFacets.name = state.name ?? facetReset.name;
      }

      if (fields.has('opening_hours')) {
        newFacets.openingHours = state.openingHours ?? facetReset.openingHours;
        newFacets.openNow = state.openNow ?? facetReset.openNow;
      }

      if (fields.has('cuisine')) {
        newFacets.cuisines = state.cuisines ?? facetReset.cuisines;
      }

      return newFacets;
    }
    case 'facets/clear':
      return initialState.facets;
    default:
      return state;
  }
};
