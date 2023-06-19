import React from 'react';
import styled from 'styled-components';
import leftChevronIconSrc from '../../assets/left-chevron-icon.svg';
import { Link } from 'react-router-dom';

const StyledBackButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

function BackButton() {
  return (
    <StyledBackButton>
      <Link to="/">
        <img src={leftChevronIconSrc} alt="Back icon" />
      </Link>
    </StyledBackButton>
  );
}

export default BackButton;
