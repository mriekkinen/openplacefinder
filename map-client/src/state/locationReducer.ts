import { initialState, LocationState } from './state';
import { Action } from './actions';

export const setLocation = (lat: number, lon: number): Action => {
  return {
    type: 'location/setLocation',
    data: {
      lat, lon
    }
  };
};

export const locationReducer = (
  state: LocationState = initialState.location,
  action: Action
): LocationState => {
  switch (action.type) {
    case 'location/setLocation':
      return {
        ...state,
        lat: action.data.lat,
        lon: action.data.lon
      };
    default:
      return state;
  }
};
