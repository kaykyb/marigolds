import { AriaProps, extractAriaProps } from "./ariaProps";
import { BaseProps, extractBaseProps } from "./baseProps";
import { CursorProps, extractCursorProps } from "./cursorProps";

export const extractAllAdjacentProps = <
  T extends BaseProps & AriaProps & CursorProps
>(
  obj: T
) => {
  const { base, rest: restBase } = extractBaseProps(obj);
  const { aria, rest: restAria } = extractAriaProps(restBase);
  const { cursor, rest } = extractCursorProps(restAria);

  return { base, aria, cursor, rest };
};
