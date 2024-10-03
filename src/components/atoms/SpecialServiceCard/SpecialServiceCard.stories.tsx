import React from "react";
import { Meta, Story } from "@storybook/react";
import SpecialServiceCard, {
  SpecialServiceCardProps,
} from "./SpecialServiceCard";

// Define metadata for the Storybook story
const meta: Meta = {
  title: "atoms/SpecialServiceCard",
  component: SpecialServiceCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Define a template for the stories
const Template: Story<SpecialServiceCardProps> = (args) => (
  <SpecialServiceCard {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  title: "Amazing Service",
  description: "This service provides incredible value and benefits.",
};

// Story with custom title and description
export const CustomContent = Template.bind({});
CustomContent.args = {
  title: <h1>Custom Title</h1>,
  description: (
    <p>
      Custom description with <strong>HTML</strong> content.
    </p>
  ),
};

// Story with only title
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title Only",
  description: "",
};

// Story with only description
export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  title: "",
  description: "Description Only",
};
