import { Meta } from "@storybook/react";
import React, { useState } from "react";
import InputField from "./InputField";

const inputField: Meta<typeof InputField> = {
  title: "Atoms/InputField",
  component: InputField,
  tags: ["autodocs"],
};

type InputFieldProps = React.ComponentProps<typeof InputField>;

const Template = (args: InputFieldProps) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputField
      placeholder="Type..."
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});

export default inputField;
