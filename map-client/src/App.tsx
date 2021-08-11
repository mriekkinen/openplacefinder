import React, { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {
  OverpassJson,
  OverpassElement, OverpassNode, OverpassWay, OverpassPointGeom
} from 'overpass-ts';
import { GoLocation } from 'react-icons/go';

//import { fetchOverpass } from './services/overpassService';
import { fetchOverpass } from './services/overpassServiceMock';

import './App.css';

let mapRef: Map;

const App = () => {
  const [data, setData] = useState<OverpassJson | null>(null);

  useEffect(() => {
    const query = `
      [out:json][timeout:25];
      area[name="London"]["wikipedia"="en:London"];
      nwr[shop=tea](area);
      out center;
    `;
    fetchOverpass(query)
      .then(response => {
        setData(response);
      });
  }, []);

  const n = data ? data.elements.length : 0;
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

const isNode = (elem: OverpassElement): elem is OverpassNode => {
  return elem.type === 'node';
}

const isWay = (elem: OverpassElement): elem is OverpassWay => {
  return elem.type === 'way';
}

interface MapProps {
  data: OverpassJson | null;
}

const MapView = ({ data }: MapProps) => {
  return (
    <MapContainer id='map-container' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <SaveMapRef />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data && data.elements.filter(isNode).map(node =>
        <Marker key={node.id} position={[node.lat, node.lon]}>
          <Popup>
            <b>{node.tags && node.tags['name']}</b>
          </Popup>
        </Marker>
      )}

      {data && data.elements.filter(isWay).map(way => {
        if (way.center === undefined) return null;
        return (
          <Marker key={way.id} position={[way.center.lat, way.center.lon]}>
            <Popup>
              <b>{way.tags && way.tags['name']}</b>
            </Popup>
          </Marker>
        )
      })}
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
      {data && data.elements.filter(isNode).map(node =>
        <div key={node.id} className='list-elem'>
          <b>{node.tags && node.tags['name']} </b>
          <GoToLocation map={mapRef} lat={node.lat} lon={node.lon} /> <br/>
          {node.tags && `${node.tags['addr:street']} ${node.tags['addr:housenumber']}`} <br />
          {node.tags && node.tags['website']}
        </div>
      )}
    </div>
  );
}

interface GoToLocationProps extends OverpassPointGeom {
  map: Map;
}

const GoToLocation = ({ map, lat, lon }: GoToLocationProps) => (
  <GoLocation onClick={() => {
    //console.log('go to location:', lat, lon);
    map.panTo([lat, lon], {
      animate: true,
      duration: 0.5
    });
  }} />
);

export default App;
