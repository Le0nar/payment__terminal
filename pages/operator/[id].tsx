import { IOperator } from "./../../interfaces/operator";
import { useEffect, useState } from "react";
import { IPaymentData } from "./../../interfaces/paymentData";
import { MainLayout } from "./../../components/MainLoyout";
import { getOperatorFromID } from "../../utils/operatorsList";
import { useRouter } from "next/router";
import { makePayment } from "../../utils/makePayment";
import PopupWindow from "../../components/PopupWindow";
import { IPopup } from "./../../interfaces/popup";
import PhoneInput from "./../../components/PhoneInput";
import MoneyInput from "../../components/MoneyInput";
import { WindowTitle } from "./../../styles/WindowTitleStyles";
import { StyledSendBtn } from "../../styles/OperatorPageStyles";

const OperatorPage = () => {
  const [isPromptPhoneActive, setIsPromptPhoneActive] = useState<boolean>()
  const [operator, setOperator] = useState<IOperator>();
  const [paymentData, setPaymentData] = useState<IPaymentData>({
    telephone: "",
    moneyAmount: 250,
  });
  const [popup, setPopup] = useState<IPopup>({
    isSuccesPopupActive: false,
    isErrorPopupActive: false,
  });

  const router = useRouter();

  useEffect(() => {
    const operatorID: number = +router.query.id;
    const currentOperator: IOperator = getOperatorFromID(operatorID);
    setOperator(currentOperator);
  }, [router]);

  if (!operator) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MainLayout title={`Пополнение средств | ${operator.name}`}>
        <WindowTitle>{operator.name}</WindowTitle>
        <form>
          <PhoneInput
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            isPromptPhoneActive={isPromptPhoneActive}
            setIsPromptPhoneActive={setIsPromptPhoneActive}
          />
          <MoneyInput
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            popup={popup}
            setPopup={setPopup}
            setIsPromptPhoneActive={setIsPromptPhoneActive}
          />
        </form>

        <StyledSendBtn onClick={() => makePayment(paymentData, popup, setPopup, router, setIsPromptPhoneActive)}>Оплатить</StyledSendBtn>
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
