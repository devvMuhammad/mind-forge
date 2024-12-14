import { categories } from "@/config/categories";
import { z } from "zod";

const categoriesNames = categories.reduce((acc: string[], elm) => {
  acc.push(elm.name);
  return acc;
}, []);

export const registerSchema = z.object({
  category: z.enum(categoriesNames as any, {
    invalid_type_error: "Category is required",
    required_error: "Category is required",
  }),
  file: z
    .custom<File | undefined>()
    .refine((val) => val !== undefined && val instanceof File, {
      message: "Screenshot is required",
    }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
