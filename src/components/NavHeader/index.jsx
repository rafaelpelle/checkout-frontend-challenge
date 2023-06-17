import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import BackButton from '../BackButton';
import sizes from '../../constants/sizes';
import breakpoints from '../../constants/screenBreakpoints';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.headerHeight};
  padding: 0 68px;

  @media only screen and (max-width: ${breakpoints.lg}) {
    padding: 0 32px;
  }
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
