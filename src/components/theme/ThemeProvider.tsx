import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeType } from "../../core/theming/types";
import "./reset.css";

export default function ThemeProvider({
  theme,
  children,
}: React.PropsWithChildren<{ theme: ThemeType }>) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
