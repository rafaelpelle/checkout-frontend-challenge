import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import BackButton from '../BackButton';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 31px 68px;
`;

function NavHeader() {
  return (
    <StyledHeader>
      <BackButton />
      <Logo />
      <div />
      {/* this empty div is only a easy way to align the BackButton and Logo */}
    </StyledHeader>
  );
}

export default NavHeader;
