import DeliveryOrderCard from "./DeliveryOrderCard";

export const Default = {
  args: {
    title: "Delivery Order",
    tel: "+880 1630 225 015",
  },
};

const deliveryOrderCard = {
  title: "Atoms/DeliveryOrderCard",
  component: DeliveryOrderCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default deliveryOrderCard;
