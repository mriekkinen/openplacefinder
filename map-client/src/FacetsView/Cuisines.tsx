import React, { useState } from 'react';

import {
  useAppDispatch, useAppSelector,
  checkCuisine, FacetState
} from '../state';
import { filter, countCuisines, sortByCount } from '../search';
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

export default Cuisines;
