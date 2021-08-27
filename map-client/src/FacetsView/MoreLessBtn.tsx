import React from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';

import { TextButton } from './styles';

interface Props {
  showAll: boolean;
  toggle: () => void;
}

const MoreLessBtn = ({ showAll, toggle }: Props) => {
  const text = showAll ? 'Show less' : 'Show more';
  const icon = showAll ? <MdExpandLess /> : <MdExpandMore />;

  return (
    <Button
      onClick={toggle}>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Button>
  );
};

const Button = styled(TextButton)`
  display: flex;
  align-items: start;
  margin-left: 0;
  padding-left: 0.1em;
`;

const Text = styled.span`
  flex: 1 1 auto;
  text-decoration: underline;

  ${Button}:hover & {
    text-decoration: none;
  }
`;

const Icon = styled.div`
  flex: none;
  display: flex;
  align-items: start;
  font-size: 1.2em;
`;

export default MoreLessBtn;
