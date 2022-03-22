import React from 'react';

import { useAppSelector } from '../state';
import { SearchParams } from '../params';
import { Facet } from './styles';

interface OpeningHoursProps {
  params: SearchParams;
}

export const OpeningHours = ({ params }: OpeningHoursProps) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!params.facets.openingHours && !fields.has('opening_hours')) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.facets.openingHours = e.target.checked;
    params.commit();
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpeningHours'
          checked={params.facets.openingHours ?? false}
          onChange={handleChange} />
        Only places with opening hours
      </label>
    </Facet>
  );
};

interface OpenNowProps {
  params: SearchParams;
}

export const OpenNow = ({ params }: OpenNowProps) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!params.facets.openNow && !fields.has('opening_hours')) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.facets.openNow = e.target.checked;
    params.commit();
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireOpenNow'
          checked={params.facets.openNow ?? false}
          onChange={handleChange} />
        Only places which are now open
      </label>
    </Facet>
  );
};
