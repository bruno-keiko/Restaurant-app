import ItemCard from "./ItemCard";

export const Default = {
  args: {
    id: 1,
    image: "/images/pizza.png",
    dishname: "Chicken Supreme Pizza",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
};

const itemCard = {
  title: "Atoms/ItemCard",
  component: ItemCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default itemCard;
