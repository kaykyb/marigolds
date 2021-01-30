import { buildTheme } from "./default";
import { ThemeColorsType } from "./types";

const lightColors: ThemeColorsType = {
  // Base palette
  base: "#ffffff",

  baseHigh: "#e6e6e6",
  baseMediumHigh: "#cccccc",
  baseMediumLow: "#999999",
  baseLow: "#666666",

  baseText: "#000000",

  // Accent palette
  accent: "#2949FF",

  accentHigh: "#2440E0",
  accentMediumHigh: "#1A2EA1",
  accentMediumLow: "#111F6B",
  accentLow: "#0C154A",

  accentText: "#ffffff",
};

export const LIGHT_THEME = buildTheme(lightColors);
