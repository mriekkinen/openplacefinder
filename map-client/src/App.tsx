import React, { useRef } from 'react';
import { LatLngTuple } from 'leaflet';
import styled from 'styled-components';

import { setTab, useAppDispatch, useAppSelector } from './state';
import { loadPresets } from './presets';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import NavBar from './NavBar';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchView from './SearchView';
import FacetsView from './FacetsView';

import 'leaflet/dist/leaflet.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import 'pelias-leaflet-plugin/dist/leaflet-geocoder-mapzen.css';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  const dispatch = useAppDispatch();
  const tab = useAppSelector(state => state.ui.tab);
  const selected = useAppSelector(state => state.ui.selected);

  const mapRef = useRef<MapHandle>(null);

  const center: LatLngTuple = [60.1673, 24.9428];
  const zoom = 13;

  const handleSelect = (index: number) => {
    dispatch(setTab(index));
  }

  loadPresets();

  return (
    <AppContainer>
      <NavBar />
      <Content>
        <SidebarBoxes>
          <SearchView mapRef={mapRef} />
          <Results>
            {selected === null
              ? <ListView mapRef={mapRef} />
              : <InfoView mapRef={mapRef} />
            }
          </Results>
        </SidebarBoxes>
        <MapView
          center={center}
          zoom={zoom}
          ref={mapRef} />
      </Content>
    </AppContainer>
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
  margin: 0 5px 5px 5px;
  width: 300px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
`;

export default App;
