import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";

interface MoneyInputProps {
  paymnetData: IPaymentData;
  changePaymentData: (event, key) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  paymnetData,
  changePaymentData,
}) => {
  return (
    <div>
      <label htmlFor="moneyAmount">Введите суму от 1р до 1000р</label>
      <input
        type="number"
        onChange={(e) => changePaymentData(e, "moneyAmount")}
        value={paymnetData.moneyAmount}
        id="moneyAmount"
        placeholder="250"
      />
    </div>
  );
};

export default MoneyInput;
