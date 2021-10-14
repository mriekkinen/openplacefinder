import React from 'react';

import { useAppSelector } from '../state';
import { filter } from '../search';

import { Container, Header } from './styles';
import Name from './Name';
import { OpeningHours, OpenNow } from './OpeningHours';
import Cuisines from './Cuisines';
import MatchCount from './MatchCount';
import Clear from './Clear';

const Facets = () => {
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const facets = useAppSelector(state => state.facets);

  const filteredData = filter(data, country, facets);

  /*
  const filteredData = useAppSelector(state => {
    return filter(state.poiList.data, state.facets);
  }, shallowEqual);
  */

  return (
    <Container>
      <Header>Filter by</Header>
      <Name />
      <OpeningHours />
      <OpenNow />
      <Cuisines data={data} country={country} facets={facets} />
      <MatchCount filteredData={filteredData} />
      <Clear />
    </Container>
  );
};

export default Facets;
