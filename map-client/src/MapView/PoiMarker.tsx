import React from 'react';
import { Marker } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { Poi } from '../types';
import PoiTooltip from './PoiTooltip';

interface Props {
  e: Poi;
  icon: L.AwesomeMarkers.Icon;
  handleClick: () => void;
}

const PoiMarker = ({ e, icon, handleClick }: Props) => {
  if (e.lat === undefined || e.lon === undefined) {
    return null;
  }

  return (
    <Marker
      position={[e.lat, e.lon]}
      icon={icon}
      eventHandlers={{
        click: handleClick
      }}
    >
      <PoiTooltip e={e} />
    </Marker>
  );
};

export default PoiMarker;
