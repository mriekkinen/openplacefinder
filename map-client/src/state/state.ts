import { Poi } from '../types';

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface State {
  status: Status;
  pois: Poi[];
  selected: Poi | null;
  hover: Poi | null;
}

export const initialState: State = {
  status: 'idle',
  pois: [],
  selected: null,
  hover: null
};
