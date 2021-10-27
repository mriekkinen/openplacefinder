import { Poi } from '../types';
import { splitValue } from '../utils';

export const getCuisines = (poi: Poi): string[] => {
  const cuisines = poi.tags['cuisine'] ?? '(unknown)';
  return splitValue(cuisines).map(trimLower2);
};

const trimLower2 = (s: string) => {
  return s.trim().toLowerCase();
};
