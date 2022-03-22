import React from 'react';

import { Facet } from './styles';
import { useAppSelector } from '../state';
import { SearchParams } from '../params';

interface Props {
  params: SearchParams;
}

const Name = ({ params }: Props) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!params.facets.name && !fields.has('name')) {
    return null;
  }

  return (
    <Facet>
      Name: {' '}
      <input
        type='text'
        value={params.facets.name ?? ''}
        onChange={e => {
          params.facets.name = e.target.value;
          params.commit();
        }} />
    </Facet>
  )
};

export default Name;
