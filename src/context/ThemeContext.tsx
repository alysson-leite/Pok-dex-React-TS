import { createContext, Dispatch, SetStateAction, useContext  } from "react";

interface Theme {
    color: string;
    background: string;
}

interface ThemeContextProps {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}