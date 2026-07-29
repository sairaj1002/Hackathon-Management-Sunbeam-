import { createContext, useEffect, useMemo, useState } from "react";

import STORAGE_KEYS from "../constants/storage";
import THEME from "../constants/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    if (savedTheme) {
      return savedTheme;
    }

    return THEME.SYSTEM;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  /*
   * Apply Theme
   */
  useEffect(() => {
    let activeTheme = theme;

    if (theme === THEME.SYSTEM) {
      activeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEME.DARK
        : THEME.LIGHT;
    }

    document.documentElement.classList.toggle(
      "dark",
      activeTheme === THEME.DARK
    );

    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  /*
   * Toggle Theme
   */
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  /*
   * Context Value
   */
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};