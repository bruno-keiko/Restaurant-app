import { FC } from "react";
import SpecialMenu from "./SpecialMenu";

const meals = Array.from({ length: 10 }, (a, index) => ({
  id: index,
  image:
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  title: "Hot Dogs",
}));

export const Default = {
  args: { meals },
};

const specialMenuConfig = {
  title: "molecules/SpecialMenu",
  component: SpecialMenu,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: FC) => {
      return (
        <div style={{ backgroundColor: "#fff8ee" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default specialMenuConfig;
