import React from 'react';

import { useAppSelector } from '../state';
import filter from './filter';

import { Container, Header } from './styles';
import Name from './Name';
import Brand from './Brand';
import { OpeningHours, OpenNow } from './OpeningHours';
import Cuisine from './Cuisine';
import MatchCount from './MatchCount';
import Clear from './Clear';

const Facets = () => {
  const data = useAppSelector(state => state.poiList.data);
  const facets = useAppSelector(state => state.facets);

  const filteredData = filter(data, facets);

  /*
  const filteredData = useAppSelector(state => {
    return filter(state.poiList.data, state.facets);
  }, shallowEqual);
  */

  return (
    <Container>
      <Header>Refine by</Header>
      <Name />
      <Brand />
      <OpeningHours />
      <OpenNow />
      <Cuisine data={data} facets={facets} />
      <MatchCount filteredData={filteredData} />
      <Clear />
    </Container>
  );
};

export default Facets;
