import { initialState, UiState } from './state';
import { Action } from './actions';

export const setSelected = (id: number | null): Action => {
  return {
    type: 'ui/setSelected',
    data: id
  };
};

export const showFilters = (visible: boolean): Action => {
  return {
    type: 'ui/showFilters',
    data: visible
  };
};

export const uiReducer = (
  state: UiState = initialState.ui,
  action: Action
): UiState => {
  switch (action.type) {
    case 'ui/setSelected':
      return {
        ...state,
        selected: action.data
      };
    case 'ui/showFilters':
      return {
        ...state,
        filtersVisible: action.data
      };
    default:
      return state;
  }
};
