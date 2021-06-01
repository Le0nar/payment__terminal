import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { ITheme } from "./../interfaces/theme";
import { StyledGlobalStyleComponent } from "../types/styled-components";

const GlobalStyle: StyledGlobalStyleComponent = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  li {
    list-style-type: none;
   }
`;

const theme: ITheme = {
  colors: {
    primary: "#545454",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
