import SpecialCarouselItem from "./ScpecialCarouselItem";

import { menuItems } from "../SpecialCarousel/SpecialCarousel";

export const Default = {
  args: {
    menuItems,
    imageUrl: "/images/image_specials_1.png",
  },
};

const specialCarouselItemConfig = {
  title: "Molecules/SpecialCarouselItem",
  component: SpecialCarouselItem,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default specialCarouselItemConfig;
