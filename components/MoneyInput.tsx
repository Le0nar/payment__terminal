import React, { useRef, useEffect, useState } from "react";
import { IPaymentData } from "./../interfaces/paymentData";

interface MoneyInputProps {
  paymnetData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  paymnetData,
  setPaymentData,
}) => {
  const [isPromptActive, setIsPromptActive] = useState<boolean>(false)
  const input = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const inputValue = +input.current.value;
    if (inputValue < 1) input.current.value = "";
    if (inputValue > 1000) input.current.value = "1000";
    if (input.current.value === "") {
      setIsPromptActive(true)
    } else {
      setIsPromptActive(false)
    }
    setPaymentData({ ...paymnetData, moneyAmount: +input.current.value });
  };

  useEffect(() => {
    handleChange();

  }, [input]);

  return (
    <div>
      <label htmlFor="moneyAmount">Введите суму от 1р до 1000р</label>
      <input
        ref={input}
        type="number"
        onChange={handleChange}
        id="moneyAmount"
        defaultValue="250"
      />
      {isPromptActive && <span>Некорректное значение</span>}
    </div>
  );
};

export default MoneyInput;
