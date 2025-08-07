import React, { createContext, useState, useEffect, useContext } from "react";

/**
 * ThemeContext - Provides theme mode and color definitions across the app.
 * Allows all modules/shell/components to access and update the current theme.
 * Supports light/dark mode, brand primary/secondary/accent color, and custom user themes.
 */

// PUBLIC_INTERFACE
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  colors: {
    primary: "#1a73e8",
    secondary: "#2d2d2d",
    accent: "#ff9800"
  }
});

// PUBLIC_INTERFACE
export function ThemeProvider({ children, initialTheme }) {
  // Read initial mode (from localStorage or system preference)
  const getInitialTheme = () => {
    if (initialTheme) return initialTheme;
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = window.localStorage.getItem("dashboard-theme");
      if (stored) return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Brand colors defined centrally here
  const colorDefs = {
    primary: "#1a73e8",
    secondary: "#2d2d2d",
    accent: "#ff9800"
  };

  // Effect: set css [data-theme], persist, and set variables
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("dashboard-theme", theme);
    }
    // Also ensure brand colors are always setup as CSS vars
    Object.entries(colorDefs).forEach(([k, v]) => {
      document.documentElement.style.setProperty(`--kavia-${k}`, v);
    });
    document.documentElement.style.setProperty("--accent", colorDefs.accent);
  }, [theme]);

  // PUBLIC_INTERFACE
  const switchTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value = {
    theme,
    setTheme,
    switchTheme,
    colors: colorDefs
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useTheme() {
  return useContext(ThemeContext);
}
