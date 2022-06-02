import React from 'react';

import { useAppSelector } from '../state';
import { SearchParams } from '../params';
import { Facet } from './styles';

interface Props {
  params: SearchParams;
}

export const Lunch = ({ params }: Props) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!params.facets.lunch && !fields.has('lunch') && !fields.has('cuisine')) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.facets.lunch = e.target.checked;
    params.commit();
  };

  return (
    <Facet>
      <label>
        <input
          type='checkbox'
          name='requireLunch'
          checked={params.facets.lunch ?? false}
          onChange={handleChange} />
        Lunch
      </label>
    </Facet>
  );
};

export default Lunch;
