import React from 'react';

import { useAppDispatch, useAppSelector, setBrand } from '../state';

import { Facet } from './styles';

const Brand = () => {
  const dispatch = useAppDispatch();
  const brand = useAppSelector(state => state.facets.brand);

  return (
    <Facet>
      Brand: {' '}
      <input
        type='text'
        value={brand}
        onChange={e => dispatch(setBrand(e.target.value))} />
    </Facet>
  )
};

export default Brand;
