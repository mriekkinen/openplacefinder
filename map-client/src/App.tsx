import React, { useEffect, useRef } from 'react';

import { Poi } from './types';
import { queryOverpass, Status, useAppDispatch, useAppSelector } from './state';
import MapView from './MapView';
import { MapHandle } from './MapView/SetMapRef';
import ListView from './ListView';
import InfoView from './InfoView';

import './App.css';

const App = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const status = useAppSelector(state => state.poiList.status);
  const selected = useAppSelector(state => state.ui.selected);

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

  return (
    <div id='App'>
      <div className='header'>
        <p>An example query: listing all tea shops in London</p>
        <p>{getStatusMsg(status, data)}</p>
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

const getStatusMsg = (status: Status, data: Poi[]) => {
  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return <span>Loading...</span>
    case 'succeeded':
      return <span>Found <b>{data.length}</b> elements matching the query</span>;
    case 'failed':
      return <span>Query failed</span>;
  }
};

export default App;
