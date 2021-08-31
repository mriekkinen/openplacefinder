import React from 'react';

import { Poi } from '../types';
import { getCuisines } from '../search';

interface Props {
  poi: Poi;
}

const Cuisines = ({ poi }: Props) => {
  const cuisines = getCuisines(poi);

  if (cuisines.length == 1) {
    return (
      <div>
        Cuisine: {cuisines[0]}
      </div>
    );
  }

  return (
    <div>
      Cuisine:
      <ul>
        {cuisines.map((row, index) =>
          <li key={`${index}-${row}`}>{row}</li>
        )}
      </ul>
    </div>
  );
};

export default Cuisines;
