import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LatLng } from 'leaflet';

import MapView from './index';
import { MapHandle } from './SetMapRef';

export interface MapDefaults {
  center: L.LatLngLiteral;
  zoom: number;
}

interface Props {
  defaults: MapDefaults
}

const MapViewWithParams = (
  { defaults }: Props,
  ref: React.Ref<MapHandle>
) => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const map = searchParams.get('map');
  let { zoom } = defaults;
  let { lat, lng } = defaults.center;

  if (map) {
    // Parse the "map" URL search parameter
    // Should be in the format: map=zoom_lat_lng
    const pattern = /^(?<zoom>\d+)_(?<lat>-?\d+\.\d+)_(?<lng>-?\d+\.\d+)$/;
    const match = map.match(pattern);
    if (match && match.groups) {
      zoom = Number(match.groups.zoom) ?? zoom;
      lat = Number(match.groups.lat) ?? lat;
      lng = Number(match.groups.lng) ?? lng;
    }
  }

  const handleMoveZoom = useCallback((newZoom: number, newCenter: LatLng) => {
    const nz = newZoom.toFixed(0);
    const nlat = newCenter.lat.toFixed(4);
    const nlng = newCenter.lng.toFixed(4);

    setSearchParams({
      map: `${nz}_${nlat}_${nlng}`
    });
  }, [setSearchParams]);

  return (
    <MapView
      center={{ lat, lng }}
      zoom={zoom}
      handleMoveZoom={handleMoveZoom}
      ref={ref} />
  );
};

export default React.forwardRef(MapViewWithParams);
