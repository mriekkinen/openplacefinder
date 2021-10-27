import React from 'react';
import styled from 'styled-components';
import { LatLngBounds } from 'leaflet';
import Select, { components, ControlProps } from 'react-select';
import { GoLocation } from 'react-icons/go';

import { SearchArea, SearchBoundary } from '../state';
import { assertNever } from '../utils';

export interface AREA_OPTION  {
  value: SearchBoundary | null;
  label: string;
}

const OPTIONS: AREA_OPTION[] = [
  {
    value: null,
    label: 'Current map view'
  },
  // {
  //   value: {
  //     type: 'boundary',
  //     name: 'Helsinki',
  //     id: 3600034914
  //   },
  //   label: 'Helsinki'
  // }
];

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

const getAreaString = (area: SearchArea) => {
  switch (area.type) {
    case 'boundary':
      return area.name;
    case 'bbox':
      console.log('bbox:', getApproximateBBox(area.bbox));
      return 'Current map view';
    default:
      return assertNever(area);
  }
};

const getApproximateBBox = (bounds: LatLngBounds) => {
  const values = [
    bounds.getSouth(), bounds.getWest(),
    bounds.getNorth(), bounds.getEast()
  ];

  return `(${values.map(x => x.toFixed(4)).join(', ')})`;
};

export default Area;
