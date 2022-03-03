import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L, { LatLng } from 'leaflet';
import 'leaflet-contextmenu';

import { Poi } from '../types';
import {
  setLocation,
  useAppDispatch, useAppSelector
} from '../state';
import { filter } from '../search';
import { presetSingleton } from '../presets';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleResize from './HandleResize';
import HandleMapEvents from './HandleMapEvents';
import IconMarker from './IconMarker';
import LocationMarker from './LocationMarker';
import RemoveMapOnUnmount from './RemoveMapOnUnmount';
import AreaFilter from './AreaFilter';
import Geocoder from './Geocoder';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

export interface MapState {
  center: L.LatLngLiteral;
  zoom: number;
}

interface Props {
  init: MapState;
  id: number | undefined;
  setId: (newId: number | undefined) => void;
  setMap: (newMap: MapState | undefined) => void;
}

const MapView = (
  { init, id, setId, setMap }: Props,
  ref: React.Ref<MapHandle>
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const facets = useAppSelector(state => state.facets);
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
    setId(undefined);
  };

  const handleMarkerClick = (e: Poi) => () => {
    setId(e.id);
  };

  const handleMoveZoom = useCallback((newZoom: number, newCenter: LatLng) => {
    setMap({
      center: {
        lat: newCenter.lat,
        lng: newCenter.lng
      },
      zoom: newZoom
    });
  }, [setMap]);

  return (
    <MapContainer
      id='map-container'
      center={init.center}
      zoom={init.zoom}
      scrollWheelZoom={true}
      preferCanvas={PREFER_CANVAS}
      contextmenu={true}
      contextmenuItems={contextmenuItems}
    >
      <SetMapRef ref={ref} />
      <HandleResize />
      <HandleMapEvents
        handleMapClick={handleMapClick}
        handleMoveZoom={handleMoveZoom} />
      <Geocoder />
      <AreaFilter />

      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <IconMarker
          key={`${e.type}-${e.id}`}
          e={e}
          isSelected={e.id === id}
          handleClick={handleMarkerClick(e)}
          preset={presetSingleton.getPreset(e.presetId)}
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
