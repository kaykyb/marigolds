import { CSSInterpolation } from "@emotion/css";

export type ThemeColorsType = {
  // Base palette
  base: string;

  baseHigh: string;
  baseMediumHigh: string;
  baseMediumLow: string;
  baseLow: string;

  baseText: string;

  // Accent palette
  accent: string;

  accentHigh: string;
  accentMediumHigh: string;
  accentMediumLow: string;
  accentLow: string;

  accentText: string;
};

export type ThemeSpaceType = number[];
export type ThemeBreakpointsType = string[];

export type ThemeFontsType = {
  default: string;
  monospace: string;
};

export type ThemeFontSizesType = string[];

export type ThemeFontWeightsType = {
  default: number;
  bold: number;
};

export type ThemeBorderWidthsType = {
  none: string;
  default: string;
  thicc: string;
};

export type ThemeBordersType = {
  none: string;
  default: string;
  thicc: string;
};

export type ThemeRadiiType = {
  none: number;
  default: number;
  noticeable: number;
  circle: number;
};

export type ThemeSizeVariantType = {
  small: CSSInterpolation;
  default: CSSInterpolation;
  large: CSSInterpolation;
};

export type ThemeButtonVariantType = {
  default: CSSInterpolation;
  primary: CSSInterpolation;
};

export type AgnosticThemeType = {
  space: ThemeSpaceType;
  breakpoints: ThemeBreakpointsType;
  fonts: ThemeFontsType;
  fontSizes: ThemeFontSizesType;
  fontWeights: ThemeFontWeightsType;
  borderWidths: ThemeBorderWidthsType;
  borders: ThemeBordersType;
  radii: ThemeRadiiType;
  buttonSizes: ThemeSizeVariantType;
  buttonVariants: ThemeButtonVariantType;
  textBoxSizes: ThemeSizeVariantType;
};

export type ColorThemeType = {
  colors: ThemeColorsType;
};

export type ThemeType = ColorThemeType & AgnosticThemeType;
