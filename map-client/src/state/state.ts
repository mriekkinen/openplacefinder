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

export interface UiState {
  filtersVisible: boolean;
  modal: ModalData | null;
}

export interface MapFeature {
  readonly value: string;
  readonly label: string;
}

export interface MapFeatureGroup {
  readonly label: string;
  readonly options: readonly MapFeature[];
}

export interface LocationState {
  lat: number;
  lon: number;
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
  location: LocationState;
  facets: FacetState;
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
    filtersVisible: false,
    modal: null
  },
  location: {
    lat: 60.1673,
    lon: 24.9428
  },
  facets: {
    name: '',
    openingHours: false,
    openNow: false,
    //cuisines: new Set<string>()
  }
};

// Initial values for all facets
// (including those not in the initial state)
export const facetClear: FacetState = {
  name: '',
  openingHours: false,
  openNow: false,
  cuisines: new Set<string>()
};
