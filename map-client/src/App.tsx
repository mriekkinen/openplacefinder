import React, { useRef } from 'react';
import { LatLngBounds } from 'leaflet';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes, Route,
  useSearchParams
} from 'react-router-dom';

import {
  queryOverpass, showZoomInModal,
  useAppDispatch, useAppSelector
} from './state';
import { SearchParams, SearchParamDefaults } from './params';
import { Preset, loadPresets } from './presets';
import MapView from './MapView';
import { MapState } from './MapView/types';
import { MapHandle } from './MapView/SetMapRef';
import NavBar from './NavBar';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchBar from './SearchBar';
import FacetsView from './FacetsView';
import LoadingView from './LoadingView';
import ModalRenderer from './modals/ModalRenderer';
import { isZoomSufficient } from './conf';
import { buildBBoxQuery } from './overpass';
import { Tags } from './types';

import 'leaflet/dist/leaflet.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
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

const Main = () => {
  const dispatch = useAppDispatch();
  const filtersVisible = useAppSelector(state => state.ui.filtersVisible);
  const status = useAppSelector(state => state.poiList.status);
  const n = useAppSelector(state => state.poiList.data.length);

  const DEFAULT_VIEW: MapState = {
    center: {
      lat: 60.1673,
      lng: 24.9428
    },
    zoom: 13
  };

  const defaults: SearchParamDefaults = {
    loc: DEFAULT_VIEW.center,
    map: DEFAULT_VIEW
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const params = new SearchParams(searchParams, setSearchParams, defaults);

  const mapRef = useRef<MapHandle>(null);

  const toList = (tags: Tags) => {
    const tagList: string[] = [];
    for (const key in tags) {
      const value = tags[key];
      if (key && value) {
        tagList.push(`${key}=${value}`);
      }
    }

    return tagList;
  };

  const makeQuery = (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => {
    if (!isZoomSufficient(zoom)) {
      console.log('Please zoom in to view data!')
      dispatch(showZoomInModal());
      return;
    }

    const query = buildBBoxQuery(
      toList(preset.tags),
      bounds
    );

    dispatch(queryOverpass(query));
  };

  return (
    <>
      <SearchBar
        params={params}
        makeQuery={makeQuery}
        mapRef={mapRef} />
      <Content>
        <SidebarBoxes>
          {n !== 0 &&
            <Results>
              {!params.id
                ? <ListView
                    params={params}
                    mapRef={mapRef} />
                : <InfoView
                    params={params}
                    mapRef={mapRef} />
              }
            </Results>
          }
        </SidebarBoxes>
        <MapView
          params={params}
          makeQuery={makeQuery}
          ref={mapRef} />
        {filtersVisible &&
          <SidebarBoxes>
            <Filters>
              <FacetsView
                params={params} />
            </Filters>
          </SidebarBoxes>
        }
        {status === 'loading' &&
          <LoadingView />
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
  position: relative;
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
