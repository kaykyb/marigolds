import {
  ThemeBordersType,
  ThemeBorderWidthsType,
  ThemeBreakpointsType,
  ThemeButtonVariantType,
  ThemeColorsType,
  ThemeFontSizesType,
  ThemeFontsType,
  ThemeFontWeightsType,
  ThemeRadiiType,
  ThemeSizeVariantType,
  ThemeSpaceType,
  ThemeType,
} from "./types";

const space: ThemeSpaceType = [0, 4, 8, 16, 32, 64, 128, 256];

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
  default: `${borderWidths.default} solid ${colors.baseMediumHigh}`,
  thicc: `${borderWidths.thicc} solid ${colors.baseMediumHigh}`,
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

const textBoxSizes: ThemeSizeVariantType = {
  small: {
    height: 28,
    fontSize: fontSizes[2],
    paddingLeft: space[2],
    paddingRight: space[2],
  },
  default: {
    height: 32,
    fontSize: fontSizes[3],
    paddingLeft: space[2],
    paddingRight: space[2],
  },
  large: {
    height: 36,
    fontSize: fontSizes[3],
    paddingLeft: space[2],
    paddingRight: space[2],
  },
};

const buttonVariants = (colors: ThemeColorsType): ThemeButtonVariantType => ({
  default: {
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    boxShadow: `inset 0 0 0 ${borderWidths.thicc} ${colors.accentMediumHigh}`,
    color: colors.accentMediumHigh,
    "&:hover": {
      color: colors.accentLow,
      boxShadow: `inset 0 0 0 ${borderWidths.thicc} ${colors.accentLow}`,
    },
  },
  primary: {
    outline: "none",
    border: "none",
    backgroundColor: colors.accentMediumHigh,
    color: colors.accentText,
    "&:hover": {
      backgroundColor: colors.accentLow,
    },
  },
});

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
  buttonVariants: buttonVariants(colors),
  textBoxSizes,
});
