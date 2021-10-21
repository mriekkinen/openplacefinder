import { Poi } from '../types';
import { getCuisines } from '../info';

export const countCuisines = (data: Poi[]) => {
  const counts = new Map<string, number>();
  data.forEach(poi => {
    const cuisines = getCuisines(poi);
    cuisines.forEach(cuisine => {
      const count = counts.get(cuisine) ?? 0;
      counts.set(cuisine, count + 1);
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
