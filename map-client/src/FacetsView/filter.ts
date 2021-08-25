import { Poi } from '../types';
import { FacetState } from '../state';

const filter = (data: Poi[], facets: FacetState): Poi[] => {
  const facetName = trimLower(facets.name);
  const facetBrand = trimLower(facets.brand);

  return data.filter(poi => {
    return true
      && (!facetName || matchName(facetName, poi))
      && (!facetBrand || matchBrand(facetBrand, poi));
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

const trimLower = (s: string | undefined) => {
  return s?.trim().toLowerCase();
}

export default filter;
