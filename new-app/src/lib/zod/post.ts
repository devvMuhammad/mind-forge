import { testsConfig } from "@/config/tests";
import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  subject: z.enum(testsConfig.subjects, {
    required_error: "Please select a subject",
  }),
  content: z
    .string()
    .min(20, { message: "Content must be at least 20 characters long" })
    .max(1000, { message: "Content cannot exceed 1000 characters" }),
});

export type TPostSchema = z.infer<typeof postSchema>;
