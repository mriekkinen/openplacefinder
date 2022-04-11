import React from 'react';

import { GraySpan } from './styles';

interface Props {
  category: string;
  label: string;
  count: number | undefined;
  isChecked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Category = ({ category, label, count, isChecked, handleChange }: Props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={category}
          checked={isChecked}
          onChange={handleChange} />
        {label} <Count count={count} />
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

export default Category;
