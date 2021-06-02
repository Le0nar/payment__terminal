import { IPaymentData } from "../interfaces/paymentData";
import { StyledInput } from "../styles/OperatorPageStyles";

interface PhoneMaskProps {
  paymentData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
}

const PhoneMask = ({setPaymentData, paymentData}: PhoneMaskProps) => {
  const handleChange = (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    setPaymentData({ ...paymentData, telephone: e.target.value});
  };

  return (
    <StyledInput
      placeholder="(999) 999 99 99"
      onChange={handleChange}
      type="tel"
    />
  );
};

export default PhoneMask;
