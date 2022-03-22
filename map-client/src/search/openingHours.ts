import opening_hours from 'opening_hours';

import { Poi } from '../types';
import { Country } from '../state';

interface NominatimObject {
  lat: number,
  lon: number,
  address: {
    country_code: string,
    state: string
  }
}

export const createNominatimObject = (
  lat: number,
  lon: number,
  country: Country
): NominatimObject => {
  return {
    lat,
    lon,
    address: {
      country_code: country.countryCode,
      state: country.state
    }
  };
};

export const createOpeningHours = (
  openingHours: string,
  nominatimObj: NominatimObject
): opening_hours => {
  // TODO: Test whether time zones and holidays are handled correctly
  return new opening_hours(openingHours, nominatimObj);
};

export const getOpeningHours = (poi: Poi, country: Country | undefined) => {
  const openingHours = poi.tags['opening_hours'];
  if (openingHours === undefined || country === undefined) {
    return undefined;
  }

  const nom = createNominatimObject(poi.lat, poi.lng, country);
  return createOpeningHours(openingHours, nom);
};

export const isOpenNow = (
  poi: Poi,
  country: Country | undefined
): boolean | undefined => {
  const oh = getOpeningHours(poi, country);
  const now = new Date();
  return oh?.getState(now);
};
