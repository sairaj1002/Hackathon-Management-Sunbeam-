import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import STORAGE_KEYS from "../constants/storage";
import THEME from "../constants/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    if (
      savedTheme === THEME.LIGHT ||
      savedTheme === THEME.DARK
    ) {
      return savedTheme;
    }

    return THEME.LIGHT;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDarkTheme = theme === THEME.DARK;

    // Adds/removes the "dark" class from the <html> element
    document.documentElement.classList.toggle(
      "dark",
      isDarkTheme
    );

    // Helps browser controls follow the selected theme
    document.documentElement.style.colorScheme = isDarkTheme
      ? "dark"
      : "light";

    // Saves selected theme after refresh
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEME.DARK
        ? THEME.LIGHT
        : THEME.DARK
    );
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === THEME.DARK,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};