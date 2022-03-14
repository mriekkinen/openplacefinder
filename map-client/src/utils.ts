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
