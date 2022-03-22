import React from 'react';
import styled from 'styled-components';
import { ScaleLoader } from 'react-spinners';

const LoadingView = () => {
  return (
    <LoadingBackground>
      <LoadingIndicator>
        <ScaleLoader color='#9B9B9B' />
        <LoadingText>Loading...</LoadingText>
      </LoadingIndicator>
    </LoadingBackground>
  );
};

const LoadingBackground = styled.div`
  position: absolute;
  inset: -1px 0 0 0;
  padding: 0;
  margin: 0;
  z-index: 1000000;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicator = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  flex: none;
  margin-top: 15px;
  color: #9B9B9B;
  user-select: none;
`;

export default LoadingView;
