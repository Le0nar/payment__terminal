import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { IPopup } from "../interfaces/popup";
import { makePayment } from "../utils/makePayment";
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
  popup: IPopup;
  setPopup: (popup: IPopup) => void;
  setIsPromptPhoneActive:(isPromptPhoneActive: boolean) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  paymentData,
  setPaymentData,
  popup,
  setPopup,
  setIsPromptPhoneActive
}) => {
  const [isPromptActive, setIsPromptActive] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);

  const router = useRouter();

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

  const makePaymentOnKeyDown = (event): void => {
    if (input.current.value === "") return;

    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      makePayment(paymentData, popup, setPopup, router, setIsPromptPhoneActive);
    }
  };

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
        onKeyDown={makePaymentOnKeyDown}
      />
      {isPromptActive && <StyledPrompt>Некорректное значение</StyledPrompt>}
    </StyledInputWrapper>
  );
};

export default MoneyInput;
