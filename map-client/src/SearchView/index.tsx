import React from 'react';

import {
  Category, Status,
  clearPoiList, setBBox, setBoundary, setCategory, queryOverpass,
  useAppDispatch, useAppSelector, SearchArea
} from '../state';
import { assertNever } from '../utils';
import { buildAreaQuery, buildBBoxQuery } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Location from './Location';
import Area, { AREA_OPTION } from './Area';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const SearchView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const category = useAppSelector(state => state.search.category);
  const area = useAppSelector(state => state.search.area);
  const location = useAppSelector(state => state.location);

  const handleCategoryChange = (newCategory: Category | null) => {
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

  const handleAreaChange = (newOption: AREA_OPTION | null) => {
    if (newOption === null) {
      //dispatch(setBoundary(null));
      dispatch(clearPoiList());
      return;
    }

    const newArea = newOption.value;

    console.log('handleAreaChange');
    console.log('newOption:', newOption);
    console.log('newArea:', newArea);

    let query;
    if (newArea !== null) {
      dispatch(setBoundary(newArea.name, newArea.id));

      if (category !== null) {
        query = buildAreaQuery(
          [category.value],
          newArea.id
        );
      }
    } else {
      let newBounds = area.type === 'bbox' ? area.bbox : null;
      if (mapRef.current !== null) {
        console.log('newBounds:', newBounds);

        newBounds = mapRef.current.getBounds();
        dispatch(setBBox(newBounds));
      }

      if (newBounds !== null && category !== null) {
        query = buildBBoxQuery(
          [category.value],
          newBounds
        );
      }
    }

    if (query !== undefined) {
      dispatch(queryOverpass(query));
    }
  };

  return (
    <Container>
      <Header>Search for</Header>
      <Item>
        <SearchBox
          value={category}
          handleChange={handleCategoryChange}
          isLoading={status === 'loading'}
        />
      </Item>
      <Item>
        <Area
          value={toOption(area)}
          handleChange={handleAreaChange}
          isLoading={status === 'loading'}
        />
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

const toOption = (area: SearchArea): AREA_OPTION => {
  switch (area.type) {
    case 'boundary':
      return {
        value: area,
        label: area.name
      };
    case 'bbox':
      return {
        value: null,
        label: 'Current map view' // TODO: Not good... string might change elsewhere
      }
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
