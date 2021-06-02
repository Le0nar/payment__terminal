import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import { IPopup } from "./../interfaces/popup";

export function makePayment(
  parameters: IPaymentData,
  popup: IPopup,
  setPopup: Dispatch<SetStateAction<IPopup>>,
  router: NextRouter,
  setIsPromptPhoneActive:(isPromptPhoneActive: boolean) => void
) {
  if (parameters.moneyAmount === 0) return;
  if (parameters.telephone.replace(/\D/g, "").length !== 10) {
    setIsPromptPhoneActive(true)
    return
  };

  const mock = new MockAdapter(axios);

  mock.onPost("/endpoint").replyOnce(200);

  if (Math.random() < 0.5) {
    mock.onGet("/endpoint").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
  }

  axios.post("/endpoint", parameters);
  axios
    .get("/endpoint")
    .then((resp) => {
      showModal(popup, setPopup, true, router);
    })
    .catch((err) => {
      showModal(popup, setPopup, false);
    });
}

export const showModal = (
  popup: IPopup,
  setPopup: Dispatch<SetStateAction<IPopup>>,
  isSuccesRequest: boolean,
  router?: NextRouter
) => {
  if (isSuccesRequest) {
    setPopup({ ...popup, isSuccesPopupActive: true });
    setTimeout(() => {
      setPopup({ ...popup, isSuccesPopupActive: false });
      router.push("/");
    }, 3000);
  } else {
    setPopup({ ...popup, isErrorPopupActive: true });
    setTimeout(() => {
      setPopup({ ...popup, isErrorPopupActive: false });
    }, 3000);
  }
};
