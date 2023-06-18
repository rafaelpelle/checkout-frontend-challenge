import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import validations from '../../utils/validations';
import { useInstallmentSelector } from '../../hooks/useInstallmentSelector';
import formInputIds from '../../constants/formInputIds';
import PaymentMethodsImg from '../../components/PaymentMethodsImg';
import InputField from '../../components/InputField';
import SelectInstallments from '../../components/SelectInstallments';
import ContentPanel from './ContentPanel';

const {
  creditCardNumber,
  creditCardExpirationDate,
  creditCardCVV,
  creditCardHolder,
  creditCardCPF,
  couponCode,
  installments,
} = formInputIds;

const Title = styled.h4`
  margin-bottom: 9px;
`;

const Subtitle = styled.p`
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpirationCVVColumn = styled.div`
  max-width: 140px;
`;

function LeftPanel() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const { optionsComponents } = useInstallmentSelector();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ContentPanel>
      <Title>Estamos quase lá!</Title>
      <Subtitle>Insira seus dados de pagamento abaixo:</Subtitle>
      <PaymentMethodsImg />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Número do cartão"
          id={creditCardNumber}
          placeholder="0000 0000 0000 0000"
          register={register}
          error={formState.errors[creditCardNumber]}
          validation={validations[creditCardNumber]}
        />
        <Row>
          <ExpirationCVVColumn>
            <InputField
              label="Validade"
              id={creditCardExpirationDate}
              placeholder="MM/AA"
              register={register}
              error={formState.errors[creditCardExpirationDate]}
              validation={validations[creditCardExpirationDate]}
            />
          </ExpirationCVVColumn>
          <ExpirationCVVColumn>
            <InputField
              label="CVV"
              id={creditCardCVV}
              placeholder="000"
              register={register}
              error={formState.errors[creditCardCVV]}
              validation={validations[creditCardCVV]}
            />
          </ExpirationCVVColumn>
        </Row>
        <InputField
          label="Nome impresso no cartão"
          id={creditCardHolder}
          placeholder="Seu nome"
          register={register}
          error={formState.errors[creditCardHolder]}
          validation={validations[creditCardHolder]}
        />
        <InputField
          label="CPF"
          id={creditCardCPF}
          placeholder="000.000.000-00"
          register={register}
          error={formState.errors[creditCardCPF]}
          validation={validations[creditCardCPF]}
        />
        <InputField
          label="Cupom"
          id={couponCode}
          placeholder="Insira aqui"
          register={register}
          error={formState.errors[couponCode]}
          validation={validations[couponCode]}
        />
        {optionsComponents?.length > 0 && (
          <SelectInstallments
            label="Número de parcelas"
            id={installments}
            placeholder="Selecionar"
            register={register}
            error={formState.errors[installments]}
            validation={validations[installments]}
            optionsComponents={optionsComponents}
          />
        )}

        <button type="submit">submit</button>
      </form>
    </ContentPanel>
  );
}

export default LeftPanel;