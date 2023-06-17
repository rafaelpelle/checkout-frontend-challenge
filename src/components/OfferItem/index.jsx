import React from 'react';
import Container from './Container';
import DiscountBadge from './DiscountBadge';
import {
  numberToMonetaryString,
  numberToPercentage,
} from '../../utils/stringParser';

const separator = '\u00A0\u00A0|\u00A0\u00A0';

function OfferItem({ item, checked, onClick }) {
  const {
    id,
    title,
    description,
    fullPrice,
    installments,
    discountAmmount,
    discountPercentage,
  } = item;

  const price = fullPrice - discountAmmount;
  const installmentValue = price / installments;

  return (
    <Container onClick={onClick}>
      <label htmlFor={id}>
        <strong>
          {title}
          {separator}
          {description}
        </strong>
        <span>
          De {numberToMonetaryString(fullPrice)}
          {separator}
          Por {numberToMonetaryString(price)}
        </span>
        <small>
          {
            installments > 1
              ? `${installments}x de ${numberToMonetaryString(
                  installmentValue,
                )}/mês`
              : '\u00A0' /* Empty space, to keep Container with the same height even when theres no installments */
          }
        </small>
      </label>
      <DiscountBadge htmlFor={id}>
        -{numberToPercentage(discountPercentage)}
      </DiscountBadge>
      <input type="radio" value={id} id={id} checked={checked} />
    </Container>
  );
}

export default OfferItem;
