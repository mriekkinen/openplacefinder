import React from 'react';
import { LatLngBounds } from 'leaflet';

import { SearchArea } from '../state';
import { assertNever } from '../utils';

interface Props {
  area: SearchArea;
}

const Area = ({ area }: Props) => {
  return (
    <>
      In: {' '}
      <input
        disabled={true}
        value={getAreaString(area)} />
    </>
  );
};

const getAreaString = (area: SearchArea) => {
  switch (area.type) {
    case 'boundary':
      return area.name;
    case 'bbox':
      return getApproximateBBox(area.bbox);
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
