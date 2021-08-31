import React from 'react';

import { Poi } from '../types';
import { Country } from '../state';
import { getCuisines } from '../search';
import { getAddress } from '../InfoView/Address';
import { OpenStateWrapper } from '../InfoView/OpenState';

interface Props {
  e: Poi;
  country: Country | undefined;
  handleClick: () => void;
}

const ListElement = (
  { e, country, handleClick }: Props
) => {
  const now = new Date();

  return (
    <div
      className='list-elem'
      onClick={handleClick}
    >
      <b>{e.tags['name']}</b><br/>
      {getAddress(e)}<br/>
      Cuisine: {getPrimaryCuisines(e)}<br/>
      <OpenStateWrapper
        poi={e}
        country={country}
        now={now} />
    </div>
  );
};

const getPrimaryCuisines = (e: Poi) => {
  const cuisines = getCuisines(e);
  if (cuisines.length <= 3) {
    return cuisines.join(', ');
  }

  return `${cuisines.slice(0, 3).join(', ')}...`;
};

export default ListElement;
