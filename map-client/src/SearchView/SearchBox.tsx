import React from 'react';
import Select from 'react-select';

import { Category, CATEGORIES } from '../state';

interface Props {
  value: Category | null;
  handleChange: (newCategory: Category | null) => void;
  isLoading: boolean;
}

const SearchBox = ({ value, handleChange, isLoading }: Props) => {
  return (
    <Select
      placeholder='What are you looking for?'
      value={value}
      options={CATEGORIES}
      onChange={handleChange}
      isLoading={isLoading}
      isDisabled={isLoading}
      isClearable={true}
      styles={{
        menu: provided => ({ ...provided, zIndex: 9999 })
      }}
    />
  );
};

export default SearchBox;
