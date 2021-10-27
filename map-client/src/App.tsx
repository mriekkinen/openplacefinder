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
    <div id='App'>
      <NavBar />
      <div className='content'>
        <SidebarBoxes>
          <SearchView mapRef={mapRef} />
          <FacetsView />
        </SidebarBoxes>
        <div className='tabs-container'>
          <Tabs
            forceRenderTabPanel={true}
            selectedIndex={tab}
            onSelect={handleSelect}
            className={[
              'react-tabs',
              'tabs-flex-1',
              'tabs-display-flex',
              'tabs-flex-column'
            ]}
            selectedTabPanelClassName={
              'tabs-selected-tab-panel'
            }
          >
            <TabList
              className={[
                'react-tabs__tab-list',
                'tabs-flex-none'
              ]}>
              <Tab>Map</Tab>
              <Tab>List</Tab>
              {/* <Tab>Empty</Tab> */}
            </TabList>
            <TabPanel>
              <MapView
                center={center}
                zoom={zoom}
                ref={mapRef} />
            </TabPanel>
            <TabPanel>
              {selected === null
                ? <ListView mapRef={mapRef} />
                : <InfoView mapRef={mapRef} />
              }
            </TabPanel>
            {/* An extra empty tab (helps profiling) */}
            {/*
            <TabPanel>
              This tab is empty on purpose.
            </TabPanel>
            */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const SidebarBoxes = styled.div`
  flex: none;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`;

export default App;
