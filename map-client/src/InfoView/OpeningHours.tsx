import React from 'react';
import styled from 'styled-components';
import opening_hours from 'opening_hours';

import { splitValue } from '../utils';
import { createOpeningHours } from '../search';
import { GraySpan } from '../FacetsView/styles';

interface Props {
  openingHours: string | undefined;
}

export const OpeningHours = ({ openingHours }: Props) => {
  if (openingHours === undefined) {
    return <div>Opening hours: (unknown)</div>
  }

  return (
    <div>
      Opening hours:
      <ul>
        {splitValue(openingHours).map((row, index) =>
          <li key={`${index}-${row}`}>{row}</li>
        )}
      </ul>
    </div>
  );
};

export const OpenState = ({ openingHours }: Props) => {
  if (openingHours === undefined) {
    return null;
  }

  try {
    // TODO: Add support for different time zones and holidays
    const oh = createOpeningHours(openingHours);
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

interface OpenStateTextProps {
  readonly isOpen: boolean;
}

const OpenStateText = styled.span<OpenStateTextProps>`
  color: ${props => props.isOpen ? '#2E7D32' : '#C62828'};
`;

const getNextChangeText = (oh: opening_hours, now: Date) => {
  const isOpen = oh.getState(now);
  const maxDate = addDays(now, 6);
  const nextChange = oh.getNextChange(now, maxDate);

  if (nextChange === undefined) {
    return null;
  }

  const change = isOpen ? 'closes' : 'opens';
  const weekday = getWeekdayString(nextChange);
  const time = getTimeString(nextChange);

  // If the same date, omit the weekday
  if (nextChange.getDate() === now.getDate()) {
    return `(${change} at ${time})`;
  }

  return `(${change} ${weekday} at ${time})`;
};

const getTimeString = (nextChange: Date) => {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric'
  });

  return formatter.format(nextChange);
};

const getWeekdayString = (nextChange: Date) => {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short'
  });

  return formatter.format(nextChange);
};

const addDays = (base: Date, days: number): Date => {
  const newDate = new Date(base);
  newDate.setDate(base.getDate() + days);
  return newDate;
};
