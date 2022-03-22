import React from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';

import { Preset } from '../presets';

interface Props {
  q: Preset | undefined;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const SearchInArea = ({ q, makeQuery }: Props) => {
  const map = useMap();

  // Make a new query using the current bounding box
  const setBBox = () => {
    if (!q) {
      // TODO: Consider showing a modal
      // Something like: "no feature type selected"
      return;
    }

    makeQuery(
      q,
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

export default SearchInArea;
