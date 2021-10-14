import React from 'react';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListElement from './ListElement';
import { filter, addDistance, sortByDistance } from '../search';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const ListView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const facets = useAppSelector(state => state.facets);
  const location = useAppSelector(state => state.location);

  // Apply filters
  const filteredData = filter(data, country, facets);

  // Sort by distance
  const dataWithDistances = addDistance(filteredData, location.lat, location.lon);
  sortByDistance(dataWithDistances);

  return (
    <div className='list-container'>
      {dataWithDistances.map(e =>
        <ListElement
          key={`${e.type}-${e.id}`}
          e={e}
          country={country}
          handleClick={() => {
            dispatch(setSelected(e.id));
            //mapRef.current?.panTo(e.lat, e.lon);
          }}
        />
      )}
    </div>
  );
};

export default ListView;
