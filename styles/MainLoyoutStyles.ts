import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;
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
  padding: 16px 32px;

  @media (max-width: 769px) {
    width: 300px;
  }
`;