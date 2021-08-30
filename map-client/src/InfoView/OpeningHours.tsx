import React from 'react';
import styled from 'styled-components';
import opening_hours from 'opening_hours';
import { GraySpan } from '../FacetsView/styles';

interface Props {
  openingHours: string | undefined;
}

export const OpeningHours = ({ openingHours }: Props) => {
  if (openingHours === undefined) {
    return <div>Opening hours: <b>undefined</b></div>
  }

  return (
    <div>
      Opening hours:
      <ul>
        {openingHours.split(';').map((row, index) =>
          <li key={`${index}-${row}`}>{row}</li>
        )}
      </ul>
    </div>
  );
};

/**
 * TODO: Add support for different time zones and holidays
 */
export const OpenState = ({ openingHours }: Props) => {
  if (openingHours === undefined) {
    return null;
  }

  try {
    // TODO: Handle time zones
    // TODO: Handle public and school holidays correctly (set the country code)
    const oh = new opening_hours(openingHours, null);
    const now = new Date();

    // Is this location open/closed at the moment?
    const isOpen = oh.getState(now);
    const stateText = isOpen ? 'Open' : 'Closed';

    // When is the next time it will open/close?
    const nextChangeText = getNextChangeText(oh, now);

    return (
      <>
        <OpenStateText isOpen={isOpen}>
          {stateText}
        </OpenStateText>
        &nbsp;
        <GraySpan>
          {nextChangeText}
        </GraySpan>
      </>
    );
  } catch (e) {
    // console.log('opening_hours exception:', e);
    return <span>Invalid opening hours: {e}</span>;
  }
};

const getNextChangeText = (oh: opening_hours, now: Date) => {
  const isOpen = oh.getState(now);
  const maxDate = addDays(now, 6);
  const nextChange = oh.getNextChange(now, maxDate);

  if (nextChange === undefined) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  };

  // If not the same date, show the weekday
  if (nextChange.getDate() !== now.getDate()) {
    options.weekday = 'short';
  }

  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const dayTime = formatter.format(nextChange);
  const change = isOpen ? 'closes' : 'opens';

  return `(${change} at ${dayTime})`;
};

const addDays = (base: Date, days: number): Date => {
  const newDate = new Date(base);
  newDate.setDate(base.getDate() + days);
  return newDate;
};

interface OpenStateTextProps {
  readonly isOpen: boolean;
}

const OpenStateText = styled.span<OpenStateTextProps>`
  color: ${props => props.isOpen ? '#2E7D32' : '#C62828'};
`;
