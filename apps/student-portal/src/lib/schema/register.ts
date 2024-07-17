import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name should be less than 100 characters" }),
  email: z
    .string({ invalid_type_error: "Email is required" })
    .email({ message: "Enter a Valid Email" }),
  file: z
    .custom<File | undefined>()
    .refine((val) => val !== undefined && val instanceof File, {
      message: "Screenshot is required",
    }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
