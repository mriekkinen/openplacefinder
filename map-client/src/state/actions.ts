import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Poi } from '../types';
import { AreaOption, Country, ModalData, QueryStatus, State } from './state';

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
    type: 'ui/setArea',
    data: AreaOption | null
  }
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
        lng: number
      }
    };

export type Action =
  | PoiAction
  | UiAction
  | LocationAction;
