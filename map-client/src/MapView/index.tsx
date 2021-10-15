import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-contextmenu';

import { Poi } from '../types';
import {
  setLocation, setSelected, setTab, TabIndex,
  useAppDispatch, useAppSelector
} from '../state';
import { filter } from '../search';
import { PoiDecorator } from '../overpass';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleMapClick from './HandleMapClick';
import CircleMarker from './CircleMarker';
import LocationMarker from './LocationMarker';
import RemoveMapOnUnmount from './RemoveMapOnUnmount';
import AreaFilter from './AreaFilter';
import Geocoder from './Geocoder';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

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
  const location = useAppSelector(state => state.location);

  const filteredData = filter(data, country, facets);

  const contextmenuItems = [
    {
      text: 'Set location',
      callback: (e: L.LeafletMouseEvent) => {
        dispatch(setLocation(e.latlng.lat, e.latlng.lng));
      }
    }
  ];

  const tileProps = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  const handleMapClick = () => {
    dispatch(setSelected(null));
  };

  const handleMarkerClick = (e: Poi) => () => {
    dispatch(setSelected(e.id));
    dispatch(setTab(TabIndex.List));
  };

  return (
    <MapContainer
      id='map-container'
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      preferCanvas={PREFER_CANVAS}
      contextmenu={true}
      contextmenuItems={contextmenuItems}
    >
      <SetMapRef ref={ref} />
      <HandleMapClick
        handleMapClick={handleMapClick} />
      <Geocoder />
      <AreaFilter />

      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <CircleMarker
          key={`${e.type}-${e.id}`}
          e={e}
          isSelected={e.id === selected}
          handleClick={handleMarkerClick(e)}
          preset={PoiDecorator.getPreset(e.presetId)}
        />
      )}

      <LocationMarker
        lat={location.lat}
        lon={location.lon} />

      <RemoveMapOnUnmount />
    </MapContainer>
  );
};

export default React.forwardRef(MapView);
