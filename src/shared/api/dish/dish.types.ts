import { z } from "zod";
import {
  DishDto,
  DishesDtoSchema,
  PageParamsDtoSchema,
  FilterQueryDtoSchema,
  DishesParamsDtoSchema,
} from "./dish.contracts";

export type DishTypeDto = z.infer<typeof DishDto>;
export type DishesTypeDto = z.infer<typeof DishesDtoSchema>;
export type PageParamsTypeDto = z.infer<typeof PageParamsDtoSchema>;
export type FilterQueryDto = z.infer<typeof FilterQueryDtoSchema>;
export type DishesParamsDto = z.infer<typeof DishesParamsDtoSchema>;
