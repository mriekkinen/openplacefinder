import React from 'react';

import { useAppDispatch, useAppSelector, setName } from '../state';

import { Facet } from './styles';

const Name = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.facets.name);

  return (
    <Facet>
      Name: {' '}
      <input
        type='text'
        value={name}
        onChange={e => dispatch(setName(e.target.value))} />
    </Facet>
  )
};

export default Name;
