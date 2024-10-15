import { z } from "zod";

export const DishDto = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  popular: z.boolean().optional(),
  category: z.string(),
  ingredients: z.array(z.string()),
});

export const DishesDtoSchema = z.object({
  data: z.array(DishDto),
  total: z.number(),
});

export const PageParamsDtoSchema = z.object({
  offset: z.number().min(0),
  limit: z.number().min(1),
});

export const FilterQueryDtoSchema = z.object({
  popular: z.boolean().optional(),
});

export const DishesParamsDtoSchema = z.intersection(
  PageParamsDtoSchema,
  FilterQueryDtoSchema,
);
