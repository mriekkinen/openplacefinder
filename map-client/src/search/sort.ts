import { LatLng } from 'leaflet';

import { Poi, PoiWithDistance } from '../types';

const getCoords = (poi: Poi) => {
  return {
    lat: poi.lat,
    lng: poi.lng
  };
};

// TODO: Store distances to a cache
// (recompute if fromLat/Lon changes, or data refreshed)
export const addDistance = (
  data: Poi[],
  fromLat: number,
  fromLng: number
): PoiWithDistance[] => {
  const fromCoords = new LatLng(fromLat, fromLng);
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
