import RichAndHealthy from "./RichAndHealthy";
import { FC } from "react";

export const Default = {};

const richAndHealthyConfig = {
  title: "Molecules/RichAndHealthy",
  component: RichAndHealthy,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: FC) => (
      <div style={{ backgroundColor: "#fff8ee" }}>
        <Story />
      </div>
    ),
  ],
};

export default richAndHealthyConfig;
