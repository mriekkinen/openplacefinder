import React from 'react';

interface Props {
  phone: string | undefined;
}

const Phone = ({ phone }: Props) => {
  if (phone === undefined) {
    return <div>(unknown)</div>;
  }

  return (
    <div>
      {phone}
    </div>
  );
};

export default Phone;
