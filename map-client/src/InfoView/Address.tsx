import React from 'react';
import { GoLocation } from 'react-icons/go';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SetMapRef';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const Address = ({ mapRef, e }: Props) => {
  return (
    <span
      className='address'
      onClick={() => mapRef.current?.panTo(e)}>
      <GoLocation /> {getAddress(e)}
    </span>
  );
};

export const getAddress = (e: Poi) => {
  if (!e.tags['addr:street']) {
    return null;
  }

  return <span>{e.tags['addr:street']} {e.tags['addr:housenumber']}</span>
};

export default Address;
