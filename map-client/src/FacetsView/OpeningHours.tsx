import React from 'react';
import { FacetState, useAppSelector } from '../state';

import { Facet } from './styles';

interface OpeningHoursProps {
  facets: FacetState;
  setFacets: (newFacets: FacetState) => void;
}

export const OpeningHours = ({ facets, setFacets }: OpeningHoursProps) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!facets.openingHours && !fields.has('opening_hours')) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFacets({ ...facets, openingHours: e.target.checked })
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpeningHours'
          checked={facets.openingHours ?? false}
          onChange={handleChange} />
        Only places with opening hours
      </label>
    </Facet>
  );
};

interface OpenNowProps {
  facets: FacetState;
  setFacets: (newFacets: FacetState) => void;
}

export const OpenNow = ({ facets, setFacets }: OpenNowProps) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!facets.openNow && !fields.has('opening_hours')) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFacets({ ...facets, openNow: e.target.checked })
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpenNow'
          checked={facets.openNow ?? false}
          onChange={handleChange} />
        Only places which are now open
      </label>
    </Facet>
  );
};
