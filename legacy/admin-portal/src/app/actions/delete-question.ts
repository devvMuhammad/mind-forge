"use server";
import { createClient } from "@/lib/supabase/server";
// import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteQuestion({
  questionId,
  testId,
}: {
  questionId: number;
  testId: string;
}) {
  const supabase = await createClient();
  const { error, data } = await supabase
    .from("questions")
    .delete()
    .eq("id", questionId);
  console.log(error, data);
  if (error) return { error };

  revalidatePath("/admin/dashboard"); // in order to update the cache to display latest change
  revalidatePath(`/admin/editor/${testId}`); // in order to update the cache to display latest change
  return data;
}
