import { Dish, Dishes } from "./types";
import { DishTypeDto, DishesTypeDto } from "@/shared/api/dish/dish.types";

export function adapterDish(dish: DishTypeDto): Dish {
  return {
    id: dish.id,
    name: dish.name,
    description: dish.description,
    price: dish.price,
    image: dish.image,
    popular: dish.popular,
    category: dish.category,
    ingredients: dish.ingredients,
  };
}

export function adapterDishList(dishes: DishTypeDto[]): Dish[] {
  return dishes.map(adapterDish);
}

export function adapterDishesList(dishes: DishesTypeDto): Dishes {
  return {
    data: dishes.data.map(adapterDish),
    total: dishes.total,
  };
}
