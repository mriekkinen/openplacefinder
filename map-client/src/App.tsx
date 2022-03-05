import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes, Route, useSearchParams, ParamKeyValuePair
} from 'react-router-dom';

import { FEATURES } from './data/mapFeatures';
import { useAppSelector } from './state';
import { loadPresets } from './presets';
import MapView from './MapView';
import { MapState } from './MapView/types';
import { MapHandle } from './MapView/SetMapRef';
import NavBar from './NavBar';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchBar from './SearchBar';
import FacetsView from './FacetsView';
import ModalRenderer from './modals/ModalRenderer';

import 'leaflet/dist/leaflet.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import 'pelias-leaflet-plugin/dist/leaflet-geocoder-mapzen.css';
import './App.css';

const App = () => {
  loadPresets();

  return (
    <Router>
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

interface SearchParams {
  q?: string;
  id?: number;
  map?: MapState;
}

const Main = () => {
  const filtersVisible = useAppSelector(state => state.ui.filtersVisible);
  const n = useAppSelector(state => state.poiList.data.length);

  const mapRef = useRef<MapHandle>(null);

  const [ searchParams, setSearchParams ] = useSearchParams();

  const parseQueryParam = (queryStr: string | null): string | undefined => {
    return queryStr ? queryStr : undefined;
  }

  const parseIdParam = (idStr: string | null): number | undefined => {
    return idStr ? Number(idStr) : undefined;
  };

  const parseMapParam = (mapStr: string | null, defaults: MapState): MapState => {
    let { zoom } = defaults;
    let { lat, lng } = defaults.center;

    if (mapStr) {
      // Parse the "map" URL search parameter
      // Should be in the format: map=zoom_lat_lng
      const pattern = /^(?<zoom>\d+)_(?<lat>-?\d+\.\d+)_(?<lng>-?\d+\.\d+)$/;
      const match = mapStr.match(pattern);
      if (match && match.groups) {
        zoom = Number(match.groups.zoom) ?? zoom;
        lat = Number(match.groups.lat) ?? lat;
        lng = Number(match.groups.lng) ?? lng;
      }
    }

    return {
      center: { lat, lng },
      zoom
    };
  };

  const buildSearchParams = (params: SearchParams): ParamKeyValuePair[] => {
    const list: [string, string][] = [];
    if (params.q) {
      list.push(['q', params.q]);
    }

    if (params.id) {
      list.push(['id', params.id.toString()]);
    }

    if (params.map) {
      const nz = params.map.zoom.toFixed(0);
      const nlat = params.map.center.lat.toFixed(4);
      const nlng = params.map.center.lng.toFixed(4);

      list.push(['map', `${nz}_${nlat}_${nlng}`]);
    }

    return list;
  };

  const DEFAULT_VIEW: MapState = {
    center: {
      lat: 60.1673,
      lng: 24.9428
    },
    zoom: 13
  };

  const findFeature = (q: string | undefined) => {
    return FEATURES.find(
      f => f.label.toLowerCase() === q?.toLowerCase().replace('+', ' ')
    );
  };

  const params: SearchParams = {
    q: parseQueryParam(searchParams.get('q')),
    id: parseIdParam(searchParams.get('id')),
    map: parseMapParam(searchParams.get('map'), DEFAULT_VIEW)
  };

  const setQuery = useCallback((newQuery: string | undefined): void => {
    setSearchParams(buildSearchParams({
      ...params,
      q: newQuery?.toLowerCase().replace(' ', '+')
    }));
  }, [setSearchParams, params]);

  const setId = useCallback((newId: number | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, id: newId }));
  }, [setSearchParams, params]);

  const setMap = useCallback((newMap: MapState | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, map: newMap }));
  }, [setSearchParams, params]);

  return (
    <>
      <SearchBar
        query={params.q}
        setQuery={setQuery}
        setId={setId}
        findFeature={findFeature} />
      <Content>
        <SidebarBoxes>
          {n !== 0 &&
            <Results>
              {!params.id
                ? <ListView
                    setId={setId}
                    mapRef={mapRef} />
                : <InfoView
                    id={params.id}
                    setId={setId}
                    mapRef={mapRef} />
              }
            </Results>
          }
        </SidebarBoxes>
        <MapView
          queryParam={params.q}
          idParam={params.id}
          mapParam={params.map ?? DEFAULT_VIEW}
          setId={setId}
          setMap={setMap}
          findFeature={findFeature}
          ref={mapRef} />
        {filtersVisible &&
          <SidebarBoxes>
            <Filters>
              <FacetsView />
            </Filters>
          </SidebarBoxes>
        }
      </Content>
      <ModalRenderer />
    </>
  );
};

const PageNotFound = () => {
  return (
    <Message>Page not found</Message>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1 1 400px;
  display: flex;
  margin: 0;
  padding: 0;
`;

const SidebarBoxes = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
`;

const Results = styled.div`
  flex: 1 0 100px;
  overflow-y: auto;
  margin: 0;
  width: 300px;
`;

const Filters = styled(Results)`
  background-color: hsl(0, 0%, 97%);
`;

const Message = styled.div`
  margin: 10px;
`;

export default App;
