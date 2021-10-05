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

export const mapFeatures: readonly MapFeatureGroup[] = [
  {
    label: 'Sustenance',
    options: [
      { value: 'amenity=cafe', label: 'Café' },
      { value: 'amenity=fast_food', label: 'Fast food' },
      { value: 'amenity=pub', label: 'Pub' },
      { value: 'amenity=restaurant', label: 'Restaurant' },
    ]
  },
  {
    label: 'Entertainment, arts & culture',
    options: [
      { value: 'amenity=arts_centre', label: 'Arts centre' },
      { value: 'amenity=theatre', label: 'Theatre' },
    ]
  },
  {
    label: 'Facilities',
    options: [
      { value: 'amenity=toilets', label: 'Toilets' },
    ]
  },
  {
    label: 'Public service',
    options: [
      { value: 'amenity=post_box', label: 'Post box' },
      { value: 'amenity=post_office', label: 'Post office' },
      { value: 'amenity=ranger_station', label: 'Ranger station' },
    ]
  },
  {
    label: 'Tourism',
    options: [
      { value: 'tourism=aquarium', label: 'Aquarium' },
      { value: 'tourism=artwork', label: 'Artwork' },
      { value: 'tourism=attraction', label: 'Attraction' },
      { value: 'tourism=gallery', label: 'Gallery' },
      { value: 'tourism=information', label: 'Information' },
      { value: 'tourism=museum', label: 'Museum' },
      { value: 'tourism=picnic_site', label: 'Picnic site' },
      { value: 'tourism=viewpoint', label: 'Viewpoint' },
      { value: 'tourism=zoo', label: 'Zoo' },
    ]
  },
  {
    label: 'Transportation',
    options: [
      { value: 'amenity=fuel', label: 'Fuel station' },
      { value: 'amenity=parking', label: 'Parking' }
    ]
  }
];

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
    brand: '',
    openingHours: false,
    openNow: false,
    cuisines: new Set<string>()
  }
};
