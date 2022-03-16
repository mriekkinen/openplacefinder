import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLng, LatLngBounds } from 'leaflet';
import 'leaflet-contextmenu';

import { Poi } from '../types';
import {
  MapFeature,
  setArea,
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
import AddContextMenu from './AddContextMenu';
import { SearchParams } from '../params';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

interface Props {
  params: SearchParams;
  findFeature: (q: string | undefined) => MapFeature | undefined;
  makeQuery: (
    feature: MapFeature,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const MapView = (
  { params, findFeature, makeQuery }: Props,
  ref: React.Ref<MapHandle>
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const filteredData = filter(data, country, params.facets);

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

  const handleMoveZoom = useCallback((newZoom: number, newCenter: LatLng, clearArea = true, commitChanges = true) => {
    if (newZoom === params.map.zoom
        && newCenter.lat.toFixed(4) === params.map.center.lat.toFixed(4)
        && newCenter.lng.toFixed(4) === params.map.center.lng.toFixed(4)) {
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
    if (commitChanges) {
      params.commit();
    }

    // Clear the area selection box
    if (clearArea) {
      dispatch(setArea(null));
    }
  }, [params, params.map]);

  return (
    <MapContainer
      id='map-container'
      center={params.map.center}
      zoom={params.map.zoom}
      scrollWheelZoom={true}
      preferCanvas={PREFER_CANVAS}
      contextmenu={true}
    >
      <SetMapRef
        handleMoveZoom={handleMoveZoom}
        ref={ref} />
      <AddAttribution />
      <AddContextMenu
        params={params} />
      <HandleResize />
      <HandleMapEvents
        handleMapClick={handleMapClick}
        handleMoveZoom={handleMoveZoom} />
      <HandleBackFwd
        mapParam={params.map} />
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
        lat={params.loc.lat}
        lng={params.loc.lng} />

      <RemoveMapOnUnmount />
    </MapContainer>
  );
};

export default React.forwardRef(MapView);
