import React from 'react';
import { CircleMarker as LeafletCircleMarker } from 'react-leaflet';

interface Props {
  lat: number;
  lon: number;
}

const LocationMarker = ({ lat, lon }: Props) => {
  return (
    <LeafletCircleMarker
      center={{ lat, lng: lon }}
      color='#388E3C'
      pane='markerPane'
    />
  );
};

export default LocationMarker;
