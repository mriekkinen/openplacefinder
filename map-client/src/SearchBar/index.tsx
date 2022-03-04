import React from 'react';

import {
  MapFeature,
  clearPoiList, queryOverpass,
  setMapFeature, showZoomInModal,
  useAppDispatch, useAppSelector
} from '../state';
import { buildBBoxQuery } from '../overpass';
import { isZoomSufficient } from '../conf';
import { MapHandle } from '../MapView/SetMapRef';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Area, { CURRENT_MAP_VIEW } from './Area';
import FiltersBtn from './FiltersBtn';

interface Props {
  setId: (newId: number | undefined) => void;
  mapRef: React.RefObject<MapHandle>;
}

const SearchBar = ({ setId, mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const feature = useAppSelector(state => state.search.feature);

  const handleFeatureChange = (newFeature: MapFeature | null) => {
    if (newFeature === null) {
      dispatch(setMapFeature(null));
      setId(undefined);
      dispatch(clearPoiList());
      return;
    }

    dispatch(setMapFeature(newFeature));

    // Build the query (and update the bounding box)
    if (mapRef.current === null) {
      return;
    }

    const newBounds = mapRef.current.getBounds();
    const zoom = mapRef.current.getZoom();

    if (!isZoomSufficient(zoom)) {
      console.log('Please zoom in to view data!')
      dispatch(showZoomInModal());
      return;
    }

    const query = buildBBoxQuery(
      [newFeature.value],
      newBounds
    );

    dispatch(queryOverpass(query));
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
          value={CURRENT_MAP_VIEW}
          handleChange={() => undefined}
          isLoading={status === 'loading'}
        />
      </Item>
      <Item>
        <FiltersBtn />
      </Item>
    </Container>
  );
};

export default SearchBar;
