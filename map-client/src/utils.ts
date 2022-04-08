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

/**
 * A type predicate for filtering out null and undefined elements from an array
 * 
 * Source: https://stackoverflow.com/a/46700791
 */
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
