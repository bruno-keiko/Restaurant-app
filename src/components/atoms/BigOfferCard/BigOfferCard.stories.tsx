import BigOfferCard from "./BigOfferCard";

export const Default = {
  args: {
    image:
      "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
};

const bigOfferCardConfig = {
  title: "Atoms/BigOfferCard",
  component: BigOfferCard,
  tags: ["outodocs"],
  excludeStories: /.*Data$/,
};

export default bigOfferCardConfig;
