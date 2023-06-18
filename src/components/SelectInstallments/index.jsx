import React from 'react';
import Container from './Container';

function SelectInstallments({
  id,
  label,
  placeholder,
  register,
  validation,
  error,
  optionsComponents,
}) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>

      <select id={id} placeholder={placeholder} {...register(id, validation)}>
        {optionsComponents}
      </select>

      {error && <strong>{error.message || 'Este valor é inválido'}</strong>}
    </Container>
  );
}

export default SelectInstallments;
