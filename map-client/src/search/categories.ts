import { Poi } from '../types';
import { getCategories, getCuisines } from '../info';

export const countCuisines = (data: Poi[]) => {
  return countValues(data, getCuisines);
};

export const countCategories = (data: Poi[]) => {
  return countValues(data, getCategories);
};

const countValues = (
  data: Poi[],
  getValues: (poi: Poi) => string[]
) => {
  const counts = new Map<string, number>();
  data.forEach(poi => {
    const values = getValues(poi);
    values.forEach(value => {
      const count = counts.get(value) ?? 0;
      counts.set(value, count + 1);
    });
  });

  return counts;
};

export const sortByCount = (counts: Map<string, number>) => {
  // Sort twice so that cuisines with the same count appear in alphabetical order
  // (assuming the sorting algorithm is stable)
  return Array.from(counts.entries())
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0]);
};
