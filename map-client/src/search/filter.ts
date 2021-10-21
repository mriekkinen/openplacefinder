import { Poi } from '../types';
import { Country, FacetState } from '../state';
import { isOpenNow } from './openingHours';
import { getCuisines } from '../info';

export const filter = (
  data: Poi[],
  country: Country | undefined,
  facets: FacetState
): Poi[] => {
  const facetName = trimLower(facets.name);
  const facetOpeningHours = facets.openingHours;
  const facetOpenNow = facets.openNow;
  const facetCuisines = facets.cuisines;

  return data.filter(poi => {
    return true
      && (!facetName || matchName(facetName, poi))
      && (!facetOpeningHours || matchOpeningHours(poi))
      && (!facetOpenNow || matchOpenNow(poi, country))
      && (facetCuisines.size === 0 || matchCuisine(facetCuisines, poi));
  });
};

const matchName = (facetName: string, poi: Poi): boolean => {
  const name = trimLower(poi.tags['name']);
  if (!name) return false;

  return name.includes(facetName);
};

const matchOpeningHours = (poi: Poi): boolean => {
  // TODO: Should places with invalid opening hours be excluded?
  return poi.tags['opening_hours'] !== undefined;
};

const matchOpenNow = (poi: Poi, country: Country | undefined): boolean => {
  try {
    const isOpen = isOpenNow(poi, country);
    return isOpen !== undefined && isOpen;
  } catch (e) {
    // In this case, openingHours is invalid and cannot be parsed
    return false;
  }
};

const matchCuisine = (facetCuisines: Set<string>, poi: Poi): boolean => {
  const cuisines = getCuisines(poi);
  return cuisines.some(cuisine => facetCuisines.has(cuisine));
};

const trimLower = (s: string | undefined) => {
  return s?.trim().toLowerCase();
};
