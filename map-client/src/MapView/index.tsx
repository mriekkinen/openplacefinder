import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L, { LatLng, LatLngBounds } from 'leaflet';
import 'leaflet-contextmenu';

import { Poi } from '../types';
import {
  MapFeature,
  setLocation, setArea,
  useAppDispatch, useAppSelector
} from '../state';
import { filter } from '../search';
import { presetSingleton } from '../presets';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleResize from './HandleResize';
import HandleBackFwd from './HandleBackFwd';
import HandleMapEvents from './HandleMapEvents';
import QueryOverpass from './QueryOverpass';
import IconMarker from './IconMarker';
import LocationMarker from './LocationMarker';
import RemoveMapOnUnmount from './RemoveMapOnUnmount';
import SearchInArea from './SearchInArea';
import AddAttribution from './AddAttribution';
import { MapState } from './types';
import { SearchParams } from '../params';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

interface Props {
  params: SearchParams;
  defaultView: MapState;
  findFeature: (q: string | undefined) => MapFeature | undefined;
  makeQuery: (
    feature: MapFeature,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const MapView = (
  { params, defaultView, findFeature, makeQuery }: Props,
  ref: React.Ref<MapHandle>
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const location = useAppSelector(state => state.location);

  const filteredData = filter(data, country, params.facets);

  const mapParam = params.map ?? defaultView;

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
    params.id = undefined;
    params.commit();
  };

  const handleMarkerClick = (e: Poi) => () => {
    params.id = e.id;
    params.commit();
  };

  const handleMoveZoom = useCallback((newZoom: number, newCenter: LatLng, clearArea = true) => {
    if (newZoom === mapParam.zoom
        && newCenter.lat.toFixed(4) === mapParam.center.lat.toFixed(4)
        && newCenter.lng.toFixed(4) === mapParam.center.lng.toFixed(4)) {
      return;
    }

    console.log('handleMoveZoom');

    // Update the URL to reflect changes in map state
    // (i.e., the user has either moved the map or zoomed in/out)
    params.map = {
      center: {
        lat: newCenter.lat,
        lng: newCenter.lng
      },
      zoom: newZoom
    };
    params.commit();

    // Clear the area selection box
    if (clearArea) {
      dispatch(setArea(null));
    }
  }, [params, mapParam]);

  return (
    <MapContainer
      id='map-container'
      center={mapParam.center}
      zoom={mapParam.zoom}
      scrollWheelZoom={true}
      preferCanvas={PREFER_CANVAS}
      contextmenu={true}
      contextmenuItems={contextmenuItems}
    >
      <SetMapRef
        handleMoveZoom={handleMoveZoom}
        ref={ref} />
      <AddAttribution />
      <HandleResize />
      <HandleMapEvents
        handleMapClick={handleMapClick}
        handleMoveZoom={handleMoveZoom} />
      <HandleBackFwd
        mapParam={mapParam} />
      <QueryOverpass
        q={params.q}
        findFeature={findFeature}
        makeQuery={makeQuery} />
      <SearchInArea
        q={params.q}
        findFeature={findFeature}
        makeQuery={makeQuery} />

      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <IconMarker
          key={`${e.type}-${e.id}`}
          e={e}
          isSelected={e.id === params.id}
          handleClick={handleMarkerClick(e)}
          preset={presetSingleton.getPreset(e.presetId)}
        />
      )}

      <LocationMarker
        lat={location.lat}
        lng={location.lng} />

      <RemoveMapOnUnmount />
    </MapContainer>
  );
};

export default React.forwardRef(MapView);
