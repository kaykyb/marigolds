import React from "react";
import { BaseProps } from "../types/baseProps";
import { allStylesParser, AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { CursorProps } from "../types/cursorProps";
import useStyledSystem from "../core/useStyledSystem";
import { cx } from "@emotion/css";
import { extractAllAdjacentProps } from "../types/util";
import { compose, variant } from "styled-system";

interface StyleProps extends AllStylesProps {
  size?: "small" | "default" | "large";
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
  })
);

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { base, aria, cursor, rest } = extractAllAdjacentProps(props);
  const { href, disabled, children, ...styleProps } = rest;

  const classNameForStyleProps = useStyledSystem<StyleProps>(
    styleProps,
    parser,
    {
      "&:not(:disabled)": {
        cursor: "pointer",
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.8,
      },
    }
  );

  return (
    <button
      {...aria}
      {...cursor}
      {...base}
      disabled={disabled}
      className={cx(classNameForStyleProps, base.className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  border: "none",
  borderRadius: "default",
  backgroundColor: "baseMedium",
  fontFamily: "default",
  fontWeight: "bold",
  size: "default",
};

export default Button;
