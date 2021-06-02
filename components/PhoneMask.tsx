import { IPaymentData } from "../interfaces/paymentData";
import { StyledInput } from "../styles/OperatorPageStyles";


interface PhoneMaskProps {
  paymentData: IPaymentData;
  setPaymentData: (paymentData: IPaymentData) => void;
  isPromptActive: boolean,
}

const PhoneMask = ({setPaymentData, paymentData, isPromptActive}: PhoneMaskProps) => {
  const handleChange = (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    setPaymentData({ ...paymentData, telephone: e.target.value});
  };

  const changeFocus = (event): void => {
    if (isPromptActive || paymentData.telephone === "") return
    
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      const form = event.target.form;
      form.elements[1].focus();
    }
  }

  return (
    <StyledInput
      placeholder="(999) 999 99 99"
      onChange={handleChange}
      type="tel"
      onKeyDown={changeFocus}
    />
  );
};

export default PhoneMask;
