import React from 'react';

import {
  PresetOption,
  hideModal,
  useAppDispatch, useAppSelector
} from '../state';
import { assertNever } from '../utils';
import ZoomInModal from './ZoomInModal';
import OverpassErrorModal from './OverpassErrorModal';
import SizeWarningModal from './SizeWarningModal';
import PresetModal from './PresetModal';

const ModalRenderer = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.ui.modal);

  const handleClose = () => dispatch(hideModal());

  if (modal === null) {
    return null;
  }

  const modalType = modal.type;

  switch (modalType) {
    case 'ZoomInModal':
      return (
        <ZoomInModal
          isOpen={true}
          handleClose={handleClose}
        />
      );
    case 'OverpassErrorModal':
      return (
        <OverpassErrorModal
          isOpen={true}
          handleClose={handleClose}
          error={modal.error}
        />
      );
    case 'SizeWarningModal':
      return (
        <SizeWarningModal
          isOpen={true}
          handleClose={(ok: boolean) => {
            modal.handleResult(ok);
            dispatch(hideModal());
          }}
          n={modal.n}
        />
      );
    case 'PresetModal':
      return (
        <PresetModal
          isOpen={true}
          handleClose={handleClose}
          handleChange={(p: PresetOption | null) => {
            modal.handleChange(p);
            dispatch(hideModal());
          }}
        />
      );
    default:
      assertNever(modalType);
      return null;
  }
};

export default ModalRenderer;
