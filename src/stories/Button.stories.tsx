import React from "react";
import { Meta } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "primary"],
      },
      defaultValue: "default",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"],
      },
      defaultValue: "default",
    },
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
  },
} as Meta;

export const Default: React.VFC<any> = (args) => <Button {...args} />;
