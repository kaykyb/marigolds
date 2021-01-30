import React from "react";
import { Meta } from "@storybook/react";

import TextBox from "../components/TextBox";
import Emoji from "../components/Emoji";

export default {
  title: "TextBox",
  component: TextBox,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"],
      },
      defaultValue: "default",
    },

    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "E-mail",
    },
  },
} as Meta;

export const Default: React.VFC<any> = (args) => (
  <TextBox {...args} width={1} prefix={<>🔐</>} />
);
