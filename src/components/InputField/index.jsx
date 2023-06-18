import React from 'react';
import InputMask from 'react-input-mask';
import masks from '../../constants/inputMasks';
import Container from './Container';

function InputField({ id, label, register, validation, error, ...rest }) {
  const inputProps = {
    id,
    type: 'text',
    ...rest,
    ...register(id, validation),
  };

  const mask = masks[id];

  return (
    <Container>
      <label htmlFor={id}>{label}</label>

      {mask ? (
        <InputMask mask={mask} {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}

      {error && <strong>{error.message || 'Este valor é inválido'}</strong>}
    </Container>
  );
}

export default InputField;
