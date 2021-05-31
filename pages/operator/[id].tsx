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
import { WindowTitle } from "./../../styles/WindowTitleStyles";
import { StyledSendBtn } from "../../styles/OperatorPageStyles";

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
  const [isPhonePromptActive, setPhoneIsPromptActive] =
    useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const isValidTelephone: boolean = validateTelephone(paymnetData.telephone);
    setPhoneIsPromptActive(!isValidTelephone);
  }, [paymnetData]);

  useEffect(() => {
    const operatorID: number = +router.query.id;
    const currentOperator: IOperator = getOperatorFromID(operatorID);
    setOperator(currentOperator);
  }, [router]);

  const checkParameters = () => {
    if (isPhonePromptActive || paymnetData.moneyAmount === 0) {
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
        <WindowTitle>{operator.name}</WindowTitle>
        <PhoneInput
          paymnetData={paymnetData}
          setPaymentData={setPaymentData}
          isPromptActive={isPhonePromptActive}
        />
        <MoneyInput paymnetData={paymnetData} setPaymentData={setPaymentData} />
        <StyledSendBtn onClick={checkParameters}>Оплатить</StyledSendBtn>
        {popup.isSuccesPopupActive && (
          <PopupWindow isSuccessfulRequest={true} />
        )}
        {popup.isErrorPopupActive && (
          <PopupWindow isSuccessfulRequest={false} />
        )}
      </MainLayout>
    </>
  );
};

export default OperatorPage;
