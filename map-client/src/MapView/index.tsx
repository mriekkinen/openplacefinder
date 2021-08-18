import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { Poi } from '../types';
import { setSelected, State } from '../state';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleMapClick from './HandleMapClick';
import Marker from './Marker';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const MapView = (
  props: Props,
  ref: React.Ref<MapHandle>
) => {
  const dispatch = useDispatch();
  const data = useSelector<State, Poi[]>(state => state.pois);
  const selected = useSelector<State, Poi | null>(state => state.selected);
  const hover = useSelector<State, Poi | null>(state => state.hover);

  const icon = getIcon();
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
      <SetMapRef ref={ref} />
      <HandleMapClick
        handleMapClick={() => setSelected(null)} />
      <TileLayer {...tileProps} />

      {data.map(e =>
        <Marker
          key={e.id}
          e={e}
          icon={e !== selected && e !== hover ? icon.default : icon.selected}
          handleClick={() => dispatch(setSelected(e))}
        />
      )}
    </MapContainer>
  );
};

const getIcon = () => {
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

  return {
    default: defaultIcon,
    selected: selectedIcon
  };
};

export default React.forwardRef(MapView);
