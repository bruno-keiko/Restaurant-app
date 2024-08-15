import Feature from "./HighLightCard";
import { FeatureIcon } from "./icon";

export const Default = {
  args: {
    image: FeatureIcon,
    title: "100 % Fresh Foods",
    description:
      "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    link: "https://tmcars.info/",
  },
};

const highLightCardConfig = {
  title: "Atoms/HighLightCard",
  component: Feature,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default highLightCardConfig;
