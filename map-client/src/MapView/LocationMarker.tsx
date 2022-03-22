import React from 'react';
import {
  Marker as LeafletMarker,
  Tooltip as LeafletTooltip
} from 'react-leaflet';

interface Props {
  lat: number;
  lng: number;
}

//
// TODO: The tooltip anchor is wrong!
//
const LocationMarker = ({ lat, lng }: Props) => {
  return (
    <LeafletMarker
      position={{ lat, lng }}>
      <LeafletTooltip direction='top'>
        <strong>Your location</strong><br />
        Right-click on the map to change this.
      </LeafletTooltip>
    </LeafletMarker>
  );
};

export default LocationMarker;
