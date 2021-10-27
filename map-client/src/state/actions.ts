import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { LatLngBounds } from 'leaflet';

import { Poi } from '../types';
import { Country, MapFeature, QueryStatus, State } from './state';

export type AppThunk = ThunkAction<void, State, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<State, unknown, AnyAction>;

export type PoiAction =
| {
    type: 'poiList/setData',
    data: Poi[]
  }
| {
    type: 'poiList/setStatus',
    data: QueryStatus
  }
| {
    type: 'poiList/setCountry',
    data: Country
  };

export type UiAction =
| {
    type: 'ui/setSelected',
    data: number | null
  };

export type SearchAction =
  | {
      type: 'search/setMapFeature',
      data: MapFeature | null
    }
  | {
      type: 'search/setBoundary',
      data: {
        name: string,
        id: number
      }
    }
  | {
      type: 'search/setBBox',
      data: {
        bbox: LatLngBounds
      }
    };

export type LocationAction =
  | {
      type: 'location/setLocation',
      data: {
        lat: number,
        lon: number
      }
    };

export type FacetAction =
  | {
      type: 'facets/setName',
      data: string
    }
  | {
      type: 'facets/requireOpeningHours',
      data: boolean
    }
  | {
      type: 'facets/requireOpenNow',
      data: boolean
    }
  | {
      type: 'facets/checkCuisine',
      data: {
        cuisine: string,
        isChecked: boolean
      }
    }
  | {
      type: 'facets/migrate',
      data: Set<string>
    }
  | {
      type: 'facets/clear'
    }
  | {
      type: 'facets/reset'
    };

export type Action =
  | PoiAction
  | UiAction
  | SearchAction
  | LocationAction
  | FacetAction;
