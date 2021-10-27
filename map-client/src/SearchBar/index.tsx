import React from 'react';

import {
  MapFeature, QueryStatus, SearchArea,
  clearPoiList, queryOverpass, setBBox, setBoundary, setMapFeature, setSelected,
  useAppDispatch, useAppSelector
} from '../state';
import { assertNever } from '../utils';
import { buildAreaQuery, buildBBoxQuery } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Area, { AREA_OPTION } from './Area';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const SearchBar = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const feature = useAppSelector(state => state.search.feature);
  const area = useAppSelector(state => state.search.area);

  const handleFeatureChange = (newFeature: MapFeature | null) => {
    if (newFeature === null) {
      dispatch(setMapFeature(null));
      dispatch(setSelected(null));
      dispatch(clearPoiList());
      return;
    }

    // Build the query (and update the bounding box)
    let query;
    if (area.type === 'boundary') {
      query = buildAreaQuery(
        [newFeature.value],
        area.id
      );
    } else {
      let newBounds = area.bbox;
      if (mapRef.current !== null) {
        newBounds = mapRef.current.getBounds();
        dispatch(setBBox(newBounds));
      }

      query = buildBBoxQuery(
        [newFeature.value],
        newBounds
      );
    }

    dispatch(setMapFeature(newFeature));
    dispatch(queryOverpass(query));
  };

  const handleAreaChange = (newOption: AREA_OPTION | null) => {
    if (newOption === null) {
      //dispatch(setBoundary(null));
      dispatch(setSelected(null));
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

      if (feature !== null) {
        query = buildAreaQuery(
          [feature.value],
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

      if (newBounds !== null && feature !== null) {
        query = buildBBoxQuery(
          [feature.value],
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
      <Header>Search</Header>
      <Item>
        <SearchBox
          value={feature}
          handleChange={handleFeatureChange}
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

const getErrorMsg = (status: QueryStatus) => {
  if (status !== 'failed') {
    return null;
  }

  // TODO: Provide more info about the error
  return <span>Query failed</span>;
};

export default SearchBar;
