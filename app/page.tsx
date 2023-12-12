"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <div>심심스 토이프로젝트 1조</div>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
