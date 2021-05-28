import { NextRouter, useRouter } from "next/router";
import { IOperator } from "./../../interfaces/operator";

const OperatorPage = ({ operator }) => {
  const router: NextRouter = useRouter();

  if (!operator) {
    return <p>Loading...</p>;
  }

  return <div>{operator.name}</div>;
};

export default OperatorPage;

OperatorPage.getInitialProps = async ({ query, req }) => {
  const response = await fetch(`http://localhost:4300/operators/${query.id}`);
  const operator: IOperator = await response.json();
  return {
    operator,
  };
};
