import React from 'react';

import {
  Category, SearchArea, Status,
  clearPoiList, setCategory, queryOverpass,
  useAppDispatch, useAppSelector
} from '../state';
import { assertNever } from '../utils';
import { buildAreaQuery, buildBBoxQuery } from '../overpass';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Location from './Location';
import Area from './Area';

const SearchView = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const category = useAppSelector(state => state.search.category);
  const area = useAppSelector(state => state.search.area);
  const location = useAppSelector(state => state.location);

  const handleChange = (newCategory: Category | null) => {
    if (newCategory === null) {
      dispatch(setCategory(null));
      dispatch(clearPoiList());
      return;
    }

    const query = buildQuery(newCategory, area);

    // TODO: We'll probably want to update the bbox, as well, before making the query
    //
    // if (area.type === 'bbox') {
    //   const bounds = map.getBounds();
    //   dispatch(setBBox(bounds));
    // }

    dispatch(setCategory(newCategory));
    dispatch(queryOverpass(query));
  };

  return (
    <Container>
      <Header>Search for</Header>
      <Item>
        <SearchBox
          value={category}
          handleChange={handleChange}
          isLoading={status === 'loading'} />
      </Item>
      <Item>
        <Area area={area} />
      </Item>
      <Item>
        <Location lat={location.lat} lon={location.lon} />
      </Item>
      {status === 'failed' &&
        <Item>{getErrorMsg(status)}</Item>
      }
    </Container>
  );
};

const buildQuery = (category: Category, area: SearchArea) => {
  switch (area.type) {
    case 'boundary':
      return buildAreaQuery(
        [category.value],
        area.id
      );
    case 'bbox':
      return buildBBoxQuery(
        [category.value],
        area.bbox
      );
    default:
      return assertNever(area);
  }
};

const getErrorMsg = (status: Status) => {
  if (status !== 'failed') {
    return null;
  }

  // TODO: Provide more info about the error
  return <span>Query failed</span>;
};

export default SearchView;
