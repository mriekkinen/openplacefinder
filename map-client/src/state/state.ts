import { LatLngBounds } from 'leaflet';

import { Poi } from '../types';

export type QueryStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface Country {
  country: string,
  countryCode: string,
  state: string
}

export interface PoiState {
  status: QueryStatus;
  data: Poi[];
  country: Country | undefined;
}

export enum TabIndex {
  Map = 0,
  List
}

export interface UiState {
  tab: TabIndex;
  selected: number | null;
}

export interface SearchBoundary {
  type: 'boundary';
  name: string;
  id: number;
}

export interface SearchBBox {
  type: 'bbox';
  bbox: LatLngBounds;
}

export type SearchArea = SearchBoundary | SearchBBox;

export interface MapFeature {
  readonly value: string;
  readonly label: string;
}

export interface MapFeatureGroup {
  readonly label: string;
  readonly options: readonly MapFeature[];
}

export interface SearchState {
  feature: MapFeature | null;
  area: SearchArea;
}

export interface LocationState {
  lat: number;
  lon: number;
}

export interface FacetState {
  name: string;
  openingHours: boolean;
  openNow: boolean;
  cuisines: Set<string>;
}

export interface State {
  poiList: PoiState;
  ui: UiState;
  search: SearchState;
  location: LocationState;
  facets: FacetState;
}

export const initialState: State = {
  poiList: {
    status: 'idle',
    data: [],
    country: {
      country: 'Finland',
      countryCode: 'fi',
      state: ''
    }
  },
  ui: {
    tab: TabIndex.Map,
    selected: null
  },
  search: {
    feature: null,
    area: {
      type: 'bbox',
      bbox: new LatLngBounds([0, 0], [1, 1])
    }
  },
  location: {
    lat: 60.1673,
    lon: 24.9428
  },
  facets: {
    name: '',
    openingHours: false,
    openNow: false,
    cuisines: new Set<string>()
  }
};
