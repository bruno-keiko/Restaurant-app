import { Meta } from "@storybook/react";
import DeliverySection from "./DeliverySection";

export const Default = () => {
  return <DeliverySection />;
};

const deliverySection: Meta<typeof DeliverySection> = {
  title: "Molecules/DeliverySection",
  component: DeliverySection,
  tags: ["autodocs"],
};

export default deliverySection;
