import React from 'react';

import {
  PresetOption,
  hideModal,
  useAppDispatch, useAppSelector
} from '../state';
import ZoomInModal from './ZoomInModal';
import OverpassErrorModal from './OverpassErrorModal';
import PresetModal from './PresetModal';

const ModalRenderer = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.ui.modal);

  const handleClose = () => dispatch(hideModal());

  const isOpen = (type: string): boolean => {
    return modal !== null && modal.type === type;
  };

  const getError = () => {
    if (modal === null || modal.type !== 'OverpassErrorModal') {
      return null;
    }

    return modal.error;
  };

  const getChangeHandler = () => {
    if (modal === null || modal.type !== 'PresetModal') {
      return null;
    }

    return (p: PresetOption | null) => {
      modal.handleChange(p);
      dispatch(hideModal());
    };
  };

  return (
    <>
      <ZoomInModal
        isOpen={isOpen('ZoomInModal')}
        handleClose={handleClose}
      />
      <OverpassErrorModal
        isOpen={isOpen('OverpassErrorModal')}
        handleClose={handleClose}
        error={getError()}
      />
      <PresetModal
        isOpen={isOpen('PresetModal')}
        handleClose={handleClose}
        handleChange={getChangeHandler()}
      />
    </>
  );
};

export default ModalRenderer;
