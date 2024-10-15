import { DishDto } from "@/shared/api/dish/dish.types";

export interface IDishState {
  readonly data: DishDto[] | null;
  readonly total: number;
  readonly isLoading: boolean;
  readonly error: string | null;
}
