import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import Leaflet.awesome-markers plugin
import L from 'leaflet';
import 'leaflet.awesome-markers';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleMapClick from './HandleMapClick';
import Marker from './Marker';
import filter from '../FacetsView/filter';

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
  const facets = useAppSelector(state => state.facets);
  const selected = useAppSelector(state => state.ui.selected);
  const hover = useAppSelector(state => state.ui.hover);

  const filteredData = filter(data, facets);

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
