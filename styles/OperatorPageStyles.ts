import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  padding-right: 16px;
  color: #000;
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
`;

export const StyledInputMoney = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  width: 170px;
`;

export const StyledPrompt = styled.span`
  color: red;
`;

export const StyledSendBtn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
  padding: 7px;
  border-radius: 5px;
`;
