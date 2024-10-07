import { Meta, StoryObj } from "@storybook/react";
import OurStoryCard from "./OurStoryCard";

export const Default = {
  args: {
    image: "./images/image_about_1.png",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
  },
};

export const Primary: StoryObj<typeof OurStoryCard> = {
  args: {
    ...Default.args,
    mode: "primary",
  },
};

export const Secondary: StoryObj<typeof OurStoryCard> = {
  args: {
    ...Default.args,
    mode: "secondary",
  },
};

const ourStoryCard: Meta<typeof OurStoryCard> = {
  title: "Molecules/OurStoryCard",
  component: OurStoryCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default ourStoryCard;
