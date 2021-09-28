import { LatLngBounds } from 'leaflet';

import { Poi } from '../types';

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface Country {
  country: string,
  countryCode: string,
  state: string
}

export interface PoiState {
  status: Status;
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

export const CATEGORIES = [
  { value: 'amenity=cafe', label: 'Café' },
  { value: 'amenity=fast_food', label: 'Fast food' },
  { value: 'amenity=pub', label: 'Pub' },
  { value: 'amenity=restaurant', label: 'Restaurant' }
] as const;

// https://stackoverflow.com/a/45486495
type CategoryTuple = typeof CATEGORIES;
export type Category = CategoryTuple[number];

export interface SearchState {
  category: Category | null;
  area: SearchArea;
}

export interface LocationState {
  lat: number;
  lon: number;
}

export interface FacetState {
  name: string;
  brand: string;
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
    category: null,
    area: {
      type: 'boundary',
      name: 'Helsinki',
      id: 3600034914
    }
  },
  location: {
    lat: 60.1673,
    lon: 24.9428
  },
  facets: {
    name: '',
    brand: '',
    openingHours: false,
    openNow: false,
    cuisines: new Set<string>()
  }
};
