import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledPrompt,
} from "./../styles/OperatorPageStyles";
import InputMask from "react-input-mask";

interface PhoneInputProps {
  paymnetData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
  isPromptActive: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  paymnetData,
  setPaymentData,
  isPromptActive,
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor="telephone">Введите номер телефона</StyledLabel>
      <InputMask
        mask="+7 (999) 999-99-99"
        value={paymnetData.telephone}
        onChange={(event) => setPaymentData({ ...paymnetData, telephone: event.target.value })}
      />
      {paymnetData.telephone !== "" && isPromptActive && (
        <StyledPrompt>Неверно заполнено поле</StyledPrompt>
      )}
    </StyledInputWrapper>
  );
};

export default PhoneInput;
