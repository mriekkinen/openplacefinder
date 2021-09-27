import { initialState, TabIndex, UiState } from './state';
import { Action } from './actions';

export const setTab = (tab: TabIndex): Action => {
  return {
    type: 'ui/setTab',
    data: tab
  };
};

export const setSelected = (id: number | null): Action => {
  return {
    type: 'ui/setSelected',
    data: id
  };
};

export const uiReducer = (
  state: UiState = initialState.ui,
  action: Action
): UiState => {
  switch (action.type) {
    case 'ui/setTab':
      return {
        ...state,
        tab: action.data
      };
    case 'ui/setSelected':
      return {
        ...state,
        selected: action.data
      };
    default:
      return state;
  }
};
