import React from 'react';
import axios, { AxiosError } from 'axios';

import Modal, { MdHeader, MdMutedParagraph, MdParagraph } from './Modal';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  error: unknown;
}

const OverpassErrorModal = ({ isOpen, handleClose, error }: Props) => {
  const content = handleError(error);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <MdHeader>Query error</MdHeader>
      <MdParagraph>
        Your query failed with an error.
      </MdParagraph>
      {content}
    </Modal>
  );
};

const handleError = (error: unknown) => {
  if (error === null) {
    return <MdParagraph>No error</MdParagraph>;
  }

  if (!axios.isAxiosError(error)) {
    return handleUnexpectedError(error);
  }

  return handleAxiosError(error);
};

const handleAxiosError = (error: AxiosError) => {
  // See https://axios-http.com/docs/handling_errors
  if (error.response) {
    // The server responded with a status code outside the 2xx range
    return (
      <>
        <MdParagraph>
          The server responded with the status code {error.response.status}.
        </MdParagraph>
        {error.response.status === 504 &&
          <MdParagraph>
            <i>Usually this happens because the server was too busy
            to handle your request.</i>
          </MdParagraph>
        }
        <MdMutedParagraph>
          {error.response.data}
        </MdMutedParagraph>
      </>
    );
  } else if (error.request) {
    // The server produced no response
    return (
      <MdParagraph>
        There was no response from the API proxy.
      </MdParagraph>
    );
  } else {
    // Setting up the request produced an error
    return (
      <>
        <MdParagraph>
          Setting up the request produced an error:
        </MdParagraph>
        <MdMutedParagraph>
          {error.message}
        </MdMutedParagraph>
      </>
    );
  }
};

const handleUnexpectedError = (error: unknown) => {
  return (
    <>
      <MdParagraph>
        Something unexpected happened:
      </MdParagraph>
      <MdMutedParagraph>
        {new String(error)}
      </MdMutedParagraph>
    </>
  );
};

export default OverpassErrorModal;
