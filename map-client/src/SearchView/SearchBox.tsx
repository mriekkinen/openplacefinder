import React from 'react';
import Select from 'react-select';

import { Option } from './types';

const options = [
  { value: 'amenity=cafe', label: 'Café' },
  { value: 'amenity=fast_food', label: 'Fast food' },
  { value: 'amenity=pub', label: 'Pub' },
  { value: 'amenity=restaurant', label: 'Restaurant' },
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
