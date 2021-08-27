import { OverpassNode, OverpassWay, OverpassRelation } from 'overpass-ts';

export type Tags = { [key: string]: string | undefined };

export interface Poi {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  tags: Tags;
}

export type Nwr = OverpassNode | OverpassWay | OverpassRelation;
