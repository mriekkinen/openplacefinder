import { OverpassJson, OverpassElement, OverpassNode } from 'overpass-ts';
import { Poi, Nwr } from './types';

const isNwr = (e: OverpassElement): e is Nwr => {
  return e.type === 'node' || e.type === 'way' || e.type === 'relation';
}

const isNode = (e: OverpassElement): e is OverpassNode => {
  return e.type === 'node';
}

// const hasLatLon = (e: Nwr): boolean => {
//   return isNode(e) || e.center !== undefined;
// };

export const hasLatLon = (e: Poi): boolean => {
  return e.lat !== undefined && e.lon !== undefined;
};

export const overpass2Poi = (data: OverpassJson | null): Poi[] => {
  if (!data) return [];
  return data.elements
    .filter(isNwr)
    .map(e => ({
      type: e.type,
      id: e.id,
      lat: isNode(e)
        ? e.lat
        : e.center?.lat,
      lon: isNode(e)
        ? e.lon
        : e.center?.lon,
      tags: e.tags ? e.tags : {}
    }));
};

export const splitValue = (value: string): string[] => {
  // https://wiki.openstreetmap.org/wiki/Semi-colon_value_separator
  return value.split(';').map(x => x.trim());
};
