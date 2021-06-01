import {
  DefaultTheme,
  GlobalStyleComponent,
  StyledComponent,
} from "styled-components";

export type StyledGlobalStyleComponent = GlobalStyleComponent<{}, DefaultTheme>;
export type StyledComponentDiv = StyledComponent<"div", any, {}, never>;
export type StyledComponentLink = StyledComponent<"a", any, {}, never>;
export type StyledComponentUl = StyledComponent<"ul", any, {}, never>;
export type StyledComponentInput = StyledComponent<"input", any, {}, never>;
export type StyledComponentLi = StyledComponent<"li", any, {}, never>;
export type StyledComponentLButton = StyledComponent<"button", any, {}, never>;
export type StyledComponentLabel = StyledComponent<"label", any, {}, never>;
export type StyledComponentSpan = StyledComponent<"span", any, {}, never>;
export type StyledComponentPar = StyledComponent<"p", any, {}, never>;
export type StyledComponentTitle = StyledComponent<"h1", any, {}, never>;
