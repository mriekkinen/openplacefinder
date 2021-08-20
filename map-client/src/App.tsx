import React, { useRef } from 'react';

import { useAppSelector } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';

import './App.css';
import SearchView from './SearchView';

const App = () => {
  const selected = useAppSelector(state => state.ui.selected);

  const mapRef = useRef<MapHandle>(null);

  return (
    <div id='App'>
      <div className='header'>
        <SearchView />
      </div>
      <div className='content'>
        {selected === null
          ? <ListView mapRef={mapRef} />
          : <InfoView mapRef={mapRef} />
        }
        <MapView ref={mapRef} />
      </div>
    </div>
  );
};

export default App;
