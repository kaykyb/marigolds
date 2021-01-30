import { cx } from "@emotion/css";
import React, { memo } from "react";
import twemoji from "twemoji";
import useStyledSystem from "../core/useStyledSystem";
import { allStylesParser, AllStylesProps } from "../types/allStylesProps";
import { AriaProps } from "../types/ariaProps";
import { BaseProps } from "../types/baseProps";
import { CursorProps } from "../types/cursorProps";
import { extractAllAdjacentProps } from "../types/util";

interface EmojiProps extends BaseProps, AllStylesProps, AriaProps, CursorProps {
  emoji: string;
}

const Twemoji: React.FC<EmojiProps> = (props: EmojiProps) => {
  const { base, aria, cursor, rest } = extractAllAdjacentProps(props);
  const { emoji, ...styleProps } = rest;

  const classNameForStyleProps = useStyledSystem<AllStylesProps>(
    styleProps,
    allStylesParser
  );

  return (
    <span
      {...aria}
      {...cursor}
      {...base}
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: "svg",
          ext: ".svg",
        }),
      }}
      className={cx(classNameForStyleProps, base.className)}
    />
  );
};

export default memo(Twemoji);
