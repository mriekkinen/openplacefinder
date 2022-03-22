import styled from 'styled-components';

export const Container = styled.div`
  flex: none;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 300px;
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

  &:hover {
    cursor: pointer;
    background-color: #66BB6A;
  }
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;
  font-family: inherit;
`;

export const GraySpan = styled.span`
  color: #757575;
`;
