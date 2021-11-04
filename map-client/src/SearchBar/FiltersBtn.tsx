import React from 'react';
import styled from 'styled-components';
import { VscSettings } from 'react-icons/vsc';

import { showFilters, useAppDispatch, useAppSelector } from '../state';

const FiltersBtn = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.ui.filtersVisible);

  const handleClick = () => {
    dispatch(showFilters(!status));
  };

  return (
    <Button onClick={handleClick}>
      <Icon />
      <span>&nbsp;Filters</span>
    </Button>
  );
};

const Button = styled.button`
  box-sizing: border-box;
  min-height: 38px;
  padding: 5px 7px;
  color: hsl(0, 0%, 20%);
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Icon = styled(VscSettings)`
  width: 1.5em;
  height: 1.5em;
  padding: 2px 0;
  color: hsl(0, 0%, 50%);
`;

export default FiltersBtn;
