import { Meta } from "@storybook/react";
import PopularDishCard from "./PopularDishCard";

const PopularDishCardConfig: Meta = {
  title: "atoms/PopularDishCard",
  component: PopularDishCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    link: "#",
    image: "/images/popular_image.png",
  },
};

export default PopularDishCardConfig;
