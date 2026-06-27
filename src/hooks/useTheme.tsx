"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "emerald" | "violet" | "indigo";

interface ThemeContextProps {
  themeMode: ThemeType;
  setThemeMode: (theme: ThemeType) => void;
  tickIndex: number;
  setTickIndex: (index: number) => void;
  isDarkMode: boolean;
  hasSynced: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeType>("emerald");
  const [tickIndex, setTickIndexState] = useState<number>(6);
  const [hasSynced, setHasSynced] = useState(false);

  const isDarkMode = tickIndex >= 6;

  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeMode") as ThemeType;
    if (savedTheme) {
      setThemeModeState(savedTheme);
    }
    const savedTickIndex = localStorage.getItem("tickIndex");
    if (savedTickIndex) {
      setTickIndexState(parseInt(savedTickIndex, 10));
    }
    setHasSynced(true);
  }, []);

  // Update classes and localStorage when themeMode changes
  useEffect(() => {
    if (!hasSynced) return;
    document.body.classList.remove("theme-emerald", "theme-violet", "theme-indigo");
    document.body.classList.add(`theme-${themeMode}`);
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode, hasSynced]);

  // Update classes and localStorage when light/dark mode (tickIndex) changes
  useEffect(() => {
    if (!hasSynced) return;
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("tickIndex", String(tickIndex));
  }, [tickIndex, isDarkMode, hasSynced]);

  const setThemeMode = (theme: ThemeType) => {
    setThemeModeState(theme);
  };

  const setTickIndex = (index: number) => {
    setTickIndexState(index);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        tickIndex,
        setTickIndex,
        isDarkMode,
        hasSynced,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
