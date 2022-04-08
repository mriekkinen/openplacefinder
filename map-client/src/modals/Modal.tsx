import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import { Button } from '../FacetsView/styles';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  maxWidth?: string | number;
  maxHeight?: string | number;
  contentLabel?: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  handleClose,
  maxWidth = 500,
  maxHeight = '80%',
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

  return (
    <ReactModal
      isOpen={isOpen}
      style={styles}
      contentLabel={contentLabel}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
    >
      <Close onClick={handleClose} />
      {children}
      <Footer>
        <OkBtn onClick={handleClose}>Ok</OkBtn>
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

export default Modal;
