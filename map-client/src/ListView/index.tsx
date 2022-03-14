import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListElement from './ListElement';
import { filter, addDistance, sortByDistance } from '../search';
import { SearchParams } from '../params';

interface Props {
  params: SearchParams;
  mapRef: React.RefObject<MapHandle>;
}

const ListView = ({ params, mapRef }: Props) => {
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const location = useAppSelector(state => state.location);

  // Apply filters
  const filteredData = filter(data, country, params.facets);

  // Sort by distance
  const dataWithDistances = addDistance(filteredData, location.lat, location.lng);
  sortByDistance(dataWithDistances);

  return (
    <Container>
      {dataWithDistances.map(e =>
        <ListElement
          key={`${e.type}-${e.id}`}
          e={e}
          country={country}
          handleClick={() => {
            params.id = e.id;
            params.commit();
            //mapRef.current?.panTo(e.lat, e.lng);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default ListView;
