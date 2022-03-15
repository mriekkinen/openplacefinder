import { LatLngLiteral } from 'leaflet';

export interface MapState {
  center: LatLngLiteral;
  zoom: number;
}
