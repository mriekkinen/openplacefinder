import React, {
  Dispatch, SetStateAction,
  useEffect, useState, useRef
} from 'react';

import { GoLocation } from 'react-icons/go';
import { MdArrowBack } from 'react-icons/md';

//import { fetchOverpass } from './services/overpassService';
import { fetchOverpass } from './services/overpassServiceMock';

import { Poi } from './types';
import { overpass2Poi, hasLatLon } from './utils';
import MapView from './MapView';
import { MapHandle } from './MapView/SaveMapRef';
import { getAddress } from './MapView/address';
import ListView from './ListView';

import './App.css';

const App = () => {
  const [data, setData] = useState<Poi[] | null>(null);
  const [selected, setSelected] = useState<Poi | null>(null);
  const [hover, setHover] = useState<Poi | null>(null);

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
              setSelected={setSelected}
              hover={hover}
              setHover={setHover} />
          : <InfoView
              mapRef={mapRef}
              poi={selected}
              setSelected={setSelected} />
        }
        <MapView
          data={data}
          selected={selected}
          setSelected={setSelected}
          hover={hover}
          ref={mapRef} />
      </div>
    </div>
  );
}

interface InfoViewProps {
  mapRef: React.RefObject<MapHandle>;
  poi: Poi;
  setSelected: Dispatch<SetStateAction<Poi | null>>;
}

const InfoView = ({ mapRef, poi, setSelected }: InfoViewProps) => {
  return (
    <div className='info-container'>
      <div className='info-item'>
        <b>{poi.tags['name']} </b>
        <GoToLocation
          mapRef={mapRef}
          e={poi}
        /> <br />
        {getAddress(poi)}
      </div>
      <div className='info-item'>
        <ReturnBtn setSelected={setSelected} />
      </div>
      <div className='info-item'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={poi.tags['website']}>
          {poi.tags['website']}
        </a>
      </div>
    </div>
  );
};

interface GoToLocationProps {
  mapRef: React.RefObject<MapHandle>;
  e: Poi;
}

const GoToLocation = ({ mapRef, e }: GoToLocationProps) => {
  if (!hasLatLon(e)) {
    return null;
  }

  return (
    <GoLocation onClick={() => {
      mapRef.current?.panTo(e);
    }} />
  );
};

interface ReturnBtnProps {
  setSelected: Dispatch<SetStateAction<Poi | null>>;
}

const ReturnBtn = ({ setSelected }: ReturnBtnProps) => (
  <button
    onClick={() => setSelected(null)}>
    <MdArrowBack /> Return to results
  </button>
);

export default App;
