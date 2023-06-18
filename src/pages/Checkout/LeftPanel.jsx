import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { subscriptionRequested } from '../../actionCreators/checkout';
import { useInstallmentSelector } from '../../hooks/useInstallmentSelector';
import colors from '../../constants/colors';
import validations from '../../utils/validations';
import formInputIds from '../../constants/formInputIds';
import PaymentMethodsImg from '../../components/PaymentMethodsImg';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
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

const ErrorText = styled.p`
  color: ${colors.red};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

function LeftPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { offerId, optionsComponents } = useInstallmentSelector();

  const { register, handleSubmit, formState, setValue } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    dispatch(subscriptionRequested({ ...data, offerId }, navigate));
  };

  useEffect(() => {
    setValue(installments, optionsComponents[0]?.props?.value);
  }, [offerId, optionsComponents, setValue]);

  const subscriptionError = useSelector(
    ({ checkoutReducer }) => checkoutReducer.subscription.error,
  );

  const shouldRenderInstallments = optionsComponents?.length > 0;
  const disableButton = !shouldRenderInstallments || !formState.isValid;

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

        <Button type="submit" disabled={disableButton}>
          Finalizar pagamento
        </Button>
        <ErrorText>{subscriptionError}</ErrorText>
      </form>
    </ContentPanel>
  );
}

export default LeftPanel;
