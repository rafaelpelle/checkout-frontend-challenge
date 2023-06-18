import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';
import { numberToMonetaryString, formatCPF } from '../../utils/stringParser';
import StarIconSrc from '../../assets/star-icon.svg';

const Container = styled.div`
  margin-bottom: 88px;
  width: 100%;
  padding: 15px 17px 0 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
`;

const GrayContainer = styled.div`
  margin-bottom: 19px;
  padding: 16px 20px 18px 20px;
  border-radius: 15px;
  background-color: ${colors.grayWithoutName1};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  background-color: ${colors.gray2};
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    margin: 11px;
    width: calc(100% - 22px);
    height: calc(100% - 22px);
  }
`;

const OfferContainer = styled.div`
  text-align: end;

  p {
    margin-top: 0;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 24px;
  padding: 0 20px;

  label {
    color: ${colors.gray3};
  }
`;

const separator = '\u00A0\u00A0|\u00A0\u00A0';

function SubscriptionInfo() {
  const selectedOffer = useSelector(
    ({ checkoutReducer }) => checkoutReducer.selectedOffer.data,
  );

  const installments = useSelector(
    ({ checkoutReducer }) => checkoutReducer.subscription.data?.installments,
  );

  const creditCardCPF = useSelector(
    ({ checkoutReducer }) => checkoutReducer.subscription.data?.creditCardCPF,
  );

  if (!selectedOffer) {
    return (
      <Container>
        <p>Não foi possível carregar as informações</p>
      </Container>
    );
  }

  const { title, description, fullPrice, discountAmmount } = selectedOffer;

  const price = fullPrice - discountAmmount;
  const installmentValue = price / installments;

  return (
    <Container>
      <GrayContainer>
        <IconContainer>
          <img src={StarIconSrc} alt="Star icon" />
        </IconContainer>
        <OfferContainer>
          <p>
            {title}
            {separator}
            {description}
          </p>
          <span>
            {numberToMonetaryString(price)}
            {separator}
            {installments}x {numberToMonetaryString(installmentValue)}
          </span>
        </OfferContainer>
      </GrayContainer>

      <Row>
        <label>E-mail</label>
        <span>fulano@ciclano.com.br</span>
      </Row>
      <Row>
        <label>CPF</label>
        <span>{formatCPF(creditCardCPF)}</span>
      </Row>
    </Container>
  );
}

export default SubscriptionInfo;
