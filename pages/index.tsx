import { useEffect, useState } from "react";
import Link from "next/link";
import { IOperator } from "./../interfaces/operator";
import { MainLayout } from "./../components/MainLoyout";
import {
  getOperatorsList,
  initialOperatorsList,
  addOperatorToLocalStorage,
} from "../utils/operatorsList";
import { LinkStyle, StyledUL, StyledInput, OpearotrWrapper, StyledAddBtn } from "../styles/MainPageStyles";
import { WindowTitle } from './../styles/WindowTitleStyles';

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
      <WindowTitle>Выберите оператора</WindowTitle>
      <StyledUL>
        {operatorsList.map((el) => (
          <li key={el.id}>
            <Link href={`/operator/[id]`} as={`/operator/${el.id}`}>
              <LinkStyle>{el.name}</LinkStyle>
              
            </Link>
          </li>
        ))}
      </StyledUL>
      <OpearotrWrapper>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Название"
        />
        <StyledAddBtn onClick={addOpearator}>Добавить</StyledAddBtn>
      </OpearotrWrapper>
    </MainLayout>
  );
};

export default MianPage;
