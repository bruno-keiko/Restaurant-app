import HighlightCard from "./HighlightCard";

export const Default = {
  args: {
    image: "icons/highlight-icon.svg",
    title: "100 % Fresh Foods",
    description:
      "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    link: "/",
  },
};

const highlightCardConfig = {
  title: "Atoms/HighlightCard",
  component: HighlightCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default highlightCardConfig;
