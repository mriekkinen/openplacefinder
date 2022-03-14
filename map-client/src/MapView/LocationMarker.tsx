import React from 'react';
import { CircleMarker as LeafletCircleMarker } from 'react-leaflet';

interface Props {
  lat: number;
  lng: number;
}

const LocationMarker = ({ lat, lng }: Props) => {
  return (
    <LeafletCircleMarker
      center={{ lat, lng }}
      color='#388E3C'
      pane='markerPane'
    />
  );
};

export default LocationMarker;
