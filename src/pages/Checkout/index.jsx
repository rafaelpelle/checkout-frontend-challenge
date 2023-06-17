import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { dataFetchRequested } from '../../actionCreators/checkout';
import UserTag from '../../components/UserTag';
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

  h4 {
    margin-bottom: 6px;
  }
`;

const OfferList = styled.div`
  margin: 30px 0;
`;

function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetchRequested());
  }, [dispatch]);

  return (
    <PageContainer>
      <SidePanel>
        <h1>TO-DO</h1>
      </SidePanel>
      <SidePanel>
        <h4>Confira o seu plano:</h4>
        <UserTag>fulano@ciclano.com.br</UserTag>

        <OfferList></OfferList>
      </SidePanel>
    </PageContainer>
  );
}

export default CheckoutPage;
