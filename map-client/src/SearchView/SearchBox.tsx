import React from 'react';
import Select from 'react-select';

import { MapFeature } from '../state';
import { mapFeatures } from '../data/mapFeatures';

interface Props {
  value: MapFeature | null;
  handleChange: (newValue: MapFeature | null) => void;
  isLoading: boolean;
}

const SearchBox = ({ value, handleChange, isLoading }: Props) => {
  return (
    <Select
      placeholder='What are you looking for?'
      value={value}
      options={mapFeatures}
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
