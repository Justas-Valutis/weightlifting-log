import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const light = "#FFFAF0";
    const dark = "black";

    const [theme, setTheme] = useState(dark);

    const setThemeLight = () => {
        setTheme(light);
    }
    const setThemeDark = () => {
        setTheme(dark);
    }

    const isDark = theme === dark;

    return (
        <ThemeContext.Provider value={{ theme, isDark, setThemeLight, setThemeDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

