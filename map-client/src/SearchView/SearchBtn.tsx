import React from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { VscLoading } from 'react-icons/vsc';

import { Status } from '../state';

interface Props {
  status: Status;
  handleClick: () => void;
}

const SearchBtn = ({ status, handleClick }: Props) => {
  return (
    <Button
      type='button'
      onClick={handleClick}
      disabled={status === 'loading'}>
      <Content>
        {status !== 'loading'
          ? <GoSearch />
          : <VscLoading />
        }
      </Content>
    </Button>
  );
};

const Button = styled.button`
  height: 100%;
  margin-left: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchBtn;
