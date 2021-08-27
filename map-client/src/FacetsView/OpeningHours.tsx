import React from 'react';
import {
  useAppDispatch, useAppSelector,
  requireOpeningHours, requireOpenNow
} from '../state';

import { Facet } from './styles';

export const OpeningHours = () => {
  const dispatch = useAppDispatch();
  const openingHours = useAppSelector(state => state.facets.openingHours);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(requireOpeningHours(e.target.checked));
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpeningHours'
          checked={openingHours}
          onChange={handleChange} />
        Only places with opening hours
      </label>
    </Facet>
  );
};

export const OpenNow = () => {
  const dispatch = useAppDispatch();
  const openNow = useAppSelector(state => state.facets.openNow);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(requireOpenNow(e.target.checked));
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpenNow'
          checked={openNow}
          onChange={handleChange} />
        Only places which are now open
      </label>
    </Facet>
  );
};
