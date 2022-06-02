import { Poi } from '../types';
import { splitValue } from '../utils';

export const getCuisines = (poi: Poi): string[] => {
  const cuisines = poi.tags['cuisine'] ?? '(unknown)';
  return splitValue(cuisines).map(trimLower2);
};

export const getCategories = (poi: Poi): string[] => {
  return [poi.presetId ?? '(unknown)'];
};

const trimLower2 = (s: string) => {
  return s.trim().toLowerCase();
};
