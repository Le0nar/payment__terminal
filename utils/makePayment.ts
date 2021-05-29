import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export function makePayment(parameters) {
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
    })
    .catch((err) => {
      console.log("нет ответа");
    });
}
