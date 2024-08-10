import MenuItem from "./MenuItem";

export const Default = {
  args: {
    name: "Gazpacho Garlic",
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    price: 55,
  },
};

const menuItem = {
  title: "Atoms/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default menuItem;
