import React, { useRef } from 'react';
import { LatLngTuple } from 'leaflet';

import { useAppSelector } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';
import SearchView from './SearchView';
import FacetsView from './FacetsView';

import './App.css';

const App = () => {
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

  return (
    <div id='App'>
      <div className='header'>
        <SearchView areaFilter={areaFilter} />
      </div>
      <div className='content'>
        <FacetsView />
        {selected === null
          ? <ListView mapRef={mapRef} />
          : <InfoView mapRef={mapRef} />
        }
        <MapView
          center={center}
          zoom={zoom}
          ref={mapRef} />
      </div>
    </div>
  );
};

export default App;
