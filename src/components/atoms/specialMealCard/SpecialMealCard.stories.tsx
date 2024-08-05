import SpecialMealCard from "./SpecialMealCard";

export const Default = {
  args: {
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",

    title: "Hot Dogs",
  },
};

const specialMealCard = {
  title: "Atoms/SpecialMealCard",
  component: SpecialMealCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default specialMealCard;
