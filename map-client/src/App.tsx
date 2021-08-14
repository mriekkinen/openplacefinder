import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Map } from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Tooltip,
  useMap, useMapEvent
} from 'react-leaflet'
import {
  OverpassJson,
  OverpassElement, OverpassNode, OverpassWay, OverpassRelation
} from 'overpass-ts';
import { GoLocation } from 'react-icons/go';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

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
  const [selected, setSelected] = useState<number | null>(null);

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
        <ListView
          data={data}
          selected={selected}
          setSelected={setSelected} />
        <MapView
          data={data}
          selected={selected}
          setSelected={setSelected} />
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
  selected: number | null;
  setSelected: Dispatch<SetStateAction<number | null>>;
}

const MapView = ({ data, selected, setSelected }: MapProps) => {
  const coffeeIconDefault = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'coffee',
    markerColor: 'red',
    //className: 'awesome-marker awesome-marker-square'
  });
  const coffeeIconSelected = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'coffee',
    markerColor: 'cadetblue',
    //className: 'awesome-marker awesome-marker-square'
  });

  const tileProps = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  return (
    <MapContainer
      id='map-container'
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <SaveMapRef />
      <UnselectOnMapClick setSelected={setSelected} />
      <TileLayer {...tileProps} />

      {data && data.filter(hasLatLon).map(e =>
        <Marker
          key={e.id}
          position={[e.lat ?? 0, e.lon ?? 0]}
          icon={e.id !== selected ? coffeeIconDefault : coffeeIconSelected}
          eventHandlers={{
            click: () => {
              setSelected(e.id);
            }
          }}
        >
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

interface UnselectOnMapClickProps {
  setSelected: Dispatch<SetStateAction<number | null>>;
}

const UnselectOnMapClick = ({ setSelected }: UnselectOnMapClickProps) => {
  useMapEvent('click', () => {
    setSelected(null);
  });
  return null;
}

const ListView = ({ data, selected, setSelected }: MapProps) => {
  return (
    <div className='list-container'>
      {data && data.map(e =>
        <ListElement
          key={e.id}
          map={mapRef}
          e={e}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

interface ListElementProps {
  map: Map;
  e: Poi;
  selected: number | null;
  setSelected: Dispatch<SetStateAction<number | null>>;
}

const ListElement = ({ map, e, selected, setSelected}: ListElementProps) => {
  const className = 'list-elem' + (
    e.id !== selected ? '' : ' list-elem-selected'
  );
  return (
    <div className={className}>
      <b>{e.tags['name']} </b>
      <GoToLocation
        map={map}
        e={e}
        selected={selected}
        setSelected={setSelected}
      /> <br/>
      {getAddress(e)} <br />
      {e.tags['website']}
    </div>
  );
};

const GoToLocation = ({ map, e, selected, setSelected }: ListElementProps) => {
  if (!hasLatLon(e)) {
    return null;
  }

  return (
    <GoLocation onClick={() => {
      map.panTo([e.lat ?? 0, e.lon ?? 0], {
        animate: true,
        duration: 0.5
      });
      setSelected(e.id);
    }} />
  );
};

export default App;
