import { useState } from "react";
import Link from "next/link";
import { IOperator } from "./../interfaces/operator";
import { addOperatorToDataBase } from './../utils/addOperatorToDB';

const MianPage = ({operators}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [operatorsList, setOpearatorsList] = useState<IOperator[]>([...operators]);
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
            <Link href={`/operator/[id]`} as={`/operator/${el.id}`}>{el.name}</Link>
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

export async function getServerSideProps({query, req}) {
  const response = await fetch("http://localhost:4300/operators");
  const operators = await response.json();

  return {props: {operators}}
  
}