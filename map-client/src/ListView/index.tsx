import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListHeader from './ListHeader';
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

  // Apply filters
  const filteredData = filter(data, country, params.facets);

  // Sort by distance
  const dataWithDistances = addDistance(filteredData, params.loc.lat, params.loc.lng);
  sortByDistance(dataWithDistances);

  return (
    <Container>
      <ListHeader
        params={params}
        data={data}
        filteredData={filteredData} />
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
