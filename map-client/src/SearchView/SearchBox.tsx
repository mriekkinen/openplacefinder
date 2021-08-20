import React from 'react';
import Select from 'react-select';

import { Option } from './types';

const options = [
  { value: 'shop=tea', label: 'Tea shop' },
  { value: 'amenity=university', label: 'University' },
  { value: 'amenity=library', label: 'Library' },
  { value: 'amenity=hospital', label: 'Hospital' },
  { value: 'shop=department_store', label: 'Department store' },
  { value: 'leisure=stadium', label: 'Stadium' }
];

interface Props {
  value: Option | null;
  handleChange: (newOption: Option | null) => void;
}

const SearchBox = ({ value, handleChange }: Props) => {
  return (
    <Select
      value={value}
      options={options}
      onChange={handleChange}
      styles={{
        menu: provided => ({ ...provided, zIndex: 9999 })
      }}
    />
  );
};

export default SearchBox;
