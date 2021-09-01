import React, { useRef } from 'react';
import { LatLngTuple } from 'leaflet';

import { setTab, useAppDispatch, useAppSelector } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchView from './SearchView';
import FacetsView from './FacetsView';

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
      <div className='header'>
        <SearchView
          areaFilter={areaFilter}
          country={country} />
      </div>
      <div className='content'>
        <FacetsView />
        <div className='tabs-container'>
          <Tabs
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
            }>
            <TabList
              className={[
                'react-tabs__tab-list',
                'tabs-flex-none'
              ]}>
              <Tab>Map</Tab>
              <Tab>List</Tab>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default App;
