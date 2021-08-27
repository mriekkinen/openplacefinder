import { Poi } from '../types';
import { FacetState } from '../state';
import { isOpenNow } from '../InfoView/OpeningHours';

const filter = (data: Poi[], facets: FacetState): Poi[] => {
  const facetName = trimLower(facets.name);
  const facetBrand = trimLower(facets.brand);
  const facetOpeningHours = facets.openingHours;
  const facetOpenNow = facets.openNow;
  const facetCuisines = facets.cuisines;

  return data.filter(poi => {
    return true
      && (!facetName || matchName(facetName, poi))
      && (!facetBrand || matchBrand(facetBrand, poi))
      && (!facetOpeningHours || matchOpeningHours(poi))
      && (!facetOpenNow || matchOpenNow(poi))
      && (facetCuisines.size === 0 || matchCuisine(facetCuisines, poi));
  });
};

const matchName = (facetName: string, poi: Poi): boolean => {
  const name = trimLower(poi.tags['name']);
  if (!name) return false;

  return name.includes(facetName);
};

const matchBrand = (facetBrand: string, poi: Poi): boolean => {
  const brand = trimLower(poi.tags['brand']);
  if (!brand) return false;

  return brand.includes(facetBrand);
};

const matchOpeningHours = (poi: Poi): boolean => {
  // TODO: Should places with invalid opening hours be excluded?
  return poi.tags['opening_hours'] !== undefined;
};

const matchOpenNow = (poi: Poi): boolean => {
  try {
    const openingHours = poi.tags['opening_hours'];
    return openingHours !== undefined && isOpenNow(openingHours);
  } catch (e) {
    // In this case, openingHours is invalid and cannot be parsed
    return false;
  }
};

const matchCuisine = (facetCuisines: Set<string>, poi: Poi): boolean => {
  const cuisines = getCuisines(poi);
  return cuisines.some(cuisine => facetCuisines.has(cuisine));
};

export const getCuisines = (poi: Poi): string[] => {
  const cuisines = poi.tags['cuisine'] ?? '(undefined)';
  return splitValue(cuisines).map(trimLower2);
};

const splitValue = (value: string): string[] => {
  // TODO: This could be made more robust
  return value.split(';')
};

const trimLower = (s: string | undefined) => {
  return s?.trim().toLowerCase();
};

const trimLower2 = (s: string) => {
  return s.trim().toLowerCase();
};

export default filter;
