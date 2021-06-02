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
  const [paymentData, setPaymentData] = useState<IPaymentData>({
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
    const isValidTelephone: boolean = validateTelephone(paymentData.telephone);
    setPhoneIsPromptActive(!isValidTelephone);
  }, [paymentData]);

  useEffect(() => {
    const operatorID: number = +router.query.id;
    const currentOperator: IOperator = getOperatorFromID(operatorID);
    setOperator(currentOperator);
  }, [router]);

  const checkParameters = () => {
    if (isPhonePromptActive || paymentData.moneyAmount === 0) {
      return;
    }
    makePayment(paymentData, popup, setPopup, router);
  };

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
            isPromptActive={isPhonePromptActive}
          />
          <MoneyInput
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            popup={popup}
            setPopup={setPopup}
          />
        </form>

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
