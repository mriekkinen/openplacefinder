import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { filter } from '../search';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleMapClick from './HandleMapClick';
import Marker from './Marker';

interface Props {
  center: L.LatLngExpression;
  zoom: number;
}

const MapView = (
  { center, zoom }: Props,
  ref: React.Ref<MapHandle>
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const facets = useAppSelector(state => state.facets);
  const selected = useAppSelector(state => state.ui.selected);

  console.log('Rendering MapView');

  const filteredData = filter(data, country, facets);

  const icon = getIcon();
  const tileProps = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  return (
    <MapContainer
      id='map-container'
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <SetMapRef ref={ref} />
      <HandleMapClick
        handleMapClick={() => dispatch(setSelected(null))} />
      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <Marker
          key={`${e.type}-${e.id}`}
          e={e}
          icon={e !== selected ? icon.default : icon.selected}
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
