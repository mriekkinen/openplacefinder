import React from 'react';

import { GraySpan } from './styles';

interface Props {
  cuisine: string;
  count: number | undefined;
  isChecked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Cuisine = ({ cuisine, count, isChecked, handleChange }: Props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={cuisine}
          checked={isChecked}
          onChange={handleChange} />
        {cuisine} <Count count={count} />
      </label>
    </div>
  );
};

interface CountProps {
  count: number | undefined;
}

const Count = ({ count }: CountProps) => {
  if (count === undefined) return null;
  return (
    <GraySpan>{count}</GraySpan>
  );
};

export default Cuisine;
