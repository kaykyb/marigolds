import React from "react";
import { BaseProps } from "../types/baseProps";
import { allStylesParser, AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { CursorProps } from "../types/cursorProps";
import useStyledSystem from "../core/useStyledSystem";
import { css, cx } from "@emotion/css";
import { extractAllAdjacentProps } from "../types/util";
import { compose, variant } from "styled-system";

interface StyleProps extends AllStylesProps {
  size?: "small" | "default" | "large";
  variant?: "default" | "primary";
}

interface ButtonProps extends BaseProps, StyleProps, AriaProps, CursorProps {
  href?: string;
  disabled?: boolean;

  children?: React.ReactNode | string;
}

const parser = compose(
  allStylesParser,
  variant({
    prop: "size",
    scale: "buttonSizes",
  }),
  variant({
    prop: "variant",
    scale: "buttonVariants",
  })
);

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { base, aria, cursor, rest } = extractAllAdjacentProps(props);
  const { href, disabled, children, ...styleProps } = rest;

  const propsStylesClassName = useStyledSystem<StyleProps>(styleProps, parser);

  const baseStylesClassName = css({
    "&:not(:disabled)": {
      cursor: "pointer",
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.8,
    },
  });

  return (
    <button
      {...aria}
      {...cursor}
      {...base}
      disabled={disabled}
      className={cx(baseStylesClassName, propsStylesClassName, base.className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  borderRadius: "default",
  fontFamily: "default",
  fontWeight: "bold",
  size: "default",
  variant: "default",
};

export default Button;
