import React from 'react';

import { useAppSelector } from '../state';
import { SearchParams } from '../params';
import { filter } from '../search';

import { Container, Header } from './styles';
import Name from './Name';
import { OpeningHours, OpenNow } from './OpeningHours';
import Cuisines from './Cuisines';
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

  return (
    <Container>
      <Header>Filter by</Header>
      <Name
        params={params} />
      <OpeningHours
        params={params} />
      <OpenNow
        params={params} />
      <Cuisines
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
