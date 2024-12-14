"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";
import { AuthError, User, Session } from "@supabase/supabase-js";
import { cache } from "react";

// @Validation schema using Zod
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

type LoginResponse = {
  error: AuthError | null;
  data: { user: User; session: Session };
};
export async function login(formData: TLoginSchema): Promise<LoginResponse> {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.founder,
    password: formData.password,
  };

  const { error, data: responseData } =
    await supabase.auth.signInWithPassword(data);

  console.log(error, "error during signup");

  if (error) {
    // using json parse cuz it was causing issues when returning objects directly
    return JSON.parse(
      JSON.stringify({
        error: { ...error, message: error.message },
        data: null,
      }),
    );
  }
  return { data: responseData, error: null };
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error };
  }

  revalidatePath("/", "layout");
  redirect("/auth/login");
}

export const getSession = cache(async () => {
  const supabase = createClient();
  return await supabase.auth.getUser();
});
