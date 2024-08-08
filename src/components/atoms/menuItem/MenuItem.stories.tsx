import MenuItem from "./MenuItem";

export const Default = {
  args: {
    name: "Gazpacho Garlic",
    ingredients: [
      "Chilled",
      "tomato",
      "cucumber",
      "garlic",
      "red pepper soup.",
    ],
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
