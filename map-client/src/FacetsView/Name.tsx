import React from 'react';

import { Facet } from './styles';
import { FacetState, useAppSelector } from '../state';

interface Props {
  facets: FacetState;
  setFacets: (newFacets: FacetState) => void;
}

const Name = ({ facets, setFacets }: Props) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!facets.name && !fields.has('name')) {
    return null;
  }

  return (
    <Facet>
      Name: {' '}
      <input
        type='text'
        value={facets.name ?? ''}
        onChange={e => setFacets({ ...facets, name: e.target.value })} />
    </Facet>
  )
};

export default Name;
