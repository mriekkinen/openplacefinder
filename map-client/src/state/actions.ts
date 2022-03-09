import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Poi } from '../types';
import { Country, MapFeature, ModalData, QueryStatus, State } from './state';

export type AppThunk = ThunkAction<void, State, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<State, unknown, AnyAction>;

export type PoiAction =
| {
    type: 'poiList/setData',
    data: Poi[]
  }
| {
    type: 'poiList/setFields',
    data: Set<string>
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
    type: 'ui/showFilters',
    data: boolean
  }
| {
    type: 'ui/showModal',
    data: ModalData | null
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
  | LocationAction
  | FacetAction;
