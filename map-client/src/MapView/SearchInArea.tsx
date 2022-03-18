import React from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';

import { PresetOption } from '../state';
import { Preset } from '../presets';

interface Props {
  q: string | undefined;
  findPreset: (q: string | undefined) => PresetOption | undefined;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const SearchInArea = ({ q, findPreset, makeQuery }: Props) => {
  const map = useMap();

  // Make a new query using the current bounding box
  const setBBox = () => {
    const preset = findPreset(q)?.value;
    if (!preset) {
      // TODO: Consider showing a modal
      // Something like: "no feature type selected"
      return;
    }

    makeQuery(
      preset,
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
