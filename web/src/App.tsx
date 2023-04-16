import React, { useContext } from "react";
import GlobalStyle from './styles/global';
import Cadastro from "./views/Cadastro";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import { ThemeContext } from "./contexts/theme";
import { darkTheme, lightTheme } from "./styles/themes";

const App = () => {

  const { theme } = useContext(ThemeContext) as Theme;

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <Cadastro />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
