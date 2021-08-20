import React from 'react';

import { Poi } from '../types';
import { getAddress } from '../InfoView/Address';

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
      {getAddress(e)}
    </div>
  );
};

export default ListElement;
