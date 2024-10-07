import { Meta } from "@storybook/react";
import PopularDishesSection from "./PopularDishesSection";

const popularDishesSection: Meta<typeof PopularDishesSection> = {
  title: "Molecules/PopularDishesSection",
  component: PopularDishesSection,
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

export default popularDishesSection;
