import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectOffer } from '../../actionCreators/checkout';
import UserTag from '../../components/UserTag';
import OfferItem from '../../components/OfferItem';
import status from '../../constants/status';
import questionIconSrc from '../../assets/question-mark-icon.svg';
import ContentPanel from './ContentPanel';

const OfferList = styled.div`
  margin: 30px 0;
`;

const Title = styled.h4`
  margin-bottom: 6px;
`;

function RightPanel() {
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

  return (
    <ContentPanel>
      <Title>Confira o seu plano:</Title>
      <UserTag>fulano@ciclano.com.br</UserTag>

      {offerStatus === status.success && (
        <React.Fragment>
          <OfferList>
            {offerData.map((item) => {
              const isChecked = selectedOffer?.id === item.id;
              return (
                <OfferItem
                  key={item.id}
                  item={item}
                  checked={isChecked}
                  onClick={() => {
                    if (!isChecked) {
                      dispatch(selectOffer(item));
                    }
                  }}
                />
              );
            })}
          </OfferList>

          <span className="question-text">
            Sobre a cobrança <img src={questionIconSrc} alt="Question icon" />
          </span>
        </React.Fragment>
      )}

      {offerStatus === status.error && (
        <p>
          Houve um problema e não foi possível carregar os planos disponíveis
        </p>
      )}
    </ContentPanel>
  );
}

export default RightPanel;
