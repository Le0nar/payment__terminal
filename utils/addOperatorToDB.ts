import axios  from 'axios';

export const addOperatorToDataBase = (name) => {
  axios({
    method: "post",
    url: "http://localhost:4300/operators",
    headers: {},
    data: {
      name: name,
    },
  });
};
