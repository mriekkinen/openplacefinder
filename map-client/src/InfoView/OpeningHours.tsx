import React from 'react';
import styled from 'styled-components';
import opening_hours from 'opening_hours';

import { Poi } from '../types';
import { splitValue } from '../utils';
import { Country } from '../state';
import { getOpeningHours } from '../search';
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

interface OpenStateWrapperProps {
  poi: Poi,
  country: Country | undefined,
  now: Date
}

export const OpenStateWrapper = (
  { poi, country, now }: OpenStateWrapperProps
) => {
  try {
    const oh = getOpeningHours(poi, country);

    return <OpenState oh={oh} now={now} />
  } catch (e) {
    return <span>Invalid opening hours: {e}</span>;
  }
};

interface OpenStateProps {
  oh: opening_hours | undefined,
  now: Date
}

export const OpenState = ({ oh, now }: OpenStateProps) => {
  if (oh === undefined) {
    return null;
  }

  try {
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
