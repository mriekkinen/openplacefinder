import { PoiWithDistance } from '../types';

export const getDistance = (e: PoiWithDistance) => {
  if (e.distance < 500) {
    return `${e.distance.toFixed(0)} m`;
  }

  return `${(e.distance / 1000).toFixed(1)} km`;
};
