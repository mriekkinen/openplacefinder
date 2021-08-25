import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Poi } from '../types';
import { Status, State } from './state';

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
  };

export type UiAction =
| {
    type: 'ui/setSelected',
    data: Poi | null
  }
| {
    type: 'ui/setHover',
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
      type: 'facets/clear'
    };

export type Action = PoiAction | UiAction | FacetAction;
