import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Poi } from './types';
import { AppDispatch, queryOverpass, State } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';

import './App.css';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<State, Poi[]>(state => state.pois);
  const loading = useSelector<State, boolean>(state => state.loading);
  const selected = useSelector<State, Poi | null>(state => state.selected);

  const mapRef = useRef<MapHandle>(null);

  useEffect(() => {
    const query = `
      [out:json][timeout:25];
      area[name="London"]["wikipedia"="en:London"];
      nwr[shop=tea](area);
      out center;
    `;
    dispatch(queryOverpass(query));
  }, []);

  const status = loading
    ? <p>Loading...</p>
    : <p>Found <b>{data.length}</b> elements matching the query</p>;

  return (
    <div id='App'>
      <div className='header'>
        <p>An example query: listing all tea shops in London</p>
        {status}
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
