import { useState, createContext, ReactNode } from "react";

import useAudio from "../hooks/useAudio";

import { getItem, setItem } from "../lib/local-storage";

type ThemeProviderProps = {
    children: ReactNode;
};

interface ThemeContextInterface {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const currentTheme = getItem("movi-theme"); // theme in local storage

    const [theme, setTheme] = useState(currentTheme || "dark");

    const [play] = useAudio("toggle");

    const toggleTheme = (): void => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setItem("movi-theme", newTheme); // set new theme in local storage
        play(); // play the toggle sound
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
