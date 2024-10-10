import { Meta } from "@storybook/react";
import ItemsPage from "./ItemsPage";

const mockData = [
  {
    id: 1,
    image: "/images/pizza.png",
    dishname: "Chicken Supreme Pizza",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 2,
    image: "/images/pizza.png",
    dishname: "Hamburger Burger with Beef",
    price: 150,
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 3,
    image: "/images/pizza.png",
    dishname: "Belgium waffles with strawberries",
    price: 150,
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 4,
    image: "",
    dishname: "",
    price: 150,
    description: "",
    discountOne: "/images/discountOne.png",
    discountTwo: "",
  },
  {
    id: 5,
    image: "",
    dishname: "",
    price: "150",
    description: "",
    discountOne: "",
    discountTwo: "/images/discountTwo.png",
  },
  {
    id: 6,
    image: "/images/pizza.png",
    dishname: "Mutton or lamb biriyani",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 7,
    image: "/images/pizza.png",
    dishname: "Spicy fried tubtim fish salad",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 8,
    image: "/images/pizza.png",
    dishname: "Fresh cola drink with green lime",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 9,
    image: "/images/pizza.png",
    dishname: "Ice cream cone",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 10,
    image: "/images/pizza.png",
    dishname: "Chocolate ice cream",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 11,
    image: "/images/pizza.png",
    dishname: "Chocolate topping for ice cream cups",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 12,
    image: "/images/pizza.png",
    dishname: "Healthy breakfast",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 13,
    image: "/images/pizza.png",
    dishname: "Breakfast with coffee and fresh croissants",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 14,
    image: "/images/pizza.png",
    dishname: "Ried eggs, sausages, zucchini",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
  {
    id: 15,
    image: "/images/pizza.png",
    dishname: "Salad, fried eggs and pastry",
    price: "150",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    discountOne: "",
    discountTwo: "",
  },
];

const itemsPage: Meta<typeof ItemsPage> = {
  title: "Pages/ItemsPage",
  component: ItemsPage,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    items: mockData,
  },
};

export default itemsPage;
