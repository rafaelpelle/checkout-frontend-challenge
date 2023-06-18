import React from 'react';
import styled from 'styled-components';
import paymendMethodsImgSrc from '../../assets/payment-methods.png';

const StyledImg = styled.img`
  display: block;
  margin: 30px auto;
  width: 215px;
  height: 50px;
`;

function PaymentMethodsImg() {
  return <StyledImg alt="Payment methods" src={paymendMethodsImgSrc} />;
}

export default PaymentMethodsImg;
