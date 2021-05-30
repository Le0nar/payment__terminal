import React from "react";
import { IPaymentData } from "./../interfaces/paymentData";

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
    <div>
      <label htmlFor="telephone">Введите номер телефона</label>
      <input
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
        <span>Неверно заполнено поле</span>
      )}
    </div>
  );
};

export default PhoneInput;
