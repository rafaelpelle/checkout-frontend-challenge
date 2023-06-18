import React from 'react';
import { useSelector } from 'react-redux';
import { numberToMonetaryString } from '../utils/stringParser';

export const useInstallmentSelector = () => {
  const fullPrice = useSelector(
    ({ checkoutReducer }) => checkoutReducer.selectedOffer.data?.fullPrice,
  );

  const discountAmmount = useSelector(
    ({ checkoutReducer }) =>
      checkoutReducer.selectedOffer.data?.discountAmmount,
  );

  const installments = useSelector(
    ({ checkoutReducer }) => checkoutReducer.selectedOffer.data?.installments,
  );

  const optionsList = Array.from({ length: installments }, (_, i) => {
    const installmentAmount = i + 1;
    const price = fullPrice - discountAmmount;
    const installmentValue = price / installmentAmount;

    return {
      installmentAmount,
      installmentValue: numberToMonetaryString(installmentValue),
    };
  });

  const optionsComponents = optionsList.map(
    ({ installmentAmount, installmentValue }) => (
      <option value={installmentAmount} key={installmentAmount}>
        {installmentAmount}x de {installmentValue}
      </option>
    ),
  );

  return {
    installments,
    optionsList,
    optionsComponents,
  };
};
