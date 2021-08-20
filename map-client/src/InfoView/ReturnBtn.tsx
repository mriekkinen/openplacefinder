import React from 'react';
import { MdArrowBack } from 'react-icons/md';

interface Props {
  handleClick: () => void;
}

const ReturnBtn = ({ handleClick }: Props) => (
  <button onClick={handleClick}>
    <MdArrowBack /> Return to results
  </button>
);

export default ReturnBtn;
