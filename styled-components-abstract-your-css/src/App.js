import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./Components/UI/themes";

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
