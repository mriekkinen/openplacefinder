import React from 'react';

import { Country, FacetState } from '../state';
import { filter, countCategories } from '../search';
import { SearchParams } from '../params';
import { Poi } from '../types';
import { presetSingleton } from '../presets';

import CheckboxFieldSet from './CheckboxFieldSet';

interface Props {
  data: Poi[];
  country: Country | undefined;
  params: SearchParams;
}

const Categories = ({ data, country, params }: Props) => {
  if (!params.facets.categories && data.length === 0) {
    return null;
  }

  const checkedCategories = new Set(params.facets.categories);

  // Apply filters excluding categories, and
  // compute the number of appearances (in that list)
  const facetsExcludingCategories: FacetState = {
    ...params.facets,
    categories: new Set<string>()
  };

  const filtered = filter(data, country, facetsExcludingCategories);
  const counts = countCategories(filtered);

  const handleChange = (category: string)
  : React.ChangeEventHandler<HTMLInputElement> => (e) => {
    if (e.target.checked) {
      checkedCategories.add(category);
    } else {
      checkedCategories.delete(category);
    }

    params.facets.categories = checkedCategories;
    params.commit();
  };

  const isChecked = (category: string) => {
    return checkedCategories.has(category);
  };

  const getLabel = (category: string) => {
    return presetSingleton.getName(category) ?? category;
  };

  return (
    <CheckboxFieldSet
      legend='Categories'
      counts={counts}
      getLabel={getLabel}
      isChecked={isChecked}
      handleChange={handleChange}
    />
  );
};

export default Categories;
