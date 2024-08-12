import { FC } from "react";
import MenuItem from "./MenuItem";

export const Default = {
  args: {
    name: "Gazpacho Garlic",
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    price: 55,
  },
};

const menuItemConfig = {
  title: "Atoms/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: FC) => (
      <div style={{ backgroundColor: "#fff8ee " }}>
        <Story />
      </div>
    ),
  ],
};

export default menuItemConfig;
