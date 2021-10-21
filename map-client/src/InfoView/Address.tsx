import React from 'react';
import styled from 'styled-components';

import { Poi } from '../types';
import { setTab, TabIndex, useAppDispatch } from '../state';
import { MapHandle } from '../MapView/SetMapRef';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const Address = ({ mapRef, e }: Props) => {
  const dispatch = useAppDispatch();

  // TODO: Clicking on the icon should do the same!
  // TODO: The "clickable" area may be too wide!
  const handleClick = () => {
    if (mapRef.current) {
      dispatch(setTab(TabIndex.Map));
      mapRef.current.panTo(e.lat, e.lon);
    }
  };

  return (
    <Div onClick={handleClick}>
      {getAddress(e)}
    </Div>
  );
};

const Div = styled.div`
  cursor: pointer;
`;

export const getAddress = (e: Poi) => {
  if (!e.tags['addr:street']) {
    return null;
  }

  return <span>{e.tags['addr:street']} {e.tags['addr:housenumber']}</span>
};

export default Address;
