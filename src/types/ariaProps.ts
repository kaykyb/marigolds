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
