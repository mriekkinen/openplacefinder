import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

interface SearchBoxProps {
  query: string;
  handleQueryChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ query, handleQueryChange }: SearchBoxProps) => {
  return (
    <SearchDiv>
      <SearchIcon />
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        placeholder='Search categories...'
        autoFocus />
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid hsl(0, 0%, 50%);
  border-radius: 30px;
  padding: 5px 10px;

  &:hover {
    border: 1px solid #1976D2;
    outline: #1976D2 solid 1px;
  }
`;

const SearchIcon = styled(MdSearch)`
  flex: none;
  width: 1.5em;
  height: 1.5em;
  color: hsl(0, 0%, 50%);
`;

const SearchInput = styled.input`
  flex: 1;
  margin: 0 5px;
  border: none;
  outline: none;
`;
