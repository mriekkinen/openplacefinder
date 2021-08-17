import { Poi } from '../types';

export interface State {
  loading: boolean;
  pois: Poi[];
  selected: Poi | null;
  hover: Poi | null;
}

export const initialState: State = {
  loading: false,
  pois: [],
  selected: null,
  hover: null
};
