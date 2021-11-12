import React from 'react';

import {
  hideModal,
  useAppDispatch, useAppSelector
} from '../state';
import ZoomInModal from './ZoomInModal';
import OverpassErrorModal from './OverpassErrorModal';

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
    </>
  );
};

export default ModalRenderer;
