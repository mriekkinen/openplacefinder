import { LatLngLiteral } from 'leaflet';

import { initialState } from './state';
import { Action } from './actions';

export const setLocation = (lat: number, lng: number): Action => {
  return {
    type: 'location/setLocation',
    data: {
      lat, lng
    }
  };
};

export const locationReducer = (
  state: LatLngLiteral = initialState.location,
  action: Action
): LatLngLiteral => {
  switch (action.type) {
    case 'location/setLocation':
      return {
        ...state,
        lat: action.data.lat,
        lng: action.data.lng
      };
    default:
      return state;
  }
};
