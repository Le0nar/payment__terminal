import styled from "styled-components";
import {
  StyledComponentDiv,
  StyledComponentPar,
} from "../types/styled-components";

export const StyledOverlay: StyledComponentDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: auto;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledPopupErrorWindow: StyledComponentDiv = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  background: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 13px;
  display: flex;
`;
export const StyledPopupSuccesWindow: StyledComponentDiv = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  background: #28a745;
  border: 1px solid #28a745;
  border-radius: 13px;
  display: flex;
`;

export const StyledPopupContent: StyledComponentPar = styled.p`
  margin: auto;
  color: #fff;
`;
