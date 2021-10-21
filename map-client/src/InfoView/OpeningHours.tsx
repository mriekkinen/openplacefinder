import React from 'react';
import styled from 'styled-components';

import { Poi } from '../types';
import { splitValue } from '../utils';

interface Props {
  poi: Poi
}

const OpeningHours = ({ poi }: Props) => {
  const openingHours = poi.tags['opening_hours'];

  // TODO: We may print "(unknown)" twice!
  if (openingHours === undefined) {
    return <div>(unknown)</div>;
  }

  return (
    <div>
      <List>
        {splitValue(openingHours).map((row, index) =>
          <li key={`${index}-${row}`}>{row}</li>
        )}
      </List>
    </div>
  );
};

const List = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-position: inside;
  padding-inline-start: 0;
`;

export default OpeningHours;
