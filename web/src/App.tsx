import React, { useContext } from "react";
import GlobalStyle from './styles/global';
import Login from "./views/Login";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import { ThemeContext } from "./contexts/theme";
import { darkTheme, lightTheme } from "./styles/themes";

const App = () => {

  const { theme } = useContext(ThemeContext) as Theme;

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <Login />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
