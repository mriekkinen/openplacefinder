import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Poi } from '../types';
import { Status, State, Country, TabIndex } from './state';

export type AppThunk = ThunkAction<void, State, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<State, unknown, AnyAction>;

export type PoiAction =
| {
    type: 'poiList/setData',
    data: Poi[]
  }
| {
    type: 'poiList/setStatus',
    data: Status
  }
| {
    type: 'poiList/setCountry',
    data: Country
  };

export type UiAction =
| {
    type: 'ui/setTab',
    data: TabIndex
  }
| {
    type: 'ui/setSelected',
    data: Poi | null
  };

export type FacetAction =
  | {
      type: 'facets/setName',
      data: string
    }
  | {
      type: 'facets/setBrand',
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
      type: 'facets/clear'
    };

export type Action = PoiAction | UiAction | FacetAction;
