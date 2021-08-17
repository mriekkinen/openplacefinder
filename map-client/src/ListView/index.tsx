import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import ListElement from './ListElement';
import { setHover } from '../state';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  data: Poi[] | null;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const ListView = ({ mapRef, data, setSelected }: Props) => {
  const dispatch = useDispatch();

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
          mapRef={mapRef}
          e={e}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

export default ListView;
