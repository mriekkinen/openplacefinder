import opening_hours from 'opening_hours';

export const createOpeningHours = (openingHours: string): opening_hours => {
  // TODO: Handle time zones
  // TODO: Handle public and school holidays correctly (set the country code)
  return new opening_hours(openingHours, null);
};

export const isOpenNow = (openingHours: string): boolean => {
  const oh = createOpeningHours(openingHours);
  const now = new Date();
  return oh.getState(now);
};
