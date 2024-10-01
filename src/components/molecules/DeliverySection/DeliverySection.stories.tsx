import { Meta } from "@storybook/react";
import DeliverySection from "./DeliverySection";

const deliverySection: Meta<typeof DeliverySection> = {
  title: "Molecules/DeliverySection",
  component: DeliverySection,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default deliverySection;
