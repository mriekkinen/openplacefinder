import { OverpassElement, OverpassJson, OverpassNode } from 'overpass-ts';

import { OverpassPoi, OverpassPoiOptionalLatLng } from '../types';
import { Nwr } from './types';

export const overpass2Poi = (data: OverpassJson | null): OverpassPoi[] => {
  if (!data) return [];
  const opt: OverpassPoiOptionalLatLng[] = data.elements
    .filter(isNwr)
    .map(e => ({
      type: e.type,
      id: e.id,
      lat: isNode(e)
        ? e.lat
        : e.center?.lat,
      lng: isNode(e)
        ? e.lon
        : e.center?.lon,
      tags: e.tags ? e.tags : {}
    }));

    return opt.filter(hasLatLng);
};

const isNwr = (e: OverpassElement): e is Nwr => {
  return e.type === 'node' || e.type === 'way' || e.type === 'relation';
}

const isNode = (e: OverpassElement): e is OverpassNode => {
  return e.type === 'node';
}

const hasLatLng = (e: OverpassPoiOptionalLatLng): e is OverpassPoi => {
  return e.lat !== undefined && e.lng !== undefined;
};
