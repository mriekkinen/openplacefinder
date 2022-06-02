import { Feature as PeliasFeature } from 'geocodeearth-core-js/dist/geojson';

import { Poi } from '../types';
import { Preset } from '../presets';

export type QueryStatus = 'idle' | 'loading' | 'pending' | 'succeeded' | 'failed';

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

export interface SizeWarningModalData {
  type: 'SizeWarningModal';
  n: number;
  handleResult: (ok: boolean) => void;
}

export interface PresetModalData {
  type: 'PresetModal';
  handleChange: (newValue: PresetOption | null) => void;
  initialRoot?: PresetOption | null;
}

export type ModalData =
  | ZoomInModalData
  | OverpassErrorModalData
  | SizeWarningModalData
  | PresetModalData;

export interface PresetOption {
  readonly value: Preset;
  readonly label: string;
}

export interface AreaOption  {
  readonly value: PeliasFeature;
  readonly label: string;
}

export enum SortOption {
  Distance = 'distance',
  Category = 'category',
  Name = 'name'
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
  lunch?: boolean;
  cuisines?: Set<string>;
  categories?: Set<string>;
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
