import React, { useRef } from 'react';
import { LatLngTuple } from 'leaflet';
import styled from 'styled-components';

import { useAppSelector } from './state';
import { loadPresets } from './presets';
import MapView from './MapView';
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
  const selected = useAppSelector(state => state.ui.selected);
  const filtersVisible = useAppSelector(state => state.ui.filtersVisible);
  const n = useAppSelector(state => state.poiList.data.length);

  const mapRef = useRef<MapHandle>(null);

  const center: LatLngTuple = [60.1673, 24.9428];
  const zoom = 13;

  loadPresets();

  return (
    <AppContainer>
      <NavBar />
      <SearchBar mapRef={mapRef} />
      <Content>
        <SidebarBoxes>
          {n !== 0 &&
            <Results>
              {selected === null
                ? <ListView mapRef={mapRef} />
                : <InfoView mapRef={mapRef} />
              }
            </Results>
          }
        </SidebarBoxes>
        <MapView
          center={center}
          zoom={zoom}
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
  margin: 0;
  width: 300px;
`;

const Filters = styled(Results)`
  background-color: hsl(0, 0%, 97%);
`;

export default App;
