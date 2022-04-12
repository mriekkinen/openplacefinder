import { AreaOption, PresetOption, initialState, ModalData, UiState } from './state';
import { Action } from './actions';

export const setArea = (newArea: AreaOption | null): Action => {
  return {
    type: 'ui/setArea',
    data: newArea
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

export const showSizeWarningModal = (
  n: number,
  handleResult: (ok: boolean) => void
): Action => {
  return showModal({ type: 'SizeWarningModal', n, handleResult });
};

export const showPresetModal = (
  handleChange: (newValue: PresetOption | null) => void
): Action => {
  return showModal({ type: 'PresetModal', handleChange });
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
    case 'ui/setArea':
      return {
        ...state,
        area: action.data
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
