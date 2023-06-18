import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.gray1};
  transition: all 300ms ease-in-out;
`;

const StyledSpinner = styled.div`
  border: 16px solid ${colors.gray4};
  border-top: 16px solid ${colors.darkBlue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 500ms linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledText = styled.h4`
  color: ${colors.darkBlue};
`;

function Loader() {
  return (
    <StyledContainer>
      <StyledSpinner />
      <StyledText>Carregando...</StyledText>
    </StyledContainer>
  );
}

export default Loader;
