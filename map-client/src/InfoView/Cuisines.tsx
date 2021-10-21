import React from 'react';

import { Poi } from '../types';
import { getCuisines } from '../search';

interface Props {
  poi: Poi;
}

const Cuisines = ({ poi }: Props) => {
  const cuisines = getCuisines(poi);

  return (
    <div>
      {cuisines.join(', ')}
    </div>
  );
};

export default Cuisines;
