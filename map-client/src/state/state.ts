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
  selected: Poi | null;
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
  facets: FacetState;
}

export const initialState: State = {
  poiList: {
    status: 'idle',
    data: [],
    country: undefined
  },
  ui: {
    tab: TabIndex.Map,
    selected: null
  },
  facets: {
    name: '',
    brand: '',
    openingHours: false,
    openNow: false,
    cuisines: new Set<string>()
  }
};
