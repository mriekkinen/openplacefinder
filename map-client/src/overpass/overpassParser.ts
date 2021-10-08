import { OverpassElement, OverpassJson, OverpassNode } from 'overpass-ts';

import { OverpassPoi } from '../types';
import { Nwr } from './types';

export const overpass2Poi = (data: OverpassJson | null): OverpassPoi[] => {
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

const isNwr = (e: OverpassElement): e is Nwr => {
  return e.type === 'node' || e.type === 'way' || e.type === 'relation';
}

const isNode = (e: OverpassElement): e is OverpassNode => {
  return e.type === 'node';
}
