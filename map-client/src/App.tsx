import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

//import { fetchOverpass } from './services/overpassService';
import { fetchOverpass } from './services/overpassServiceMock';

import { Poi } from './types';
import { overpass2Poi } from './utils';
import { State } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';

import './App.css';

const App = () => {
  const [data, setData] = useState<Poi[] | null>(null);
  const selected = useSelector<State, Poi | null>(state => state.selected);

  const mapRef = useRef<MapHandle>(null);

  useEffect(() => {
    const query = `
      [out:json][timeout:25];
      area[name="London"]["wikipedia"="en:London"];
      nwr[shop=tea](area);
      out center;
    `;
    fetchOverpass(query)
      .then(overpassJson => {
        const poiArray = overpass2Poi(overpassJson)
        setData(poiArray);
      });
  }, []);

  const n = data ? data.length : 0;
  const status = data
    ? <p>Found <b>{n}</b> elements matching the query</p>
    : <p>Loading...</p>;

  return (
    <div id='App'>
      <div className='header'>
        <p>An example query: listing all tea shops in London</p>
        {status}
      </div>
      <div className='content'>
        {selected === null
          ? <ListView
              mapRef={mapRef}
              data={data} />
          : <InfoView
              mapRef={mapRef} />
        }
        <MapView
          data={data}
          ref={mapRef} />
      </div>
    </div>
  );
}

export default App;
