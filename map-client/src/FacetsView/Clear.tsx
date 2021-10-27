import React from 'react';

import { useAppDispatch, clearFacets } from '../state';

import { Facet, Button } from './styles';

const Clear = () => {
  const dispatch = useAppDispatch();

  return (
    <Facet>
      <Button
        type='button'
        onClick={() => dispatch(clearFacets())}>
        Clear
      </Button>
    </Facet>
  );
};

export default Clear;
