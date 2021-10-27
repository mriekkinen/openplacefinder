import styled from 'styled-components';

export const Container = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: hsl(0, 0%, 97%);
  border-top: 1px solid hsl(0, 0%, 80%);
  border-bottom: 1px solid hsl(0, 0%, 80%);
`;

export const Header = styled.h4`
  flex: none;
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

export const Item = styled.div`
  flex: auto;
  max-width: 300px;
  margin-left: 10px;
  line-height: 1.25;
`;
