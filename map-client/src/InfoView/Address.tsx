import React from 'react';
import { GoLocation } from 'react-icons/go';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import { getAddress } from '../MapView/address';

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

export default Address;
