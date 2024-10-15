import { z } from "zod";
import {
  DishDto,
  DishesDtoSchema,
  PageParamsDtoSchema,
  FilterQueryDtoSchema,
  DishesParamsDtoSchema,
} from "./dish.contracts";

export type DishDto = z.infer<typeof DishDto>;
export type DishesDto = z.infer<typeof DishesDtoSchema>;
export type PageParamsDto = z.infer<typeof PageParamsDtoSchema>;
export type FilterQueryDto = z.infer<typeof FilterQueryDtoSchema>;
export type DishesParamsDto = z.infer<typeof DishesParamsDtoSchema>;
