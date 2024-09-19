import Hero from "./Hero";

export const Default = {
  args: {
    image: "/images/image_about-bg.png",
    title: "About Us",
    subtitle: "Read our Story, How we started and about the Team",
  },
};

const HeroConfig = {
  title: "Atoms/Hero",
  component: Hero,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default HeroConfig;
