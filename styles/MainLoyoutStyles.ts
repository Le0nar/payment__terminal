import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 100vh;
  display: flex;
`;

export const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};

  width: 500px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 16px;
`;