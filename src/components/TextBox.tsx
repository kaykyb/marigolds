import React from "react";
import { BaseProps } from "../types/baseProps";
import { allStylesParser, AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { CursorProps } from "../types/cursorProps";
import useStyledSystem from "../core/useStyledSystem";
import { css, cx } from "@emotion/css";
import { extractAllAdjacentProps } from "../types/util";
import { compose, variant } from "styled-system";
import { useTheme } from "./theme/ThemeProvider";
import { useBoolean } from "../utils/useBoolean";

interface StyleProps extends AllStylesProps {
  size?: "small" | "default" | "large";
}

interface TextBoxProps extends BaseProps, StyleProps, AriaProps, CursorProps {
  placeholder?: string;
  disabled?: boolean;
  prefix?: React.ReactNode | string;
  sufix?: React.ReactNode | string;
}

const parser = compose(
  allStylesParser,
  variant({
    prop: "size",
    scale: "textBoxSizes",
  })
);

const TextBox: React.FC<TextBoxProps> = (props: TextBoxProps) => {
  const theme = useTheme();

  const { base, aria, cursor, rest } = extractAllAdjacentProps(props);
  const { disabled, placeholder, prefix, sufix, ...styleProps } = rest;

  const [isHovered, setIsHovered] = useBoolean();
  const [isFocused, setIsFocused] = useBoolean();

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsHovered(true);
    cursor.onMouseEnter && cursor.onMouseEnter(e);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsHovered(false);
    cursor.onMouseLeave && cursor.onMouseLeave(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  const propsStylesClassName = useStyledSystem<StyleProps>(styleProps, parser);

  const baseStylesClassName = css({
    outline: "none",
    borderRadius: theme.radii.default,
    border: theme.borders.thicc,
    borderColor: theme.colors.baseHigh,
    fontFamily: theme.fonts.default,
    fontWeight: theme.fontWeights.bold,
    backgroundColor: theme.colors.baseHigh,
    color: theme.colors.baseText,
    flex: "1",
  });

  const additionalInputStylesClassName = css({
    borderRight: sufix ? "none" : undefined,
    paddingRight: sufix ? 0 : undefined,
    borderTopRightRadius: sufix ? 0 : undefined,
    borderBottomRightRadius: sufix ? 0 : undefined,

    borderLeft: prefix ? "none" : undefined,
    paddingLeft: prefix ? 0 : undefined,
    borderTopLeftRadius: prefix ? 0 : undefined,
    borderBottomLeftRadius: prefix ? 0 : undefined,
  });

  const additionalPrefixStylesClassName = css({
    borderRight: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  });

  const additionalSufixStylesClassName = css({
    borderLeft: "none",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  });

  const hoverStylesClassName = css({
    borderColor: theme.colors.baseMediumHigh,
  });

  const focusStylesClassName = css({
    borderColor: theme.colors.baseMediumLow,
  });

  const disabledStylesClassName = css({
    cursor: "not-allowed",
    opacity: 0.8,
  });

  const outerStylesClassName = css({
    display: "flex",
    flexDirection: "row",
  });

  const prefixStylesClassName = css({
    flex: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  let inputFinalClassName = cx(
    baseStylesClassName,
    propsStylesClassName,
    base.className
  );

  let prefixFinalClassName = cx(inputFinalClassName, prefixStylesClassName);

  if (isHovered) {
    inputFinalClassName = cx(inputFinalClassName, hoverStylesClassName);
    prefixFinalClassName = cx(prefixFinalClassName, hoverStylesClassName);
  }

  if (isFocused) {
    inputFinalClassName = cx(inputFinalClassName, focusStylesClassName);
    prefixFinalClassName = cx(prefixFinalClassName, focusStylesClassName);
  }

  if (disabled) {
    inputFinalClassName = cx(inputFinalClassName, disabledStylesClassName);
    prefixFinalClassName = cx(prefixFinalClassName, disabledStylesClassName);
  }

  return (
    <div
      className={outerStylesClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {prefix && (
        <div
          className={cx(prefixFinalClassName, additionalPrefixStylesClassName)}
        >
          {prefix}
        </div>
      )}
      <input
        type="text"
        {...aria}
        {...cursor}
        {...base}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={placeholder}
        className={cx(inputFinalClassName, additionalInputStylesClassName)}
      />
      {sufix && (
        <div
          className={cx(prefixFinalClassName, additionalSufixStylesClassName)}
        >
          {sufix}
        </div>
      )}
    </div>
  );
};

TextBox.defaultProps = {
  size: "default",
  placeholder: "Ok",
};

export default TextBox;
