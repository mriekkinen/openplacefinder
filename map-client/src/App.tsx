import React, { useEffect, useState, useRef } from 'react';

//import { fetchOverpass } from './services/overpassService';
import { fetchOverpass } from './services/overpassServiceMock';

import { Poi } from './types';
import { overpass2Poi } from './utils';
import MapView from './MapView';
import { MapHandle } from './MapView/SaveMapRef';
import ListView from './ListView';
import InfoView from './InfoView';

import './App.css';

const App = () => {
  const [data, setData] = useState<Poi[] | null>(null);
  const [selected, setSelected] = useState<Poi | null>(null);

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
              data={data}
              setSelected={setSelected} />
          : <InfoView
              mapRef={mapRef}
              poi={selected}
              setSelected={setSelected} />
        }
        <MapView
          data={data}
          selected={selected}
          setSelected={setSelected}
          ref={mapRef} />
      </div>
    </div>
  );
}

export default App;
