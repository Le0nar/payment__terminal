import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import { StyledInputWrapper, StyledLabel, StyledInput, StyledPrompt } from './../styles/OperatorPageStyles';

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
  const handleChange = (event) => {
    let value: string = event.target.value.replace(/\D/g, "");
    setPaymentData({ ...paymnetData, telephone: value });
  };

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor="telephone">Введите номер телефона</StyledLabel>
      <StyledInput
        type="tel"
        name="phone"
        pattern="[789][0-9]{9}"
        required
        onChange={handleChange}
        value={paymnetData.telephone}
        id="telephone"
        placeholder="89992223322"
      />
      {paymnetData.telephone !== "" && isPromptActive && (
        <StyledPrompt>Неверно заполнено поле</StyledPrompt>
      )}
    </StyledInputWrapper>
  );
};

export default PhoneInput;
