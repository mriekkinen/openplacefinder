import React from 'react';
import { GoLocation } from 'react-icons/go';

import { Poi } from '../types';
import { setTab, TabIndex, useAppDispatch } from '../state';
import { MapHandle } from '../MapView/SetMapRef';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const Address = ({ mapRef, e }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (mapRef.current) {
      dispatch(setTab(TabIndex.Map));
      mapRef.current.panTo(e.lat, e.lon);
    }
  };

  return (
    <span
      className='address'
      onClick={handleClick}>
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
