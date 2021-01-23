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
} from "styled-system";

export type AllStylesProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

export const allStylesParser = compose(
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow
);
