import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { Poi } from '../types';
import Tooltip from './Tooltip';

interface Props {
  e: Poi;
  icon: L.AwesomeMarkers.Icon;
  handleClick: () => void;
}

const Marker = ({ e, icon, handleClick }: Props) => {
  if (e.lat === undefined || e.lon === undefined) {
    return null;
  }

  return (
    <LeafletMarker
      position={[e.lat, e.lon]}
      icon={icon}
      eventHandlers={{
        click: handleClick
      }}
    >
      <Tooltip e={e} />
    </LeafletMarker>
  );
};

export default Marker;
