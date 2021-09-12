import { LatLng } from 'leaflet';

import { Poi, PoiWithDistance } from '../types';

// TODO: Make (lat, lon) mandatory in the definition of the Poi interface
const getCoords = (poi: Poi) => {
  return {
    lat: poi.lat ?? 0,
    lng: poi.lon ?? 0
  };
};

// TODO: Store distances to a cache
// (recompute if fromLat/Lon changes, or data refreshed)
export const addDistance = (
  data: Poi[],
  fromLat: number,
  fromLon: number
): PoiWithDistance[] => {
  const fromCoords = new LatLng(fromLat, fromLon);
  return data.map(poi => ({
    ...poi,
    distance: fromCoords.distanceTo(getCoords(poi))
  }));
};

export const sortByDistance = (
  data: PoiWithDistance[]
): PoiWithDistance[] => {
  return data.sort((a, b) => a.distance - b.distance);
};
