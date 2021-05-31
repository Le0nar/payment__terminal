import { useEffect, useState } from "react";
import Link from "next/link";
import { IOperator } from "./../interfaces/operator";
import { MainLayout } from "./../components/MainLoyout";
import {
  getOperatorsList,
  initialOperatorsList,
  addOperatorToLocalStorage,
  deleteOperatorToLocalStorage,
} from "../utils/operatorsList";
import {
  LinkStyle,
  StyledUL,
  StyledInput,
  OpearotrWrapper,
  StyledAddBtn,
  StyleOperator,
} from "../styles/MainPageStyles";
import { WindowTitle } from "./../styles/WindowTitleStyles";
import { StyledDeleteBtn } from "./../styles/MainPageStyles";

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
      isRemovable: true,
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
          <StyleOperator key={el.id}>
            <Link href={`/operator/[id]`} as={`/operator/${el.id}`}>
              <LinkStyle>{el.name}</LinkStyle>
            </Link>
            {el.isRemovable && (
              <StyledDeleteBtn
                onClick={() =>
                  deleteOperatorToLocalStorage(el, setOpearatorsList)
                }
              >
                Удалить
              </StyledDeleteBtn>
            )}
          </StyleOperator>
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
