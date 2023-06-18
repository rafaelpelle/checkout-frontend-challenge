export const numberToMonetaryString = (number) => {
  if (number === null || number === undefined) {
    return '';
  }

  const decimalString = number.toFixed(2);
  const replaced = decimalString.replace('.', ',');
  return `R$ ${replaced}`;
};

export const numberToPercentage = (number) => {
  if (number === null || number === undefined) {
    return '';
  }

  return `${number * 100}%`;
};

export const formatCPF = (cpf) => {
  const sanitized = cpf.replace(/[^\d]/g, '');
  return sanitized.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
