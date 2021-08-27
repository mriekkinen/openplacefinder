import React from 'react';
import styled from 'styled-components';
import opening_hours from 'opening_hours';

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
          <li key={`hours-${index}`}>{row}</li>
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
    const isOpen = isOpenNow(openingHours);
    const text = isOpen ? 'open' : 'closed';

    return (
      <>
        Now:&nbsp;
        <OpenStateText isOpen={isOpen}>
          {text}
        </OpenStateText>
      </>
    );
  } catch (e) {
    // console.log('opening_hours exception:', e);
    return <span>Invalid opening_hours: {e}</span>;
  }
};

export const isOpenNow = (openingHours: string): boolean => {
  // TODO: Handle public and school holidays correctly (set the country code)
  const oh = new opening_hours(openingHours, null);
  const now = new Date();
  return oh.getState(now);
};

interface OpenStateTextProps {
  readonly isOpen: boolean;
}

const OpenStateText = styled.span<OpenStateTextProps>`
  color: ${props => props.isOpen ? 'green' : 'red'};
`;
