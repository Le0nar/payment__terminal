import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledPrompt,
  StyledInputContainer
} from "./../styles/OperatorPageStyles";
import PhoneMask from "./PhoneMask";

interface PhoneInputProps {
  paymentData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
  isPromptActive: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  paymentData,
  setPaymentData,
  isPromptActive,
}) => {
  return (
    <StyledInputWrapper>
      <StyledInputContainer>
        <StyledLabel htmlFor="telephone">Введите номер телефона</StyledLabel>
        <div>
          <span>+7</span>
          <PhoneMask
            setPaymentData={setPaymentData}
            paymentData={paymentData}
            isPromptActive={isPromptActive}
          />
        </div>
      </StyledInputContainer>

      {paymentData.telephone !== "" && isPromptActive && (
        <StyledPrompt>Неверно заполнено поле</StyledPrompt>
      )}
    </StyledInputWrapper>
  );
};

export default PhoneInput;
