import React from 'react';
import styled from 'styled-components';
import { VscSettings } from 'react-icons/vsc';

import {
  FacetState,
  showFilters,
  useAppDispatch, useAppSelector
} from '../state';

type FacetCounts = Required<{
  [Property in keyof FacetState]: number;
}> & {
  total: number;
};

interface Props {
  facets: FacetState;
  isDisabled: boolean;
}

const FiltersBtn = ({ facets, isDisabled }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.ui.filtersVisible);

  const handleClick = () => {
    dispatch(showFilters(!status));
  };

  const countFacets = (f: FacetState): FacetCounts => {
    const counts: Omit<FacetCounts, 'total'> = {
      name: f.name ? 1 : 0,
      openingHours: f.openingHours? 1 : 0,
      openNow: f.openNow ? 1 : 0,
      lunch: f.lunch ? 1 : 0,
      cuisines: f.cuisines ? f.cuisines.size : 0,
      categories: f.categories ? f.categories.size : 0
    };

    const total = Object.values(counts).reduce((sum, x) => sum + x, 0);

    return {
      ...counts,
      total
    };
  };

  const counts = countFacets(facets);

  const totalSpan = counts.total !== 0
    ? <>&nbsp;<FilterCount>{counts.total}</FilterCount></>
    : null;

  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}>
      <Icon />
      <span>&nbsp;Filter{totalSpan}</span>
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

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(VscSettings)`
  width: 1.5em;
  height: 1.5em;
  padding: 2px 0;
  color: hsl(0, 0%, 50%);
`;

const FilterCount = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.15em;
  height: 1.15em;
  border-radius: 50%;
  color: white;
  background-color: #1976D2;
`;

export default FiltersBtn;
