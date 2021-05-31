import { IOperator } from "./../interfaces/operator";

export const initialOperatorsList: IOperator[] = [
  {
    name: "МТС",
    id: 1,
  },
  {
    name: "Билайн",
    id: 2,
  },
  {
    name: "Мегафон",
    id: 3,
  },
];

export const getOperatorsList = (): IOperator[] => {
  if (localStorage.getItem("operatorsList") !== null) {
    return JSON.parse(localStorage.getItem("operatorsList"));
  } else if (localStorage.getItem("operatorsList") === null) {
    localStorage.setItem("operatorsList", JSON.stringify(initialOperatorsList));
    return initialOperatorsList;
  }
};

export const addOperatorToLocalStorage = (operator: IOperator): void => {
  const operatorsList: IOperator[] = JSON.parse(
    localStorage.getItem("operatorsList")
  );
  operatorsList.push(operator);
  localStorage.setItem("operatorsList", JSON.stringify(operatorsList));
};

export const deleteOperatorToLocalStorage = (
  operator: IOperator,
  setOpearatorsList
): void => {
  const operatorsList: IOperator[] = JSON.parse(
    localStorage.getItem("operatorsList")
  );
  const element = operatorsList.find((el) => el.id === operator.id);
  const index = operatorsList.indexOf(element);
  operatorsList.splice(index, 1);
  setOpearatorsList(operatorsList);
  localStorage.setItem("operatorsList", JSON.stringify(operatorsList));
};

export const getOperatorFromID = (id: number): IOperator => {
  const operatorsList: IOperator[] = getOperatorsList();
  const currentOperator: IOperator = operatorsList.find((el) => el.id === id);
  return currentOperator;
};
