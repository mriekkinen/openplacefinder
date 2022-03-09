import React from 'react';

import { FacetState, useAppSelector } from '../state';
import { filter } from '../search';

import { Container, Header } from './styles';
import Name from './Name';
import { OpeningHours, OpenNow } from './OpeningHours';
import Cuisines from './Cuisines';
import MatchCount from './MatchCount';
import Clear from './Clear';

interface Props {
  facets: FacetState;
  setFacets: (newFacets: FacetState) => void;
}

const Facets = ({ facets, setFacets }: Props) => {
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const filteredData = filter(data, country, facets);

  /*
  const filteredData = useAppSelector(state => {
    return filter(state.poiList.data, state.facets);
  }, shallowEqual);
  */

  return (
    <Container>
      <Header>Filter by</Header>
      <Name
        facets={facets}
        setFacets={setFacets} />
      <OpeningHours
        facets={facets}
        setFacets={setFacets} />
      <OpenNow
        facets={facets}
        setFacets={setFacets} />
      <Cuisines
        data={data}
        country={country}
        facets={facets}
        setFacets={setFacets} />
      <MatchCount
        filteredData={filteredData} />
      <Clear
        setFacets={setFacets} />
    </Container>
  );
};

export default Facets;
