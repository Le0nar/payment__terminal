import { useEffect, useState } from "react";
import Link from "next/link";
import { IOperator } from "./../interfaces/operator";
import { MainLayout } from "./../components/MainLoyout";
import {
  getOperatorsList,
  initialOperatorsList,
  addOperatorToLocalStorage,
} from "../utils/operatorsList";

const MianPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [operatorsList, setOpearatorsList] =
    useState<IOperator[]>(initialOperatorsList);

  useEffect(() => {
    setOpearatorsList(getOperatorsList());
  }, []);

  const addOpearator = (): void => {
    if (inputValue === "") {
      return;
    }
    const operator: IOperator = {
      name: inputValue,
      id: operatorsList.length + 1,
    };
    setOpearatorsList([...operatorsList, operator]);
    setInputValue("");
    addOperatorToLocalStorage(operator);
  };

  return (
    <MainLayout>
      <h1>Выберите оператора</h1>
      <ul>
        {operatorsList.map((el) => (
          <li key={el.id}>
            <Link href={`/operator/[id]`} as={`/operator/${el.id}`}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить оператора"
        />
        <div onClick={addOpearator}>+++</div>
      </div>
    </MainLayout>
  );
};

export default MianPage;
