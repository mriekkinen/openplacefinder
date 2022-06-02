import React from 'react';

import { GraySpan } from './styles';

interface Props {
  label: string;
  count: number | undefined;
  isChecked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxField = ({ label, count, isChecked, handleChange }: Props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
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

export default CheckboxField;
