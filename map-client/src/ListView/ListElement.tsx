import React from 'react';

import { Poi } from '../types';
import { Country } from '../state';
import { getCuisines } from '../search';
import { getAddress } from '../InfoView/Address';
import { OpenStateWrapper } from '../InfoView/OpenState';

interface Props {
  e: Poi;
  country: Country | undefined;
  isHover: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const ListElement = (
  { e, country, isHover, handleMouseEnter, handleMouseLeave, handleClick }: Props
) => {
  const className = 'list-elem' + (
    isHover ? ' list-elem-hover' : ''
  );

  const now = new Date();

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
