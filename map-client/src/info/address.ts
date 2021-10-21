import { Poi } from '../types';
import { AddressFormat } from './types';

export const getAddress = (
  e: Poi,
  format: AddressFormat
): string | null => {
  if (!e.tags['addr:street']) {
    return null;
  }

  const housename = e.tags['addr:housename'];
  const street = join([e.tags['addr:street'], e.tags['addr:housenumber']], ' ');
  const city = e.tags['addr:city'];

  if (format === 'short') {
    return street;
  }

  return join([housename, street, city], ', ');
};

const join = (
  parts: Array<string | null | undefined>,
  separator: string
): string => {
  return parts
    .filter(p => p !== undefined && p !== null)
    .join(separator);
};
