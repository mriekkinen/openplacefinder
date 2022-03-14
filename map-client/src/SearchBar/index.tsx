import React from 'react';

import {
  AreaOption, MapFeature,
  clearPoiList, setArea, setLocation,
  useAppDispatch, useAppSelector
} from '../state';
import { SearchParams } from '../params';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import FiltersBtn from './FiltersBtn';
import { MapHandle } from '../MapView/SetMapRef';
import Geocoder from './Geocoder';

interface Props {
  params: SearchParams;
  findFeature: (q: string | undefined) => MapFeature | undefined;
  mapRef: React.RefObject<MapHandle>;
}

const SearchBar = ({ params, findFeature, mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const area = useAppSelector(state => state.ui.area);

  const feature = findFeature(params.q);

  const handleFeatureChange = (newFeature: MapFeature | null) => {
    if (newFeature === null) {
      params.q = undefined;
      params.id = undefined;
      params.facets = {};
      params.commit();
      dispatch(clearPoiList());
      return;
    }

    params.q = newFeature.label;
    params.id = undefined;
    params.facets = {};
    params.commit();
  };

  const handleAreaChange = (newArea: AreaOption | null) => {
    console.log('handleAreaChange: newArea:', newArea);
    dispatch(setArea(newArea));
    if (newArea === null) {
      return;
    }

    if (mapRef.current) {
      const [lng, lat] = newArea.value.geometry.coordinates;
      dispatch(setLocation(lat, lng));
      mapRef.current.panTo(lat, lng, false);
    }
  };

  return (
    <Container>
      <Header>Search</Header>
      <Item>
        <SearchBox
          value={feature ?? null}
          handleChange={handleFeatureChange}
          isLoading={status === 'loading'}
        />
      </Item>
      <Item>
        <Geocoder
          value={area}
          handleChange={handleAreaChange} />
      </Item>
      <Item>
        <FiltersBtn />
      </Item>
    </Container>
  );
};

export default SearchBar;
