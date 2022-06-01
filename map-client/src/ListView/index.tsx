import React from 'react';
import styled from 'styled-components';

import { SortOption, useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import ListHeader from './ListHeader';
import ListHeaderSort from './ListHeaderSort';
import ListElement, { getLocalCategoryPath } from './ListElement';
import { filter, addDistance, sortByDistance } from '../search';
import { SearchParams } from '../params';
import { assertNever } from '../utils';

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

  // If unspecified, default to sorting by distance
  const sortBy = params.sortBy ?? SortOption.Distance;

  switch (sortBy) {
    case SortOption.Distance: {
      // Already sorted by distance
      break;
    }
    case SortOption.Category: {
      dataWithDistances.sort((a, b) => {
        const aPath = getLocalCategoryPath(a.presetId ?? '', '/');
        const bPath = getLocalCategoryPath(b.presetId ?? '', '/');

        return aPath.localeCompare(bPath);
      });
      break;
    }
    case SortOption.Name: {
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
        setSortBy={opt => {
          params.sortBy = opt;
          params.commit();
        }}
      />
      {dataWithDistances.map(e =>
        <ListElement
          key={`${e.type}-${e.id}`}
          e={e}
          country={country}
          handleClick={() => {
            params.id = e.id;
            params.commit();
            mapRef.current?.panTo(e.lat, e.lng);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default ListView;
