import Feature from "./Feature";

export const Default = {
  args: {
    image:
      "https://e7.pngegg.com/pngimages/352/396/png-clipart-pizza-chef-buffet-cooking-chef-chef-holding-tray-of-pizza-illustration-food-cook-thumbnail.png ",
    title: "Passionate Chefs",
    description:
      "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    number: 1,
    children: <button>test</button>,
  },
};

const feature = {
  title: "Atoms/Feature",
  component: Feature,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default feature;
