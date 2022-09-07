import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { atomTheme } from "../utils/atom";
import { darkColor, lightColor } from "../utils/styled";
import { ChoiceTheme } from "./ChoiceTheme";
import { Main } from "./Main";

export const Home = () => {
  const atom = useRecoilValue(atomTheme);
  console.log(atom);
  return (
    <>
      {atom === "" ? (
        <ChoiceTheme />
      ) : (
        <ThemeProvider theme={atom === "dark" ? darkColor : lightColor}>
          <Main />
        </ThemeProvider>
      )}
    </>
  );
};
