import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { theme1, theme2, theme3 } from "./themes/themes";
import { ThemeProvider } from "styled-components";
import { Container } from "./themes/GlobalStyle";
import Calculator from "./components/Calculator/Calculator";
const App = () => {
  return (
    <ThemeProvider theme={theme3}>
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
