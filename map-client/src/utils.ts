import { Poi } from './types';

// const hasLatLon = (e: Nwr): boolean => {
//   return isNode(e) || e.center !== undefined;
// };

export const hasLatLon = (e: Poi): boolean => {
  return e.lat !== undefined && e.lon !== undefined;
};

export const splitValue = (value: string): string[] => {
  // https://wiki.openstreetmap.org/wiki/Semi-colon_value_separator
  return value.split(';').map(x => x.trim());
};

/**
 * Helper function for exhaustive type checking
 */
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
