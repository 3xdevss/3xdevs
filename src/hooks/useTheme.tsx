"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "emerald" | "violet" | "indigo";

interface ThemeContextProps {
  themeMode: ThemeType;
  setThemeMode: (theme: ThemeType) => void;
  tickIndex: number;
  setTickIndex: (index: number) => void;
  isDarkMode: boolean;
  heroTextColor: string;
  secondaryTextColor: string;
  tickActiveColor: string;
  tickInactiveColor: string;
  tickLabelColor: string;
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

  // Dynamic colors based on themeMode and isDarkMode
  const heroTextColor = themeMode === "emerald"
    ? (isDarkMode ? "text-[#abf7da]" : "text-[#2d2c2a]")
    : themeMode === "violet"
    ? (isDarkMode ? "text-[#e9cbf7]" : "text-[#2d2630]")
    : (isDarkMode ? "text-[#cbdbf7]" : "text-[#262a30]");

  const secondaryTextColor = themeMode === "emerald"
    ? (isDarkMode ? "text-emerald-100/70" : "text-emerald-900/70")
    : themeMode === "violet"
    ? (isDarkMode ? "text-purple-100/70" : "text-purple-900/70")
    : (isDarkMode ? "text-indigo-100/70" : "text-indigo-900/70");

  const tickActiveColor = themeMode === "emerald"
    ? (isDarkMode ? "bg-[#abf7da]" : "bg-[#3b7a57]")
    : themeMode === "violet"
    ? (isDarkMode ? "bg-[#e9cbf7]" : "bg-[#8f4cb0]")
    : (isDarkMode ? "bg-[#cbdbf7]" : "bg-[#4c76b0]");

  const tickInactiveColor = isDarkMode
    ? "bg-white/30 hover:bg-white/70"
    : "bg-black/20 hover:bg-black/40";

  const tickLabelColor = themeMode === "emerald"
    ? (isDarkMode ? "text-[#abf7da]" : "text-[#3b7a57]")
    : themeMode === "violet"
    ? (isDarkMode ? "text-[#e9cbf7]" : "text-[#8f4cb0]")
    : (isDarkMode ? "text-[#cbdbf7]" : "text-[#4c76b0]");

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        tickIndex,
        setTickIndex,
        isDarkMode,
        heroTextColor,
        secondaryTextColor,
        tickActiveColor,
        tickInactiveColor,
        tickLabelColor,
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
