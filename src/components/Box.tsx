import React from "react";
import { BaseProps } from "../types/baseProps";
import { AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { CursorProps } from "../types/cursorProps";
import useStyledSystem from "../core/useStyledSystem";
import { cx } from "@emotion/css";

interface BoxProps extends BaseProps, AllStylesProps, AriaProps, CursorProps {
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

const Box = (props: BoxProps) => {
  const {
    as: Component = "div",
    id,
    children,
    className,
    style,
    tabIndex,
    role,
    onClick,
    onMouseEnter,
    onMouseLeave,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-haspopup": ariaHasPopup,
    "aria-hidden": ariaHidden,
    "aria-live": ariaLive,
    ...styleProps
  } = props;

  const classNameForStyleProps = useStyledSystem<AllStylesProps>(styleProps);

  return (
    <Component
      id={id}
      className={cx(classNameForStyleProps, className)}
      style={style}
      tabIndex={tabIndex}
      role={role}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      aria-hidden={ariaHidden}
      aria-live={ariaLive}
    >
      {children}
    </Component>
  );
};

export default Box;
