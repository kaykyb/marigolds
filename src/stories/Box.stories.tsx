import React from "react";
import { Meta } from "@storybook/react";

import Box from "../components/Box";
import ThemeProvider from "../components/theme/ThemeProvider";
import { LIGHT_THEME } from "../core/theming/light";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    margin: {
      control: {
        type: "range",
        min: 0,
        max: 6,
        step: 1,
      },
      defaultValue: 1,
    },
    padding: {
      control: {
        type: "range",
        min: 0,
        max: 6,
        step: 1,
      },
      defaultValue: 2,
    },
    border: {
      control: {
        type: "select",
        options: ["none", "default", "thicc"],
      },
      defaultValue: "default",
    },
    borderRadius: {
      control: {
        type: "select",
        options: ["default", "noticeable", "circle"],
      },
    },
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Este é um box!",
    },
    fontFamily: {
      control: {
        type: "select",
        options: ["default", "monospace"],
      },
      defaultValue: "default",
    },
  },
} as Meta;

export const Default: React.VFC<any> = ({ ...rest }) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <Box {...rest} />
  </ThemeProvider>
);
