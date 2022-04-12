import React from 'react';

import { getWarnOfResultSetSize } from '../conf';
import Modal, { MdHeader, MdParagraph, ModalButton } from './Modal';

interface Props {
  isOpen: boolean;
  handleClose: (ok: boolean) => void;
  n: number | null;
}

const SizeWarningModal = ({ isOpen, handleClose, n }: Props) => {
  const handler = (b: ModalButton) => {
    handleClose(b === ModalButton.Ok);
  };

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handler}
      buttons={[ModalButton.Cancel, ModalButton.Ok]}
    >
      <MdHeader>Warning</MdHeader>
      <MdParagraph>
        Your query produced <b>{n ?? '(?)'}</b> results.
      </MdParagraph>
      <MdParagraph>
        Displaying large result sets may slow down your browser.
        We show this warning if the result set contains more
        than {getWarnOfResultSetSize()} elements.
      </MdParagraph>
      <MdParagraph>
        You may be able to get around this by using filters to reduce
        the dataset to a more manageable size.
      </MdParagraph>
      <MdParagraph>
        Do you wish to continue?
      </MdParagraph>
    </Modal>
  );
};

export default SizeWarningModal;
