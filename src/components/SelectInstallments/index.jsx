import React from 'react';
import { useSelector } from 'react-redux';
import { numberToMonetaryString } from '../../utils/stringParser';
import Container from './Container';

function SelectInstallments({
  id,
  label,
  placeholder,
  register,
  validation,
  error,
}) {
  // To refactor later:
  // This component should be dumb and the optionsList received as props
  const { fullPrice, discountAmmount, installments } = useSelector(
    ({ checkoutReducer }) => ({
      fullPrice: checkoutReducer.selectedOffer.data?.fullPrice,
      discountAmmount: checkoutReducer.selectedOffer.data?.discountAmmount,
      installments: checkoutReducer.selectedOffer.data?.installments,
    }),
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

  return (
    <Container>
      <label htmlFor={id}>{label}</label>

      <select id={id} placeholder={placeholder} {...register(id, validation)}>
        {optionsList.map(({ installmentAmount, installmentValue }) => (
          <option value={installmentAmount}>
            {installmentAmount}x de {installmentValue}
          </option>
        ))}
      </select>

      {error && <strong>{error.message || 'Este valor é inválido'}</strong>}
    </Container>
  );
}

export default SelectInstallments;
