import React from 'react';
import styled from 'styled-components';
import Select, { components, ControlProps } from 'react-select';
import { MdSearch } from 'react-icons/md';

import { MapFeature } from '../state';
import { MAP_FEATURES } from '../data/mapFeatures';

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
      options={MAP_FEATURES}
      onChange={handleChange}
      isLoading={isLoading}
      isDisabled={isLoading}
      isClearable={true}
      components={{ Control }}
      styles={{
        menu: css => ({ ...css, zIndex: 99999 }),
        valueContainer: css => ({ ...css, paddingLeft: 6, paddingRight: 6 })
      }}
    />
  );
};

const Control = ({ children, ...props }: ControlProps<MapFeature, false>) => (
  <components.Control {...props}>
    <Icon /> {children}
  </components.Control>
);

const Icon = styled(MdSearch)`
  margin-left: 8px;
  width: 1.5em;
  height: 1.5em;
  color: hsl(0, 0%, 50%);
`;

export default SearchBox;
