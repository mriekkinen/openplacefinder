import React from 'react';
import styled from 'styled-components';

import { parseSortOption, SortOption } from '../state';

interface Props {
  sortBy: SortOption;
  setSortBy: (s: SortOption) => void;
}

const ListHeaderSort = ({ sortBy, setSortBy }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSortBy(parseSortOption(e.target.value));
  };

  const SelectSortCriterion = () => {
    return (
      <select value={sortBy} onChange={handleChange}>
        <option value='distance'>Distance</option>
        <option value='category'>Category</option>
        <option value='name'>Name</option>
      </select>
    );
  };

  return (
    <Header>
      Sort by <SelectSortCriterion />
    </Header>
  );
};

const Header = styled.div`
  padding: 5px 10px;
  background-color: #F5F5F5;
  border-bottom: 1px solid hsl(0, 0%, 80%);
`;

export default ListHeaderSort;
