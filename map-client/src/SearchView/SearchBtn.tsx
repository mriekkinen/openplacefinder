import React from 'react';

interface Props {
  handleClick: () => void;
}

const SearchBtn = ({ handleClick }: Props) => {
  return (
    <button
      type='button'
      onClick={handleClick}>
      Search
    </button>
  );
};

export default SearchBtn;
