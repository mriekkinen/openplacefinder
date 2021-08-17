import React from 'react';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import { getAddress } from '../InfoView/Address';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
  hover: Poi | null;
  setHover: React.Dispatch<React.SetStateAction<Poi| null>>;
}

const ListElement = ({ mapRef, e, setSelected, hover, setHover}: Props) => {
  const className = 'list-elem' + (
    e !== hover ? '' : ' list-elem-hover'
  );
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(e)}
      onMouseLeave={() => setHover(null)}
      onClick={() => {
        setSelected(e);
        mapRef.current?.panTo(e);
      }}
    >
      <b>{e.tags['name']}</b><br/>
      {getAddress(e)}
    </div>
  );
};

export default ListElement;
