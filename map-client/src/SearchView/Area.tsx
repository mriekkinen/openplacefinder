import React from 'react';
import { LatLngBounds } from 'leaflet';
import Select from 'react-select';

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
      styles={{
        menu: provided => ({ ...provided, zIndex: 99999 })
      }}
    />
  );
};

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
