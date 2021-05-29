import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Dispatch, SetStateAction } from "react";
import { IPaymentData } from "./../interfaces/paymentData";
import { IPopup } from "./../interfaces/popup";

export function makePayment(
  parameters: IPaymentData,
  popup: IPopup,
  setPopup: Dispatch<SetStateAction<IPopup>>
) {
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
      console.log(resp.data);
      showModal(popup, setPopup, true);
    })
    .catch((err) => {
      console.log("нет ответа");
      showModal(popup, setPopup, false);
    });
}

export const showModal = (
  popup: IPopup,
  setPopup: Dispatch<SetStateAction<IPopup>>,
  isSuccesRequest: boolean
) => {
  if (isSuccesRequest) {
    setPopup({ ...popup, isSuccesPopupActive: true });
    setTimeout(() => {
      setPopup({ ...popup, isSuccesPopupActive: false });
      // TODO: redirect to main page
    }, 3000);
  } else {
    setPopup({ ...popup, isErrorPopupActive: true });
    setTimeout(() => {
      setPopup({ ...popup, isErrorPopupActive: false });
    }, 3000);
  }
};
