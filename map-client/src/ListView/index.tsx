import React, { useEffect } from 'react';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import ListElement from './ListElement';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  data: Poi[] | null;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
  hover: Poi | null;
  setHover: React.Dispatch<React.SetStateAction<Poi| null>>;
}

const ListView = ({ mapRef, data, setSelected, hover, setHover }: Props) => {
  useEffect(() => {
    return () => {
      setHover(null);
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
          hover={hover}
          setHover={setHover}
        />
      )}
    </div>
  );
}

export default ListView;
