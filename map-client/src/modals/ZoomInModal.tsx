import React from 'react';

import { getMinZoomForQueries } from '../conf';
import Modal, { MdHeader, MdParagraph } from './Modal';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ZoomInModal = ({ isOpen, handleClose }: Props) => {
  const minZoom = getMinZoomForQueries();

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <MdHeader>Zoom in</MdHeader>
      <MdParagraph>Please zoom in to view results.</MdParagraph>
      <MdParagraph>You can view data at zoom &ge; {minZoom}.</MdParagraph>
    </Modal>
  );
};

export default ZoomInModal;
