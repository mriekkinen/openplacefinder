import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import { Poi } from '../types';

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const ReturnBtn = ({ setSelected }: Props) => (
  <button
    onClick={() => setSelected(null)}>
    <MdArrowBack /> Return to results
  </button>
);

export default ReturnBtn;
