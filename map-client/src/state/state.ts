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

export interface UiState {
  selected: Poi | null;
  hover: Poi | null;
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
    selected: null,
    hover: null
  },
  facets: {
    name: '',
    brand: '',
    openingHours: false,
    openNow: false,
    cuisines: new Set<string>()
  }
};
