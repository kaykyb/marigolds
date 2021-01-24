import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  compose,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  space,
} from "styled-system";
import { ThemeType } from "../core/theming/types";

export type AllStylesProps = SpaceProps<ThemeType> &
  ColorProps<ThemeType> &
  TypographyProps<ThemeType> &
  LayoutProps<ThemeType> &
  FlexboxProps<ThemeType> &
  BackgroundProps<ThemeType> &
  BorderProps<ThemeType> &
  PositionProps<ThemeType> &
  ShadowProps<ThemeType>;

export const allStylesParser = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow
);
