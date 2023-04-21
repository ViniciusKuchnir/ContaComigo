import React, { useContext } from "react";
import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import { ThemeContext } from "./contexts/theme";
import { darkTheme, lightTheme } from "./styles/themes";
import RouteNavigators from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import {Toast} from "./components/Toast";

const App = () => {

  const { theme } = useContext(ThemeContext) as Theme;

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <Toast />
        <RouteNavigators />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
