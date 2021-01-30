import React from "react";
import { addDecorator, configure } from "@storybook/react";
import ThemeProvider from "../src/components/theme/ThemeProvider";
import { LIGHT_THEME } from "../src/core/theming/light";

const StylesDecorator = (storyFn) => (
  <ThemeProvider theme={LIGHT_THEME}>{storyFn()}</ThemeProvider>
);

addDecorator(StylesDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
