import React, { Children, createContext, useState } from 'react';
import { Theme } from '../types/theme';

type Props = {
    children: React.ReactNode;
}

export const ThemeContext = createContext<Theme | {}>({});

const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;