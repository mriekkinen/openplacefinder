import React from 'react';

import {
  ModalType, showModal,
  useAppDispatch, useAppSelector
} from '../state';
import ZoomInModal from './ZoomInModal';

const ModalRenderer = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.ui.modal);

  const handleClose = () => dispatch(showModal(null));

  return (
    <ZoomInModal
      isOpen={modal === ModalType.ZoomInModal}
      handleClose={handleClose}
    />
  );
};

export default ModalRenderer;
