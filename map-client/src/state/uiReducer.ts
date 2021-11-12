import { initialState, ModalData, UiState } from './state';
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

export const showZoomInModal = (): Action => {
  return showModal({ type: 'ZoomInModal' });
};

export const showOverpassErrorModal = (error: unknown): Action => {
  return showModal({ type: 'OverpassErrorModal', error });
};

export const hideModal = (): Action => {
  return showModal(null);
};

const showModal = (modalData: ModalData | null): Action => {
  return {
    type: 'ui/showModal',
    data: modalData
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
    case 'ui/showModal':
      return {
        ...state,
        modal: action.data
      };
    default:
      return state;
  }
};
