import { css, cx } from "@emotion/css";
import { styleFn } from "@styled-system/core";
import { allStylesParser, AllStylesProps } from "../types/allStylesProps";
import { useTheme } from "@emotion/react";

export default function useStyledSystem<T = AllStylesProps>(
  styleProps: T,
  styleParser: styleFn = allStylesParser
): string {
  const theme = useTheme();

  const styles = styleParser({ ...styleProps, theme });

  const classNameForStyleProps = css(styles);

  return cx(classNameForStyleProps);
}
