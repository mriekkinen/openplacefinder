import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import { Button } from '../FacetsView/styles';

export enum ModalWidth {
  Small = 300,
  Large = 500
}

export enum ModalButton {
  Ok = 'ok',
  Cancel = 'cancel'
}

interface Props {
  isOpen: boolean;
  handleClose: (b: ModalButton) => void;
  maxWidth?: string | number;
  maxHeight?: string | number;
  fixedWidth?: boolean;
  buttons?: ModalButton[];
  contentLabel?: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  handleClose,
  maxWidth = ModalWidth.Small,
  maxHeight = '80%',
  fixedWidth = false,
  buttons = [ModalButton.Ok],
  contentLabel = 'There\'s an issue with your query',
  children
}: Props) => {
  const styles: ReactModal.Styles = {
    overlay: {
      zIndex: 100000
    },
    content: {
      // Center
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      // Clear defaults
      right: 'auto',
      bottom: 'auto',
      // Set max size
      maxWidth: maxWidth,
      maxHeight: maxHeight,
    }
  };

  if (fixedWidth && styles.content?.maxWidth) {
    styles.content.width = styles.content.maxWidth;
  }

  const handler = (b: ModalButton) => () => handleClose(b);

  return (
    <ReactModal
      isOpen={isOpen}
      style={styles}
      contentLabel={contentLabel}
      onRequestClose={handler(ModalButton.Ok)}
      shouldCloseOnOverlayClick={true}
    >
      <Close onClick={handler(ModalButton.Ok)} />
      {children}
      <Footer>
        {buttons.includes(ModalButton.Cancel) && (
          <CancelBtn onClick={handler(ModalButton.Cancel)}>Cancel</CancelBtn>
        )}
        {buttons.includes(ModalButton.Ok) && (
          <OkBtn onClick={handler(ModalButton.Ok)}>Ok</OkBtn>
        )}
      </Footer>
    </ReactModal>
  );
};

export const MdHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

export const MdParagraph = styled.p``;

export const MdMutedParagraph = styled(MdParagraph)`
  color: hsl(0, 0%, 50%);
`;

const Close = styled(MdClose)`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OkBtn = styled(Button)`
  flex: none;
`;

const CancelBtn = styled(OkBtn)`
  background-color: #9E9E9E;
  margin-right: 0.25em;

  &:hover {
    background-color: #BDBDBD;
  }
`;

export default Modal;
