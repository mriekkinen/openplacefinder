import React from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';

import { MapFeature } from '../state';

interface Props {
  q: string | undefined;
  findFeature: (q: string | undefined) => MapFeature | undefined;
  makeQuery: (
    feature: MapFeature,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const AreaFilter = ({ q, findFeature, makeQuery }: Props) => {
  const map = useMap();

  // Make a new query using the current bounding box
  const setBBox = () => {
    const feature = findFeature(q);
    if (!feature) {
      // TODO: Consider showing a modal
      // Something like: "no feature selected"
      return;
    }

    makeQuery(
      feature,
      map.getBounds(),
      map.getZoom()
    );
  };

  return (
    <div className='leaflet-top leaflet-right'>
      <div className='leaflet-control leaflet-bar' onClick={setBBox}>
        <a
          href='#'
          title='Search in this area'
          role='button'
          aria-label='Search in this area'>
          <Icon />
        </a>
      </div>
    </div>
  );
};

const Icon = styled(MdReplay)`
  font-size: 22px;
  vertical-align: middle;
`;

export default AreaFilter;
