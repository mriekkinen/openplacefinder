import React, { useEffect, useState } from 'react';
import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchOverpass } from './services/overpassService';
import {
  OverpassJson,
  OverpassElement, OverpassNode, OverpassWay
} from 'overpass-ts';

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
      })
  }, []);

  return (
    <div>
      <p>An example query: listing all tea shops in London</p>
      <Map data={data} />
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

const Map = ({ data }: MapProps) => {
  const n = data ? data.elements.length : 0;
  return (
    <div>
      <p>Found <b>{n}</b> elements matching the query</p>

      <MapContainer id='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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
    </div>
  );
}

export default App;
