import { DishService } from "@/shared/api/dish";
import { DishDto, DishesDto } from "@/shared/api/dish/dish.types";
import { create } from "zustand";

interface DishState {
  popularDishes: DishDto[];
  dishes: DishesDto | null;
  fetchPopular: () => void;
  fetchDishes: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useDishStore = create<DishState>((set) => ({
  dishes: null,
  popularDishes: [] as DishDto[],
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
        response && set({ dishes: response });
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
        response && set({ popularDishes: response.data });
      }
    } catch (error) {
      set({ error: String(error) });
    }
  },
}));
