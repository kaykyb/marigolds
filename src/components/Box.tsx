import React from "react";
import { BaseProps } from "../types/baseProps";
import { AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { CursorProps } from "../types/cursorProps";
import useStyledSystem from "../core/useStyledSystem";
import { cx } from "@emotion/css";
import { extractAllAdjacentProps } from "../types/util";
import Emoji from "./Emoji";

export interface BoxProps
  extends BaseProps,
    AllStylesProps,
    AriaProps,
    CursorProps {
  as?:
    | "div"
    | "span"
    | "section"
    | "main"
    | "nav"
    | "header"
    | "footer"
    | "aside"
    | "article"
    | "address"
    | "hgroup"
    | "blockquote"
    | "figure"
    | "figcaption"
    | "ol"
    | "ul"
    | "li"
    | "pre";

  children?: React.ReactNode | string;
}

const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const { base, aria, cursor, rest } = extractAllAdjacentProps(props);
  const { as: Component = "div", children, ...styleProps } = rest;

  const classNameForStyleProps = useStyledSystem<AllStylesProps>(styleProps);

  return (
    <Component
      {...aria}
      {...cursor}
      {...base}
      className={cx(classNameForStyleProps, base.className)}
    >
      {children}
    </Component>
  );
};

Box.defaultProps = {
  borderRadius: "default",
};

export default Box;
