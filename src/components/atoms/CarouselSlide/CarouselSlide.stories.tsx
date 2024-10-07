import CarouselSlide from "./CarouselSlide";

export const Default = {
  args: {
    id: 1,
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
  },
};

const carouselSlide = {
  title: "Atoms/CarouselSlide",
  component: CarouselSlide,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default carouselSlide;
