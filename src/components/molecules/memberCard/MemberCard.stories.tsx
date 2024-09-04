import { Meta, StoryObj } from "@storybook/react";
import MemberCard from "./MemberCard";

export const Default: StoryObj<typeof MemberCard> = {
  args: {
    name: "Brain Adams",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sitamet",
    image: "/images/image_ourTeam_1.png", // Example image path
    socialMedia: [
      { icon: "icons/instagram.svg", href: "/" },
      { icon: "icons/facebook.svg", href: "/" },
      { icon: "icons/twitter.svg", href: "/" },
      { icon: "icons/linkedin.svg", href: "/" },
    ],
  },
};

const memberCard: Meta<typeof MemberCard> = {
  title: "Molecules/MemberCard",
  component: MemberCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: "20px" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default memberCard;
