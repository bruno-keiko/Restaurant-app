import HighlightCard from "./HighlightCard";
import { HighlightIcon } from "./HighlightIcon";

export const Default = {
  args: {
    image: HighlightIcon,
    title: "100 % Fresh Foods",
    description:
      "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    link: "https://tmcars.info/",
  },
};

const highlightCardConfig = {
  title: "Atoms/HighlightCard",
  component: HighlightCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default highlightCardConfig;
