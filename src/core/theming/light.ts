import { buildTheme } from "./default";
import { ThemeColorsType } from "./types";
import { hsl } from "./util";

const lightColors: ThemeColorsType = {
  baseHigh: hsl(0, 0, 100),
  baseMedium: hsl(0, 0, 90),
  baseLow: hsl(0, 0, 80),

  baseText: hsl(0, 0, 0),

  accentHigh: hsl(231, 84, 63),
  accentMedium: hsl(231, 84, 42),
  accentLow: hsl(231, 84, 29),

  accentText: hsl(0, 0, 100),
};

export const LIGHT_THEME = buildTheme(lightColors);
