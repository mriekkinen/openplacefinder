import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Poi } from '../types';
import { State, setSelected, setHover } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListElement from './ListElement';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  data: Poi[] | null;
}

const ListView = ({ mapRef, data }: Props) => {
  const dispatch = useDispatch();
  const hover = useSelector<State, Poi | null>(state => state.hover);

  useEffect(() => {
    return () => {
      dispatch(setHover(null));
    }
  }, []);

  return (
    <div className='list-container'>
      {data && data.map(e =>
        <ListElement
          key={e.id}
          e={e}
          isHover={e === hover}
          handleMouseEnter={() => dispatch(setHover(e))}
          handleMouseLeave={() => dispatch(setHover(null))}
          handleClick={() => {
            dispatch(setSelected(e));
            mapRef.current?.panTo(e);
          }}
        />
      )}
    </div>
  );
}

export default ListView;
