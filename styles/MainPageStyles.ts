import styled from "styled-components";

export const LinkStyle = styled.a`
  color: #000;
  cursor: pointer;
  margin-bottom: 16px;
  margin: auto 0;
`;

export const StyledUL = styled.ul`
  width: 100%;
`;

export const OpearotrWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  @media (max-width: 769px) {
    width: 100px;
  }
`;

export const StyledAddBtn = styled.div`
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
  cursor: pointer;
  padding: 7px;
  margin-left: 16px;
  border-radius: 5px;
`;

export const StyleOperator = styled.li`
  display: flex;
  margin-bottom: 16px;
`;

export const StyledDeleteBtn = styled.button`
  outline: none;
  border: none;
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  cursor: pointer;
  padding: 7px;
  margin-left: 16px;
  border-radius: 5px;
`;
