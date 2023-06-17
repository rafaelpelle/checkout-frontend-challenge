import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { dataFetchRequested, selectOffer } from '../../actionCreators/checkout';
import UserTag from '../../components/UserTag';
import OfferItem from '../../components/OfferItem';
import breakpoints from '../../constants/screenBreakpoints';
import sizes from '../../constants/sizes';
import status from '../../constants/status';
import questionIconSrc from '../../assets/question-mark-icon.svg';

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

  .question-text {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 12px;
    }
  }
`;

const OfferList = styled.div`
  margin: 30px 0;
`;

function CheckoutPage() {
  const dispatch = useDispatch();

  const offerStatus = useSelector(
    ({ checkoutReducer }) => checkoutReducer.offers.status,
  );

  const offerData = useSelector(
    ({ checkoutReducer }) => checkoutReducer.offers.data,
  );

  const selectedOffer = useSelector(
    ({ checkoutReducer }) => checkoutReducer.selectedOffer.data,
  );

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

        {offerStatus === status.success && (
          <React.Fragment>
            <OfferList>
              {offerData.map((item) => (
                <OfferItem
                  key={item.id}
                  item={item}
                  checked={selectedOffer?.id === item.id}
                  onClick={() => {
                    dispatch(selectOffer(item));
                  }}
                />
              ))}
            </OfferList>

            <span className="question-text">
              Sobre a cobrança <img src={questionIconSrc} alt="Question icon" />{' '}
            </span>
          </React.Fragment>
        )}

        {offerStatus === status.error && (
          <p>
            Houve um problema e não foi possível carregar os planos disponíveis
          </p>
        )}
      </SidePanel>
    </PageContainer>
  );
}

export default CheckoutPage;
