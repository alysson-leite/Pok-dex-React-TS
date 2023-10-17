import React, { useState, ReactNode  } from "react";
import { ThemeContext } from './ThemeContext'

export const themes = {
    light: {
        color: '#222222',
        background: '#FFF'
    },
    dark: {
        color: '#FFF',
        background: '#222222'
    }
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children }) => {
    const [ theme, setTheme ] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}