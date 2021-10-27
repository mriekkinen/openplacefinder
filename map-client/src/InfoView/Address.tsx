import React from 'react';
import styled from 'styled-components';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SetMapRef';
import { getAddress } from '../info';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const Address = ({ mapRef, e }: Props) => {
  const handleClick = () => {
    if (mapRef.current) {
      mapRef.current.panTo(e.lat, e.lon);
    }
  };

  return (
    <div>
      <Span onClick={handleClick}>
        {getAddress(e, 'long') ?? '(unknown)'}
      </Span>
    </div>
  );
};

const Span = styled.span`
  cursor: pointer;
`;

export default Address;
