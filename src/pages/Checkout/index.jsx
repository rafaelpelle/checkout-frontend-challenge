import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/screenBreakpoints';
import sizes from '../../constants/sizes';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-height: calc(100vh - ${sizes.headerHeight});
  width: 100vw;

  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const SidePanel = styled.div`
  width: 100%;
  max-width: 330px;
`;

function CheckoutPage() {
  return (
    <PageContainer>
      <SidePanel>
        <h1>CheckoutPage</h1>
      </SidePanel>
      <SidePanel>
        <h1>CheckoutPage</h1>
      </SidePanel>
    </PageContainer>
  );
}

export default CheckoutPage;
