import React from 'react';
import { CircleMarker as LeafletCircleMarker } from 'react-leaflet';

import { Poi } from '../types';
import Tooltip from './Tooltip';

interface Props {
  e: Poi;
  isSelected: boolean;
  handleClick: () => void;
}

const CircleMarker = ({ e, isSelected, handleClick }: Props) => {
  if (e.lat === undefined || e.lon === undefined) {
    return null;
  }

  return (
    <LeafletCircleMarker
      center={[e.lat, e.lon]}
      eventHandlers={{
        click: handleClick
      }}
      bubblingMouseEvents={false}
    >
      <Tooltip e={e} />
    </LeafletCircleMarker>
  );

  /*
  return (
    <LeafletCircleMarker
      center={[e.lat, e.lon]}
    />
  );
  */
};

export default CircleMarker;
