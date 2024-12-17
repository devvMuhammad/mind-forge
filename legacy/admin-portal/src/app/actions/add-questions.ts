"use server";
import { createClient } from "@/lib/supabase/server";
import { QuestionType } from "@/types";
import { Database } from "@/types/supabase";
// import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type QuestionToBeAddedType = QuestionType & {
  test_id: string;
  subject: Database["public"]["Enums"]["QuestionSubject"];
};

export async function addQuestions(questions: QuestionToBeAddedType[]) {
  const supabase = await createClient();
  const testId = questions[0].test_id; // kisi aik se bhi utha lo
  const { data, error } = await supabase.from("questions").insert(questions);
  console.log({ data, error });
  if (error) return { error: error };
  revalidatePath("/admin/dashboard"); // in order to update the cache to display latest change
  revalidatePath(`/admin/editor/${testId}`); // in order to update the cache to display latest change
  return data;
}
