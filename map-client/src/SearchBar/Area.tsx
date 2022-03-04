import React from 'react';
import styled from 'styled-components';
import { LatLngBounds } from 'leaflet';
import Select, { components, ControlProps } from 'react-select';
import { GoLocation } from 'react-icons/go';

export interface AREA_OPTION  {
  value: LatLngBounds | null;
  label: string;
}

export const CURRENT_MAP_VIEW: AREA_OPTION = {
  value: null,
  label: 'Current map view'  
};

const OPTIONS: AREA_OPTION[] = [ CURRENT_MAP_VIEW ];

interface Props {
  value: AREA_OPTION;
  handleChange: (newOption: AREA_OPTION | null) => void;
  isLoading: boolean;
}

const Area = ({ value, handleChange, isLoading }: Props) => {
  return (
    <Select
      placeholder='Where?'
      value={value}
      options={OPTIONS}
      onChange={handleChange}
      isLoading={false}
      isDisabled={true}
      isClearable={false}
      components={{ Control }}
      styles={{
        menu: css => ({ ...css, zIndex: 99999 }),
        valueContainer: css => ({ ...css, paddingLeft: 6, paddingRight: 6 })
      }}
    />
  );
};

const Control = ({ children, ...props }: ControlProps<AREA_OPTION, false>) => (
  <components.Control {...props}>
    <Icon /> {children}
  </components.Control>
);

const Icon = styled(GoLocation)`
  margin-left: 8px;
  width: 1.25em;
  height: 1.25em;
  color: hsl(0, 0%, 50%);
`;

const getApproximateBBox = (bounds: LatLngBounds) => {
  const values = [
    bounds.getSouth(), bounds.getWest(),
    bounds.getNorth(), bounds.getEast()
  ];

  return `(${values.map(x => x.toFixed(4)).join(', ')})`;
};

export default Area;
