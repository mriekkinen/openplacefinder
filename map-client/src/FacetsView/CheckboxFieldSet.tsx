import React, { useState } from 'react';

import { sortByCount } from '../search';
import CheckboxField from './CheckboxField';
import MoreLessBtn from './MoreLessBtn';
import { Facet } from './styles';

const MORE_LESS_THRESHOLD = 10;

interface Props {
  legend: string;
  counts: Map<string, number>;
  getLabel: (value: string) => string;
  isChecked: (value: string) => boolean;
  handleChange: (value: string) => React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxFieldSet = (
  { legend, counts, getLabel, isChecked, handleChange }: Props
) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Choose all values that have a non-zero count and sort
  const values = sortByCount(counts);

  // Apply the "Show more/less" filter
  const visibleValues = showAll
    ? values
    : values.slice(0, MORE_LESS_THRESHOLD);

  return (
    <Facet>
      <fieldset>
        <legend>{legend}</legend>
        {visibleValues.map(value =>
          <CheckboxField
            key={value}
            label={getLabel(value)}
            count={counts.get(value)}
            isChecked={isChecked(value)}
            handleChange={handleChange(value)}
          />
        )}
        {values.length > MORE_LESS_THRESHOLD &&
          <MoreLessBtn
            showAll={showAll}
            toggle={() => setShowAll(!showAll)}
          />
        }
      </fieldset>
    </Facet>
  );
};

export default CheckboxFieldSet;
