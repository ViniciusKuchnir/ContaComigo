import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider, { ThemeContext } from './contexts/theme'
import { UserProvider } from "./contexts/user";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
)
