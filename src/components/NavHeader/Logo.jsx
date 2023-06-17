import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 40px;
`;

function Logo() {
  return <StyledLogo alt="Company logo" src="/logo192.png" />;
}

export default Logo;
