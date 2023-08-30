import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./Components/UI/themes";
import { ButtonTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <GlobalStyle />
      <ButtonTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </ButtonTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
