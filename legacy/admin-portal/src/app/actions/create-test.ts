"use server";
import { PossibleCategoryType } from "@/types";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type ActionProps = {
  category: PossibleCategoryType;
  title: string;
  lastChangedBy: string;
};

export async function createTest({
  category,
  title,
  lastChangedBy,
}: ActionProps) {
  const supabase = createClient();
  const data = await supabase.from("tests").insert({
    category,
    title,
    attempts: 0,
    last_changed: new Date().toISOString(),
    last_changed_by: lastChangedBy,
  });

  revalidatePath("/admin/dashboard");
  return { success: true, data };
}
