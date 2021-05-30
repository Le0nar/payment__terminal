import { IOperator } from "./../../interfaces/operator";
import { useEffect, useState } from "react";
import { IPaymentData } from "./../../interfaces/paymentData";
import { MainLayout } from "./../../components/MainLoyout";
import { getOperatorFromID } from "../../utils/operatorsList";
import { useRouter } from "next/router";
import { makePayment } from "../../utils/makePayment";
import PopupWindow from "../../components/PopupWindow";
import { IPopup } from "./../../interfaces/popup";
import { validateTelephone } from "./../../utils/validation";
import PhoneInput from "./../../components/PhoneInput";
import MoneyInput from "../../components/MoneyInput";

const OperatorPage = () => {
  const [operator, setOperator] = useState<IOperator>();
  const [paymnetData, setPaymentData] = useState<IPaymentData>({
    telephone: "",
    moneyAmount: 250,
  });
  const [popup, setPopup] = useState<IPopup>({
    isSuccesPopupActive: false,
    isErrorPopupActive: false,
  });
  const [isPromptActive, setIsPromptActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const isValidTelephone: boolean = validateTelephone(paymnetData.telephone);
    setIsPromptActive(!isValidTelephone);
  }, [paymnetData]);

  useEffect(() => {
    const operatorID: number = +router.query.id;
    const currentOperator: IOperator = getOperatorFromID(operatorID);
    //TODO: if (!currentOperator) redirect + clear storage
    setOperator(currentOperator);
  }, [router]);

  const changePaymentData = (event, key) => {
    let value: string | number;
    key === "telephone"
      ? (value = event.target.value.replace(/\D/g, ""))
      : (value = +event.target.value);
    setPaymentData({ ...paymnetData, [key]: value });
  };

  const checkParameters = () => {
    if (paymnetData.telephone === "") {
      return;
    }
    makePayment(paymnetData, popup, setPopup, router);
  };

  if (!operator) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MainLayout title={`Пополнение средств | ${operator.name}`}>
        {operator.name}
        <PhoneInput
          paymnetData={paymnetData}
          changePaymentData={changePaymentData}
          isPromptActive={isPromptActive}
        />
        <MoneyInput
          paymnetData={paymnetData}
          changePaymentData={changePaymentData}
        />
        <button onClick={checkParameters}>Оплатить</button>
      </MainLayout>
      {popup.isSuccesPopupActive && <PopupWindow isSuccessfulRequest={true} />}
      {popup.isErrorPopupActive && <PopupWindow isSuccessfulRequest={false} />}
    </>
  );
};

export default OperatorPage;
