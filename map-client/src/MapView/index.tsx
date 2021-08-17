import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { Poi } from '../types';
import { hasLatLon } from '../utils';
import { State } from '../state';
import SaveMapRef, { MapHandle } from './SaveMapRef';
import UnselectOnMapClick from './UnselectOnMapClick';
import Marker from './Marker';

interface Props {
  data: Poi[] | null;
  selected: Poi | null;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const MapView = (
  { data, selected, setSelected }: Props,
  ref: React.Ref<MapHandle>
) => {
  const hover = useSelector<State>(state => state.hover);

  const defaultIcon = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'coffee',
    markerColor: 'red',
    //className: 'awesome-marker awesome-marker-square'
  });
  const selectedIcon = L.AwesomeMarkers.icon({
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
      <SaveMapRef ref={ref} />
      <UnselectOnMapClick setSelected={setSelected} />
      <TileLayer {...tileProps} />

      {data && data.filter(hasLatLon).map(e =>
        <Marker
          key={e.id}
          e={e}
          icon={e !== selected && e !== hover ? defaultIcon : selectedIcon}
          handleClick={() => setSelected(e)}
        />
      )}
    </MapContainer>
  );
};

export default React.forwardRef(MapView);
