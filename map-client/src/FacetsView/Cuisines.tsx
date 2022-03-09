import React, { useState } from 'react';

import { FacetState, Country, useAppSelector } from '../state';
import { filter, countCuisines, sortByCount } from '../search';
import { Poi } from '../types';

import { Facet } from './styles';
import Cuisine from './Cuisine';
import MoreLessBtn from './MoreLessBtn';

const MORE_LESS_THRESHOLD = 10;

interface Props {
  data: Poi[];
  country: Country | undefined;
  facets: FacetState;
  setFacets: (newFacets: FacetState) => void;
}

const Cuisines = ({ data, country, facets, setFacets }: Props) => {
  const fields = useAppSelector(state => state.poiList.fields);

  const [showAll, setShowAll] = useState<boolean>(false);

  if (!facets.cuisines && !fields.has('cuisine')) {
    return null;
  }

  const checkedCuisines = new Set(facets.cuisines);

  // Apply filters excluding cuisine, and
  // compute the number of appearances (in that list)
  const facetsExcludingCuisine: FacetState = {
    ...facets,
    cuisines: new Set<string>()
  };

  const filtered = filter(data, country, facetsExcludingCuisine);
  const counts = countCuisines(filtered);

  // Choose all cuisines that have a non-zero count and sort
  //
  // Note: a non-selected cuisine may have a non-zero count,
  // because a restaurant (that matches the filters) may serve
  // more than one type of cuisine
  const cuisines = sortByCount(counts);

  // Apply the "Show more/less" filter
  const visibleCuisines = showAll
    ? cuisines
    : cuisines.slice(0, MORE_LESS_THRESHOLD);

  const handleChange = (cuisine: string)
  : React.ChangeEventHandler<HTMLInputElement> => (e) => {
    if (e.target.checked) {
      checkedCuisines.add(cuisine);
    } else {
      checkedCuisines.delete(cuisine);
    }

    setFacets({ ...facets, cuisines: checkedCuisines })
  };

  const isChecked = (cuisine: string) => {
    return checkedCuisines.has(cuisine);
  };

  return (
    <Facet>
      <fieldset>
        <legend>Cuisines</legend>
        {visibleCuisines.map(cuisine =>
          <Cuisine
            key={cuisine}
            cuisine={cuisine}
            count={counts.get(cuisine)}
            isChecked={isChecked(cuisine)}
            handleChange={handleChange(cuisine)}
          />
        )}
        {cuisines.length > MORE_LESS_THRESHOLD &&
          <MoreLessBtn
            showAll={showAll}
            toggle={() => setShowAll(!showAll)}
          />
        }
      </fieldset>
    </Facet>
  );
};

export default Cuisines;
