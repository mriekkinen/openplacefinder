import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L, { LatLng, LatLngBounds } from 'leaflet';
import 'leaflet-contextmenu';

import { Poi } from '../types';
import {
  FacetState, MapFeature,
  queryOverpass, showZoomInModal, setLocation,
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
import AreaFilter from './AreaFilter';
import Geocoder from './Geocoder';
import { MapState } from './types';
import { isZoomSufficient } from '../conf';
import { buildBBoxQuery } from '../overpass';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

interface Props {
  queryParam: string | undefined;
  idParam: number | undefined;
  facetParams: FacetState;
  mapParam: MapState;
  setId: (newId: number | undefined) => void;
  setMap: (newMap: MapState | undefined) => void;
  findFeature: (q: string | undefined) => MapFeature | undefined;
}

const MapView = ({
    queryParam, idParam, facetParams, mapParam,
    setId, setMap, findFeature
  }: Props, ref: React.Ref<MapHandle>
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const location = useAppSelector(state => state.location);

  const filteredData = filter(data, country, facetParams);

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
    if (newZoom === mapParam.zoom
        && newCenter.lat.toFixed(4) === mapParam.center.lat.toFixed(4)
        && newCenter.lng.toFixed(4) === mapParam.center.lng.toFixed(4)) {
      return;
    }

    console.log(
      'handleMoveZoom:',
      'from:', `${mapParam.zoom}/${mapParam.center.lat.toFixed(4)}/${mapParam.center.lng.toFixed(4)}`,
      'to:', `${newZoom}/${newCenter.lat.toFixed(4)}/${newCenter.lng.toFixed(4)}`
    );

    // Update the URL to reflect changes in map state
    // (i.e., the user has either moved the map or zoomed in/out)
    setMap({
      center: {
        lat: newCenter.lat,
        lng: newCenter.lng
      },
      zoom: newZoom
    });
  }, [setMap]);

  const makeQuery = (
    feature: MapFeature,
    bounds: LatLngBounds,
    zoom: number
  ) => {
    if (!isZoomSufficient(zoom)) {
      console.log('Please zoom in to view data!')
      dispatch(showZoomInModal());
      return;
    }

    const query = buildBBoxQuery(
      [feature.value],
      bounds
    );

    dispatch(queryOverpass(query));
  };

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
      <SetMapRef ref={ref} />
      <HandleResize />
      <HandleMapEvents
        handleMapClick={handleMapClick}
        handleMoveZoom={handleMoveZoom} />
      <HandleBackFwd
        mapParam={mapParam} />
      <QueryOverpass
        q={queryParam}
        findFeature={findFeature}
        makeQuery={makeQuery} />
      <AreaFilter
        q={queryParam}
        findFeature={findFeature}
        makeQuery={makeQuery} />
      <Geocoder />

      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <IconMarker
          key={`${e.type}-${e.id}`}
          e={e}
          isSelected={e.id === idParam}
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
