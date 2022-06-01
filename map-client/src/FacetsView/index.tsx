import React from 'react';

import { useAppSelector } from '../state';
import { SearchParams } from '../params';
import { filter } from '../search';

import { Container, Facet, GraySpan, Header } from './styles';
import Name from './Name';
import { OpeningHours, OpenNow } from './OpeningHours';
import Lunch from './Lunch';
// import Cuisines from './Cuisines';
import Categories from './Categories';
import MatchCount from './MatchCount';
import Clear from './Clear';

interface Props {
  params: SearchParams;
}

const Facets = ({ params }: Props) => {
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const filteredData = filter(data, country, params.facets);

  /*
  const filteredData = useAppSelector(state => {
    return filter(state.poiList.data, state.facets);
  }, shallowEqual);
  */

  if (data.length === 0) {
    return (
      <Container>
        <Header>Filter by</Header>
        <Facet><GraySpan>No data has been loaded</GraySpan></Facet>
      </Container>
    );
  }

  return (
    <Container>
      <Header>Filter by</Header>
      <Name
        params={params} />
      <OpeningHours
        params={params} />
      <OpenNow
        params={params} />
      <Lunch
        params={params} />
      {/*
      <Cuisines
        data={data}
        country={country}
        params={params} />
      */}
      <Categories
        data={data}
        country={country}
        params={params} />
      <MatchCount
        filteredData={filteredData} />
      <Clear
        params={params} />
    </Container>
  );
};

export default Facets;
