import React from 'react';
import styled from 'styled-components';
import PaymentMethodsImg from '../../components/PaymentMethodsImg';
import ContentPanel from './ContentPanel';

const Title = styled.h4`
  margin-bottom: 9px;
`;

const Subtitle = styled.p`
  margin: 0;
`;

function LeftPanel() {
  return (
    <ContentPanel>
      <Title>Estamos quase lá!</Title>
      <Subtitle>Insira seus dados de pagamento abaixo:</Subtitle>
      <PaymentMethodsImg />
    </ContentPanel>
  );
}

export default LeftPanel;
