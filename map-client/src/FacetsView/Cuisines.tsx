import React, { useState } from 'react';

import {
  useAppDispatch, useAppSelector,
  checkCuisine, FacetState
} from '../state';
import filter, { getCuisines } from './filter';
import { Poi } from '../types';

import { Facet } from './styles';
import Cuisine from './Cuisine';
import MoreLessBtn from './MoreLessBtn';

const MORE_LESS_THRESHOLD = 10;

interface Props {
  data: Poi[];
  facets: FacetState;
}

const Cuisines = ({ data, facets }: Props) => {
  const dispatch = useAppDispatch();
  const checkedCuisines = useAppSelector(state => state.facets.cuisines);

  const [showAll, setShowAll] = useState<boolean>(false);

  // Apply filters excluding cuisine, and
  // compute the number of appearances (in that list)
  const facetsExcludingCuisine: FacetState = {
    ...facets,
    cuisines: new Set<string>()
  };

  const filtered = filter(data, facetsExcludingCuisine);
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
    dispatch(checkCuisine(cuisine, e.target.checked));
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

const countCuisines = (data: Poi[]) => {
  const counts = new Map<string, number>();
  data.forEach(poi => {
    const cuisines = getCuisines(poi);
    cuisines.forEach(cuisine => {
      const count = counts.get(cuisine) ?? 0;
      counts.set(cuisine, count + 1);
    });
  });

  return counts;
};

const sortByCount = (counts: Map<string, number>) => {
  // Sort twice so that cuisines with the same count appear in alphabetical order
  // (assuming the sorting algorithm is stable)
  return Array.from(counts.entries())
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0]);
};

export default Cuisines;
