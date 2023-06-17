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
