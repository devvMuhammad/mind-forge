"use server";

import { testsConfig } from "@/config/tests";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function selectCategory({ category }: { category: string }) {
  if (!category) {
    throw new Error("Please select a category");
  }

  const supabase = await createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  if (!userId) {
    return { error: "User not found" };
  }

  if (
    !testsConfig.categories.includes(
      category as (typeof testsConfig.categories)[number]
    )
  ) {
    console.log(category);
    return { error: "Invalid category" };
  }

  const { data, error } = await supabase
    .from("profiles")

    .update({ category: category as (typeof testsConfig.categories)[number] })
    .eq("id", userId);

  if (error) throw error;

  revalidatePath("/student/dashboard");
  return data;
}
