import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';
import SubscriptionInfo from './SubscriptionInfo';
import Button from '../../components/Button';
import colors from '../../constants/colors';
import CheckIconSrc from '../../assets/check-icon.svg';

const Title = styled.h4`
  margin-top: 18px;
  margin-bottom: 11px;
`;

const Subtitle = styled.h5`
  margin-top: 0;
  margin-bottom: 56px;
  color: ${colors.gray3};
  text-align: center;
  max-width: 192px;
`;

const Link = styled.strong`
  color: ${colors.darkBlue};
  font-size: 12px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  max-width: 310px;
  width: 100%;
  margin-top: 24px;

  button {
    font-weight: 700;
  }
`;

const Icon = styled.img``;

function SuccessPage() {
  return (
    <PageContainer>
      <Icon alt="Check icon" src={CheckIconSrc} />
      <Title>Parabéns!</Title>
      <Subtitle>Sua assinatura foi realizada com sucesso.</Subtitle>
      <SubscriptionInfo />
      <Link>Gerenciar assinatura</Link>
      <ButtonContainer>
        <Button>IR PARA A HOME</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default SuccessPage;
