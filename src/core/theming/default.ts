import {
  ThemeBordersType,
  ThemeBorderWidthsType,
  ThemeBreakpointsType,
  ThemeColorsType,
  ThemeFontSizesType,
  ThemeFontsType,
  ThemeFontWeightsType,
  ThemeRadiiType,
  ThemeSizeVariantType,
  ThemeSpaceType,
  ThemeType,
} from "./types";

const space: ThemeSpaceType = [0, 4, 8, 16, 32, 64, 128];

const breakpoints: ThemeBreakpointsType = ["40em", "52em", "64em"];

const fonts: ThemeFontsType = {
  default:
    "Lato, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  monospace: "Menlo, Courier, monospace",
};

const fontSizes: ThemeFontSizesType = [
  "9px",
  "11px",
  "13px",
  "15px",
  "17px",
  "19px",
  "21px",
  "23px",
  "27px",
  "35px",
];

const fontWeights: ThemeFontWeightsType = {
  default: 400,
  bold: 700,
};

const borderWidths: ThemeBorderWidthsType = {
  none: "0",
  default: "1px",
  thicc: "2px",
};

const borders = (colors: ThemeColorsType): ThemeBordersType => ({
  none: "none",
  default: `${borderWidths.default} solid ${colors.baseMedium}`,
  thicc: `${borderWidths.thicc} solid ${colors.baseMedium}`,
});

const radii: ThemeRadiiType = {
  none: 0,
  default: 4,
  noticeable: 8,
  circle: 9999,
};

const buttonSizes: ThemeSizeVariantType = {
  small: {
    height: 28,
    fontSize: fontSizes[2],
    paddingLeft: space[3],
    paddingRight: space[3],
  },
  default: {
    height: 32,
    fontSize: fontSizes[3],
    paddingLeft: space[3],
    paddingRight: space[3],
  },
  large: {
    height: 36,
    fontSize: fontSizes[3],
    paddingLeft: space[4],
    paddingRight: space[4],
  },
};

export const buildTheme = (colors: ThemeColorsType): ThemeType => ({
  colors,
  space,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  borderWidths,
  borders: borders(colors),
  radii,
  buttonSizes,
});
