"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";
import { AuthError, User, Session } from "@supabase/supabase-js";
import { cache } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.founder,
    password: formData.password,
  };

  const { error, data: responseData } = await supabase.auth.signInWithPassword(
    data
  );

  console.log(error, "error during signup");

  if (error) {
    // using json parse cuz it was causing issues when returning objects directly
    return JSON.parse(
      JSON.stringify({
        error: { ...error, message: error.message },
        data: null,
      })
    );
  }
  return { data: responseData, error: null };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

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
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export const getSession = cache(async () => {
  const supabase = await createClient();
  return await supabase.auth.getUser();
});

export async function loginSSO() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",

    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (error) {
    console.log(error, "error during loginSSO");
    return { error: JSON.stringify(error) };
  }

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
