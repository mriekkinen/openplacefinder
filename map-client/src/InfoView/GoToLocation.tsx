import React from 'react';
import { GoLocation } from 'react-icons/go';

import { Poi } from '../types';
import { hasLatLon } from '../utils';
import { MapHandle } from '../MapView/SaveMapRef';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const GoToLocation = ({ mapRef, e }: Props) => {
  if (!hasLatLon(e)) {
    return null;
  }

  return (
    <GoLocation onClick={() => {
      mapRef.current?.panTo(e);
    }} />
  );
};

export default GoToLocation;
