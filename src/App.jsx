import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { theme1, theme2, theme3 } from "./themes/themes";
import { ThemeProvider } from "styled-components";
import { Container } from "./themes/GlobalStyle";
import Calculator from "./components/Calculator/Calculator";
import { useSelector } from "react-redux";
const App = () => {
  const theme = useSelector((state) => state.themeReducer.theme);

  const getTheme = () => {
    switch (theme) {
      case "theme1":
        return theme1;
      case "theme2":
        return theme2;
      case "theme3":
        return theme3;
      default:
        return theme1;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <>
        <GlobalStyle />
        <Container>
          <Calculator />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
