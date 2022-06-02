import React from 'react';
import styled from 'styled-components';

interface CountProps {
  n: number;
  maxResults: number;
  query: string;
}

export const ResultCount = ({ n, maxResults, query }: CountProps) => {
  if (query === '') {
    return <div style={{ height: 10 }}></div>;
  }

  return (
    <CountDiv>
      <b>{n <= maxResults ? n : `${maxResults}+`}</b> categories
    </CountDiv>
  );
};

const CountDiv = styled.div`
  margin: 5px 0;
  color: #757575;
`;
