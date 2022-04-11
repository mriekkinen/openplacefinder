import React from 'react';

import { Country, FacetState } from '../state';
import { filter, countCategories, sortByCount } from '../search';
import { SearchParams } from '../params';
import { Poi } from '../types';
import { presetSingleton } from '../presets';

import { Facet } from './styles';
import Category from './Category';

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
  const categories = sortByCount(counts);

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

  return (
    <Facet>
      <fieldset>
        <legend>Categories</legend>
        {categories.map(category =>
          <Category
            key={category}
            category={category}
            label={presetSingleton.getName(category) ?? category}
            count={counts.get(category)}
            isChecked={isChecked(category)}
            handleChange={handleChange(category)}
          />
        )}
      </fieldset>
    </Facet>
  );
};

export default Categories;
