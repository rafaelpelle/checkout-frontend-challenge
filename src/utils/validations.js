import cardValidator from 'card-validator';
import { validate as validateCPF } from 'gerador-validador-cpf';
import formInputIds from '../constants/formInputIds';

const {
  creditCardNumber,
  creditCardExpirationDate,
  creditCardCVV,
  creditCardHolder,
  creditCardCPF,
  couponCode,
} = formInputIds;

const validations = {
  [creditCardNumber]: {
    required: true,
    validate: (value) =>
      cardValidator.number(value).isPotentiallyValid ||
      'O número do cartão é inválido',
  },
  [creditCardExpirationDate]: {
    required: true,
    validate: (value) =>
      cardValidator.expirationDate(value).isValid ||
      'A data de expiração do cartão é inválida',
  },
  [creditCardCVV]: {
    required: true,
    validate: (value) =>
      cardValidator.cvv(value, 3).isPotentiallyValid ||
      'O CVV do cartão é inválido',
  },
  [creditCardHolder]: {
    required: true,
    validate: (value) =>
      cardValidator.cardholderName(value).isPotentiallyValid ||
      'O nome é inválido',
  },
  [creditCardCPF]: {
    required: true,
    validate: (value) => validateCPF(value) || 'O CPF é inválido',
  },
  [couponCode]: {
    required: false,
  },
};

export default validations;
