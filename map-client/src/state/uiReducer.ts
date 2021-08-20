import { Poi } from '../types';
import { initialState, UiState } from './state';
import { Action } from './actions';

export const setSelected = (poi: Poi | null): Action => {
  return {
    type: 'ui/setSelected',
    data: poi
  };
};

export const setHover = (poi: Poi | null): Action => {
  return {
    type: 'ui/setHover',
    data: poi
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
    case 'ui/setHover':
      return {
        ...state,
        hover: action.data
      };
    default:
      return state;
  }
};
