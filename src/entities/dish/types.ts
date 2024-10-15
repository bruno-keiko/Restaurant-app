import { z } from "zod";
import { DishesSchema, DishSchema, FilterQuerySchema } from "./dish.contracts";

export interface IDishState {
  readonly data: Dish[] | null;
  readonly total: number;
  readonly isLoading: boolean;
  readonly error: string | null;
}

export type Dish = z.infer<typeof DishSchema>;

export type Dishes = z.infer<typeof DishesSchema>;

export type FilterQuery = z.infer<typeof FilterQuerySchema>;
