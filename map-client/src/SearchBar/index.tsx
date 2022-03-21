import React from 'react';
import { LatLngBounds } from 'leaflet';

import {
  PresetOption, AreaOption,
  clearPoiList, setArea,
  useAppDispatch, useAppSelector
} from '../state';
import { SearchParams } from '../params';
import { Preset, presetSingleton } from '../presets';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Geocoder from './Geocoder';
import FiltersBtn from './FiltersBtn';
import { MapHandle } from '../MapView/SetMapRef';

interface Props {
  params: SearchParams;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
  mapRef: React.RefObject<MapHandle>;
}

const SearchBar = ({ params, makeQuery, mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const area = useAppSelector(state => state.ui.area);

  const toPresetOption = (p: Preset): PresetOption => {
    return {
      value: p,
      label: presetSingleton.getName(p.id) ?? p.id
    };
  };

  const presetOption = params.q ? toPresetOption(params.q) : null;

  const handlePresetChange = (newPreset: PresetOption | null) => {
    if (newPreset === null) {
      params.q = undefined;
      params.id = undefined;
      params.facets = {};
      params.commit();
      dispatch(clearPoiList());
      return;
    }

    params.q = newPreset.value;
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
      if (params.q) {
        makeQuery(
          params.q,
          mapRef.current.getBounds(),
          mapRef.current.getZoom()
        );
      }
    }
  };

  const isLoading = status === 'loading';

  return (
    <Container>
      <Header>Search</Header>
      <Item>
        <SearchBox
          value={presetOption}
          handleChange={handlePresetChange}
          toPresetOption={toPresetOption}
          isDisabled={isLoading}
        />
      </Item>
      <Item>
        <Geocoder
          value={area}
          handleChange={handleAreaChange}
          isDisabled={isLoading} />
      </Item>
      <Item>
        <FiltersBtn
          facets={params.facets}
          isDisabled={isLoading} />
      </Item>
    </Container>
  );
};

export default SearchBar;
