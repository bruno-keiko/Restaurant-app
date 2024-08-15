import BasketButton from "./BasketButton";

export const Default = {
  args: {
    count: 1,
  },
};

const basketButtonConfig = {
  title: "Atoms/BasketButton",
  component: BasketButton,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default basketButtonConfig;
