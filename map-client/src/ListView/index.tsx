import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListElement from './ListElement';
import { filter, addDistance, sortByDistance } from '../search';

interface Props {
  setId: (newId: number | undefined) => void;
  mapRef: React.RefObject<MapHandle>;
}

const ListView = ({ setId, mapRef }: Props) => {
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
    <Container>
      {dataWithDistances.map(e =>
        <ListElement
          key={`${e.type}-${e.id}`}
          e={e}
          country={country}
          handleClick={() => {
            setId(e.id);
            //mapRef.current?.panTo(e.lat, e.lon);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default ListView;
