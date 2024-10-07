import { Meta } from "@storybook/react";
import MainCarousel from "./MainCarousel";

const slides = Array.from({ length: 5 }, (item, index) => ({
  id: index,
  image: "/images/image1.png",
  dishname: "Burger",
  price: "10.89",
  link: "/",
  socialMedia: [
    { icon: "icons/instagram.svg", href: "/" },
    { icon: "icons/facebook.svg", href: "/" },
    { icon: "icons/twitter.svg", href: "/" },
    { icon: "icons/linkedin.svg", href: "/" },
  ],
}));

export const Default = {
  args: { slides },
};

const mainCarousel: Meta<typeof MainCarousel> = {
  title: "Molecules/MainCarousel",
  component: MainCarousel,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export default mainCarousel;
