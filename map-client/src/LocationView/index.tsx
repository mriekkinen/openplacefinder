import React from 'react';

import { useAppSelector } from '../state';
import { Container, Header } from './styles';
import Location from './Location';

const LocationView = () => {
  const location = useAppSelector(state => state.location);

  return (
    <Container>
      <Header>Location</Header>
      <Location lat={location.lat} lon={location.lon} />
    </Container>
  );
};

export default LocationView;
