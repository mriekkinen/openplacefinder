import React from 'react';

import { FacetState, Country, useAppSelector } from '../state';
import { filter, countCuisines } from '../search';
import { SearchParams } from '../params';
import { Poi } from '../types';

import CheckboxFieldSet from './CheckboxFieldSet';

interface Props {
  data: Poi[];
  country: Country | undefined;
  params: SearchParams;
}

const Cuisines = ({ data, country, params }: Props) => {
  const fields = useAppSelector(state => state.poiList.fields);

  if (!params.facets.cuisines && !fields.has('cuisine')) {
    return null;
  }

  const checkedCuisines = new Set(params.facets.cuisines);

  // Apply filters excluding cuisine, and
  // compute the number of appearances (in that list)
  const facetsExcludingCuisine: FacetState = {
    ...params.facets,
    cuisines: new Set<string>()
  };

  const filtered = filter(data, country, facetsExcludingCuisine);
  const counts = countCuisines(filtered);

  const handleChange = (cuisine: string)
  : React.ChangeEventHandler<HTMLInputElement> => (e) => {
    if (e.target.checked) {
      checkedCuisines.add(cuisine);
    } else {
      checkedCuisines.delete(cuisine);
    }

    params.facets.cuisines = checkedCuisines;
    params.commit();
  };

  const isChecked = (cuisine: string) => {
    return checkedCuisines.has(cuisine);
  };

  const getLabel = (cuisine: string) => {
    return cuisine;
  };

  return (
    <CheckboxFieldSet
      legend='Cuisines'
      counts={counts}
      getLabel={getLabel}
      isChecked={isChecked}
      handleChange={handleChange}
    />
  );
};

export default Cuisines;
