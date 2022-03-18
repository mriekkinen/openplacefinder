import React from 'react';
import { LatLngBounds } from 'leaflet';

import {
  PresetOption, AreaOption,
  clearPoiList, setArea,
  useAppDispatch, useAppSelector
} from '../state';
import { SearchParams } from '../params';
import { Preset } from '../presets';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Geocoder from './Geocoder';
import FiltersBtn from './FiltersBtn';
import { MapHandle } from '../MapView/SetMapRef';

interface Props {
  params: SearchParams;
  findPreset: (q: string | undefined) => PresetOption | undefined;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
  mapRef: React.RefObject<MapHandle>;
}

const SearchBar = ({ params, findPreset, makeQuery, mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const area = useAppSelector(state => state.ui.area);

  const presetOption = findPreset(params.q);
  const preset = presetOption?.value;

  const handlePresetChange = (newPreset: PresetOption | null) => {
    if (newPreset === null) {
      params.q = undefined;
      params.id = undefined;
      params.facets = {};
      params.commit();
      dispatch(clearPoiList());
      return;
    }

    params.q = newPreset.value.id;
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

      // Pan the map to the new location
      // Note: this is the only place where we need the 2 last parameters
      // 1. Don't clear the area selection box (we want the value to stay)
      // 2. Don't commit changes to search parameters (because we commit below)
      mapRef.current.panTo(lat, lng, false, false);

      // Update the user's location
      params.loc = { lat, lng };
      params.commit();

      // Submit a new query using the current bounding box
      if (preset) {
        makeQuery(
          preset,
          mapRef.current.getBounds(),
          mapRef.current.getZoom()
        );
      }
    }
  };

  return (
    <Container>
      <Header>Search</Header>
      <Item>
        <SearchBox
          value={presetOption ?? null}
          handleChange={handlePresetChange}
          isDisabled={status === 'loading'}
        />
      </Item>
      <Item>
        <Geocoder
          value={area}
          handleChange={handleAreaChange}
          isDisabled={status === 'loading'} />
      </Item>
      <Item>
        <FiltersBtn
          facets={params.facets} />
      </Item>
    </Container>
  );
};

export default SearchBar;
