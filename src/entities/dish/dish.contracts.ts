import { z } from "zod";

export const FilterQuerySchema = z.object({
  popular: z.boolean().optional(),
  offset: z.number().min(0),
  limit: z.number().min(1),
});

export const DishSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  popular: z.boolean().optional(),
  category: z.string(),
  ingredients: z.array(z.string()),
});

export const DishesSchema = z.object({
  data: z.array(DishSchema),
  total: z.number(),
});
