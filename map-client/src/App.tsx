import React, { useRef } from 'react';
import { LatLngTuple } from 'leaflet';
import styled from 'styled-components';

import { setTab, useAppDispatch, useAppSelector } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import NavBar from './NavBar';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchView from './SearchView';
import FacetsView from './FacetsView';

import 'leaflet/dist/leaflet.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  const dispatch = useAppDispatch();
  const tab = useAppSelector(state => state.ui.tab);
  const selected = useAppSelector(state => state.ui.selected);

  const mapRef = useRef<MapHandle>(null);

  /*
  const areaFilter = ['name="London"', 'wikipedia="en:London"'];
  const center: LatLngTuple = [51.505, -0.09];
  const zoom = 13;
  */

  const areaFilter = ['name="Helsinki"', 'wikipedia="fi:Helsinki"'];
  const center: LatLngTuple = [60.1673, 24.9428];
  const zoom = 13;

  const country = {
    country: 'Finland',
    countryCode: 'fi',
    state: ''
  };

  const handleSelect = (index: number) => {
    dispatch(setTab(index));
  }

  return (
    <div id='App'>
      <NavBar />
      <div className='content'>
        <SidebarBoxes>
          <SearchView
            areaFilter={areaFilter}
            country={country} />
          <FacetsView />
        </SidebarBoxes>
        <div className='tabs-container'>
          <Tabs
            forceRenderTabPanel={false}
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
