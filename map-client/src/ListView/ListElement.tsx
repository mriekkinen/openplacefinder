import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import { getAddress } from '../InfoView/Address';
import { State, setHover } from '../state';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const ListElement = ({ mapRef, e, setSelected }: Props) => {
  const dispatch = useDispatch();
  const hover = useSelector<State>(state => state.hover);

  const className = 'list-elem' + (
    e !== hover ? '' : ' list-elem-hover'
  );

  return (
    <div
      className={className}
      onMouseEnter={() => dispatch(setHover(e))}
      onMouseLeave={() => dispatch(setHover(null))}
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
