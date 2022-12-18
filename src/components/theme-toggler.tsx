import { useContext } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { FiMoon } from "react-icons/fi";

import { ThemeContext } from "../contexts/theme-context";

const ThemeToggler = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div
            className="flex items-center gap-2 border border-gray-300 dark:border-gray-500 px-4 py-2 rounded-full cursor-pointer text-muted-x hover:border-gray-400 dark:hover:border-gray-400 hover:text-muted active:border-gray-300 active:text-muted-x dark:active:border-gray-500 transition-all duration-200"
            onClick={themeContext?.toggleTheme}
        >
            <span className="block first-letter:uppercase">
                {themeContext?.theme}
            </span>

            {themeContext?.theme === "light" ? (
                <SunIcon className="icon" />
            ) : (
                <FiMoon className="icon" />
            )}
        </div>
    );
};

export default ThemeToggler;
