import React from 'react';
import styled from 'styled-components';

import { SearchParams } from '../params';
import { Poi } from "../types";

interface Props {
  params: SearchParams;
  data: Poi[];
  filteredData: Poi[];
}

const ListHeader = ({ params, data, filteredData }: Props) => {
  const handleClick = () => {
    params.facets = {};
    params.commit();
  };

  if (filteredData.length === data.length) {
    const res = data.length === 1 ? 'result' : 'results';
    return (
      <Header>
        Found {data.length} {res}
      </Header>
    );
  }

  return (
    <Header>
      Showing {filteredData.length} of {data.length} results&nbsp;
      <button onClick={handleClick}>Show all</button>
    </Header>
  );
};

const Header = styled.div`
  padding: 5px 10px;
  background-color: #BBDEFB;
  border-bottom: 1px solid hsl(0, 0%, 80%);
`;

export default ListHeader;
