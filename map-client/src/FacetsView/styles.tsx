import styled from 'styled-components';

export const Container = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0 5px 5px 5px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const Header = styled.div`
  margin: 10px 10px 0 10px;
  font-weight: 600;
`;

export const Facet = styled.div`
  margin: 10px;
  line-height: 1.25;
`;

export const Button = styled.button`
  width: 7rem;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 3px;
`;

export const GraySpan = styled.span`
  color: #757575;
`;
