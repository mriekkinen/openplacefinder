import { Feature as PeliasFeature } from '@geocodeearth/core-js/dist/geojson';

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
  fields: Set<string>;
  country: Country | undefined;
}

export interface ZoomInModalData {
  type: 'ZoomInModal';
}

export interface OverpassErrorModalData {
  type: 'OverpassErrorModal';
  error: unknown;
}

export type ModalData =
  | ZoomInModalData
  | OverpassErrorModalData;

export interface MapFeature {
  readonly value: string;
  readonly label: string;
}

export interface MapFeatureGroup {
  readonly label: string;
  readonly options: readonly MapFeature[];
}

export interface AreaOption  {
  readonly value: PeliasFeature;
  readonly label: string;
}

export interface UiState {
  area: AreaOption | null;
  filtersVisible: boolean;
  modal: ModalData | null;
}

export interface FacetState {
  name?: string;
  openingHours?: boolean;
  openNow?: boolean;
  cuisines?: Set<string>;
}

export interface State {
  poiList: PoiState;
  ui: UiState;
}

export const initialState: State = {
  poiList: {
    status: 'idle',
    data: [],
    fields: new Set<string>(),
    country: {
      country: 'Finland',
      countryCode: 'fi',
      state: ''
    }
  },
  ui: {
    area: null,
    filtersVisible: false,
    modal: null
  }
};
