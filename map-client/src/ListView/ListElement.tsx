import React from 'react';

import { Poi } from '../types';
import { getAddress } from '../InfoView/Address';
import { OpenState } from '../InfoView/OpeningHours';
import { getCuisines } from '../search';

interface Props {
  e: Poi;
  isHover: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const ListElement = (
  { e, isHover, handleMouseEnter, handleMouseLeave, handleClick }: Props
) => {
  const className = 'list-elem' + (
    isHover ? ' list-elem-hover' : ''
  );

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
      <OpenState openingHours={e.tags['opening_hours']} />
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
