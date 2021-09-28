import React from 'react';

import {
  Category, Status,
  clearPoiList, setBBox, setCategory, queryOverpass,
  useAppDispatch, useAppSelector
} from '../state';
import { buildAreaQuery, buildBBoxQuery } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Location from './Location';
import Area from './Area';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const SearchView = ({ mapRef }: Props) => {
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

    // Build the query (and update the bounding box)
    let query;
    if (area.type === 'boundary') {
      query = buildAreaQuery(
        [newCategory.value],
        area.id
      );
    } else {
      let newBounds = area.bbox;
      if (mapRef.current !== null) {
        newBounds = mapRef.current.getBounds();
        dispatch(setBBox(newBounds));
      }

      query = buildBBoxQuery(
        [newCategory.value],
        newBounds
      );
    }

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

const getErrorMsg = (status: Status) => {
  if (status !== 'failed') {
    return null;
  }

  // TODO: Provide more info about the error
  return <span>Query failed</span>;
};

export default SearchView;
