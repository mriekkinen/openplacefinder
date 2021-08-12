import React, { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import {
  OverpassJson,
  OverpassElement, OverpassNode, OverpassWay, OverpassRelation
} from 'overpass-ts';
import { GoLocation } from 'react-icons/go';

//import { fetchOverpass } from './services/overpassService';
import { fetchOverpass } from './services/overpassServiceMock';

import './App.css';

let mapRef: Map;

type Tags = { [key: string]: string };

interface Poi {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  tags: Tags;
}

type Nwr = OverpassNode | OverpassWay | OverpassRelation;

const isNwr = (e: OverpassElement): e is Nwr => {
  return e.type === 'node' || e.type === 'way' || e.type === 'relation';
}

const isNode = (e: OverpassElement): e is OverpassNode => {
  return e.type === 'node';
}

// const hasLatLon = (e: Nwr): boolean => {
//   return isNode(e) || e.center !== undefined;
// };

const hasLatLon = (e: Poi): boolean => {
  return e.lat !== undefined && e.lon !== undefined;
};

const overpass2Poi = (data: OverpassJson | null): Poi[] => {
  if (!data) return [];
  return data.elements
    .filter(isNwr)
    .map(e => ({
      type: e.type,
      id: e.id,
      lat: isNode(e)
        ? e.lat
        : e.center?.lat,
      lon: isNode(e)
        ? e.lon
        : e.center?.lon,
      tags: e.tags ? e.tags : {}
    }));
};

const App = () => {
  const [data, setData] = useState<Poi[] | null>(null);

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
        <ListView data={data} />
        <MapView data={data} />
      </div>
    </div>
  );
}

const getAddress = (e: Poi) => {
  if (!e.tags['addr:street']) {
    return null;
  }

  return <span>{e.tags['addr:street']} {e.tags['addr:housenumber']}</span>
};

interface MapProps {
  data: Poi[] | null;
}

const MapView = ({ data }: MapProps) => {
  return (
    <MapContainer id='map-container' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <SaveMapRef />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data && data.filter(hasLatLon).map(e =>
        <Marker key={e.id} position={[e.lat ?? 0, e.lon ?? 0]}>
          <Tooltip direction='auto'>
            <b>{e.tags['name']}</b> <br />
            {getAddress(e)}
          </Tooltip>
        </Marker>
      )}
    </MapContainer>
  );
}

const SaveMapRef = () => {
  mapRef = useMap();
  return null;
}

const ListView = ({ data }: MapProps) => {
  return (
    <div className='list-container'>
      {data && data.map(e =>
        <div key={e.id} className='list-elem'>
          <b>{e.tags['name']} </b>
          <GoToLocation map={mapRef} poi={e} /> <br/>
          {getAddress(e)} <br />
          {e.tags['website']}
        </div>
      )}
    </div>
  );
}

interface GoToLocationProps {
  map: Map;
  poi: Poi;
}

const GoToLocation = ({ map, poi }: GoToLocationProps) => {
  if (!hasLatLon(poi)) {
    return null;
  }

  return (
    <GoLocation onClick={() => {
      map.panTo([poi.lat ?? 0, poi.lon ?? 0], {
        animate: true,
        duration: 0.5
      });
    }} />
  );
};

export default App;
