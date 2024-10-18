import { DishService } from "@/shared/api/dish";
import { DishTypeDto, DishesTypeDto } from "@/shared/api/dish/dish.types";
import { adapterDishesList, adapterDishList } from "./dish.lib";
import { create } from "zustand";

interface DishState {
  popularDishes: DishTypeDto[];
  dishes: DishesTypeDto | null;
  fetchPopular: () => void;
  fetchDishes: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useDishStore = create<DishState>((set) => ({
  dishes: null,
  popularDishes: [] as DishTypeDto[],
  isLoading: false,
  error: null,
  fetchDishes: async () => {
    set({ isLoading: true });
    try {
      const response = await DishService.getDishes({
        offset: 1,
        limit: 10,
      });
      {
        response && set({ dishes: adapterDishesList(response) });
      }
    } catch (error) {
      set({ error: String(error) });
    }
  },
  fetchPopular: async () => {
    set({ isLoading: true });
    try {
      const response = await DishService.getDishes({
        offset: 1,
        limit: 10,
        popular: true,
      });
      {
        response && set({ popularDishes: adapterDishList(response.data) });
      }
    } catch (error) {
      set({ error: String(error) });
    }
  },
}));
