import { useState } from "react";
import Link from "next/link";
import { IOperator } from "./../interfaces/operator";
import { addOperatorToDataBase } from './../utils/addOperatorToDB';

const MianPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [operatorsList, setOpearatorsList] = useState<IOperator[]>([
    { name: "МТС", id: 1 },
    { name: "Билайн", id: 2 },
    { name: "Мегафон", id: 3 },
  ]);
  const addOpearator = (): void => {
    if (inputValue === "") {
      return;
    }
    const operator: IOperator = {
      name: inputValue,
      id: operatorsList.length + 1,
    };
    setOpearatorsList([...operatorsList, operator]);
    addOperatorToDataBase(inputValue)
  };


  
  return (
    <div>
      <h1>Выберите оператора</h1>
      <ul>
        {operatorsList.map((el) => (
          <li key={el.id}>
            <Link href="/">{el.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div onClick={addOpearator}>+++</div>
      </div>
    </div>
  );
};

export default MianPage;
