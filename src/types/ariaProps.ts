import { AriaAttributes } from "react";

export interface AriaProps {
  ["aria-label"]?: AriaAttributes["aria-label"];
  ["aria-labelledby"]?: AriaAttributes["aria-labelledby"];
  ["aria-describedby"]?: AriaAttributes["aria-describedby"];
  ["aria-controls"]?: AriaAttributes["aria-controls"];
  ["aria-expanded"]?: AriaAttributes["aria-expanded"];
  ["aria-haspopup"]?: AriaAttributes["aria-haspopup"];
  ["aria-hidden"]?: AriaAttributes["aria-hidden"];
  ["aria-live"]?: AriaAttributes["aria-live"];
}

type extractReturnType<T> = {
  aria: AriaProps;
  rest: Pick<T, Exclude<keyof T, keyof AriaProps>>;
};

export const extractAriaProps = <T extends AriaProps>(
  obj: T
): extractReturnType<T> => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-haspopup": ariaHasPopup,
    "aria-hidden": ariaHidden,
    "aria-live": ariaLive,
    ...rest
  } = obj;

  return {
    aria: {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-haspopup": ariaHasPopup,
      "aria-hidden": ariaHidden,
      "aria-live": ariaLive,
    },
    rest,
  };
};
