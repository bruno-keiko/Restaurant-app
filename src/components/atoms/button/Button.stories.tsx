import Button from "./Button";

export const Default = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Small = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Medium = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Large = {
  args: {
    children: "Go",
    size: "large",
  },
};

const buttonConfig = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default buttonConfig;
