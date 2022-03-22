import React from 'react';
import { CircleMarker as LeafletCircleMarker } from 'react-leaflet';

import { Poi } from '../types';
import { Preset } from '../presets';
import Tooltip from './Tooltip';

interface Props {
  e: Poi;
  isSelected: boolean;
  handleClick: () => void;
  preset: Preset | undefined;
}

const CircleMarker = ({ e, isSelected, handleClick, preset }: Props) => {
  return (
    <LeafletCircleMarker
      center={[e.lat, e.lng]}
      eventHandlers={{
        click: handleClick
      }}
      bubblingMouseEvents={false}
    >
      <Tooltip e={e} preset={preset} />
    </LeafletCircleMarker>
  );
};

export default CircleMarker;
