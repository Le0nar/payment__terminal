import styled from "styled-components";
import {
  StyledComponentDiv,
  StyledComponentLabel,
  StyledComponentInput,
  StyledComponentSpan,
  StyledComponentLButton,
} from "../types/styled-components";

export const StyledInputWrapper: StyledComponentDiv = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledLabel: StyledComponentLabel = styled.label`
  padding-right: 16px;
  color: #000;
`;

export const StyledInput: StyledComponentInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
`;

export const StyledInputMoney: StyledComponentInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  width: 170px;
`;

export const StyledPrompt: StyledComponentSpan = styled.span`
  color: red;
`;

export const StyledSendBtn: StyledComponentLButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
  padding: 7px;
  border-radius: 5px;
`;
