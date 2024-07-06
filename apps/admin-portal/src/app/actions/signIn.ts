"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

const LoginSchema = z.object({
  founder: z
    .string({
      invalid_type_error: "Founder is required",
      required_error: "Founder is required",
    })
    .min(1, { message: "Founder is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
type TLoginSchema = z.infer<typeof LoginSchema>;

export async function customSignIn(inputData: TLoginSchema) {
  const validatedFields = LoginSchema.safeParse(inputData);
  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  const { founder, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      founder,
      password,
      redirectTo: "/admin/dashboard",
    });
    return { message: "Signed in succesfully" };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CallbackRouteError":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw err;
  }
}
