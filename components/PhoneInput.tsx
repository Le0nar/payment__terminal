import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";

interface PhoneInputProps {
  paymnetData: IPaymentData;
  changePaymentData: (event, key) => void;
  isPromptActive: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  paymnetData,
  changePaymentData,
  isPromptActive,
}) => {
  return (
    <div>
      <label htmlFor="telephone">Введите номер телефона</label>
      <input
        type="tel"
        name="phone"
        pattern="[789][0-9]{9}"
        required
        onChange={(e) => changePaymentData(e, "telephone")}
        value={paymnetData.telephone}
        id="telephone"
        placeholder="89992223322"
      />
      {paymnetData.telephone !== "" && isPromptActive && (
        <span>Неверно заполнено поле</span>
      )}
    </div>
  );
};

export default PhoneInput;
