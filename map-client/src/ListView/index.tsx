import React, { useState } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListHeader from './ListHeader';
import ListHeaderSort from './ListHeaderSort';
import ListElement, { getFullLocalName } from './ListElement';
import { filter, addDistance, sortByDistance } from '../search';
import { SearchParams } from '../params';
import { assertNever } from '../utils';
import { SortOption } from './types';

interface Props {
  params: SearchParams;
  mapRef: React.RefObject<MapHandle>;
}

const ListView = ({ params, mapRef }: Props) => {
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const [sortBy, setSortBy] = useState<SortOption>('distance');

  // Apply filters
  const filteredData = filter(data, country, params.facets);

  // Sort by distance
  const dataWithDistances = addDistance(filteredData, params.loc.lat, params.loc.lng);
  sortByDistance(dataWithDistances);

  switch (sortBy) {
    case 'distance': {
      // Already sorted by distance
      break;
    }
    case 'category': {
      // TODO: Sort by category
      dataWithDistances.sort((a, b) => {
        if (!a.presetId || !b.presetId) return 0;
        const aName = getFullLocalName(a.presetId, '/');
        const bName = getFullLocalName(b.presetId, '/');
        if (!aName || !bName) return 0;

        return aName.localeCompare(bName);
      });
      break;
    }
    case 'name': {
      dataWithDistances.sort((a, b) => {
        const aName = a.tags['name'] ?? '';
        const bName = b.tags['name'] ?? '';
        return aName.localeCompare(bName);
      });
      break;
    }
    default:
      assertNever(sortBy);
  }

  return (
    <Container>
      <ListHeader
        params={params}
        data={data}
        filteredData={filteredData} />
      <ListHeaderSort
        sortBy={sortBy}
        setSortBy={setSortBy} />
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
