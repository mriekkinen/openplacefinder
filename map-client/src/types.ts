export type Tags = { [key: string]: string | undefined };

export interface OverpassPoi {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  tags: Tags;
}

export interface Poi extends OverpassPoi {
  presetId: string | null;
}

export interface PoiWithDistance extends Poi {
  distance: number;
}
