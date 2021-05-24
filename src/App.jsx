import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { theme1, theme2, theme3 } from "./themes/themes";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme1}>
      <>
        <GlobalStyle />
        <h1>Calculator App</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
