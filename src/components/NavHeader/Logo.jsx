import React from 'react';
import styled from 'styled-components';
import logoSrc from '../../assets/logo192.png';

const StyledLogo = styled.img`
  width: 40px;
`;

function Logo() {
  return <StyledLogo alt="Company logo" src={logoSrc} />;
}

export default Logo;
