import React from 'react';

import { SearchParams } from '../params';

import { Facet, Button } from './styles';

interface Props {
  params: SearchParams
}

const Clear = ({ params }: Props) => {
  return (
    <Facet>
      <Button
        type='button'
        onClick={() => {
          params.facets = {};
          params.commit();
        }}>
        Clear filters
      </Button>
    </Facet>
  );
};

export default Clear;
