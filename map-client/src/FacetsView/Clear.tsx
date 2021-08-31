import React from 'react';

import { useAppDispatch, clear } from '../state';

import { Facet, Button } from './styles';

const Clear = () => {
  const dispatch = useAppDispatch();

  return (
    <Facet>
      <Button
        type='button'
        onClick={() => dispatch(clear())}>
        Clear
      </Button>
    </Facet>
  );
};

export default Clear;
