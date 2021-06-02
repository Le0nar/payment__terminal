import React, { useRef, useEffect, useState } from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import {
  StyledInputMoney,
  StyledInputWrapper,
  StyledLabel,
  StyledPrompt,
} from "./../styles/OperatorPageStyles";

interface MoneyInputProps {
  paymentData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  paymentData,
  setPaymentData,
}) => {
  const [isPromptActive, setIsPromptActive] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const inputValue = +input.current.value;
    if (inputValue < 1) input.current.value = "";
    if (inputValue > 1000) input.current.value = "1000";
    if (input.current.value === "") {
      setIsPromptActive(true);
    } else {
      setIsPromptActive(false);
    }
    setPaymentData({ ...paymentData, moneyAmount: +input.current.value });
  };

  useEffect(() => {
    handleChange();
  }, [input]);

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor="moneyAmount">
        Введите суму от 1р до 1000р
      </StyledLabel>
      <StyledInputMoney
        ref={input}
        type="number"
        onChange={handleChange}
        id="moneyAmount"
        defaultValue="250"
      />
      {isPromptActive && <StyledPrompt>Некорректное значение</StyledPrompt>}
    </StyledInputWrapper>
  );
};

export default MoneyInput;
