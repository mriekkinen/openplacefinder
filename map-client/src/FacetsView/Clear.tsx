import React from 'react';

import { FacetState } from '../state';

import { Facet, Button } from './styles';

interface Props {
  setFacets: (newFacets: FacetState) => void;
}

const Clear = ({ setFacets }: Props) => {
  return (
    <Facet>
      <Button
        type='button'
        onClick={() => setFacets({})}>
        Clear filters
      </Button>
    </Facet>
  );
};

export default Clear;
