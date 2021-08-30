import React, { useEffect } from 'react';

import { setSelected, setHover, useAppDispatch, useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListElement from './ListElement';
import { filter } from '../search';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const ListView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const facets = useAppSelector(state => state.facets);
  const hover = useAppSelector(state => state.ui.hover);

  const filteredData = filter(data, facets);

  useEffect(() => {
    return () => {
      dispatch(setHover(null));
    }
  }, []);

  return (
    <div className='list-container'>
      {filteredData.map(e =>
        <ListElement
          key={`${e.type}-${e.id}`}
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
};

export default ListView;
