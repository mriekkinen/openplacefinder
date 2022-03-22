export type Tags = { [key: string]: string | undefined };

export interface OverpassPoiOptionalLatLng {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lng?: number;
  tags: Tags;
}

export type OverpassPoi = Required<OverpassPoiOptionalLatLng>;

export interface Poi extends OverpassPoi {
  presetId: string | undefined;
}

export interface PoiWithDistance extends Poi {
  distance: number;
}
