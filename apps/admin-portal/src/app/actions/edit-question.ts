"use server";

import { createClient } from "@/lib/supabase/server";
import { QuestionType } from "@/types";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";

type QuestionToBeEditedType = QuestionType & {
  questionId: number;
  test_id: string;
  subject: $Enums.QuestionSubject;
};

export async function editQuestion(question: QuestionToBeEditedType) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("questions")
    .update({
      statement: question.statement,
      answer: question.answer,
      options: question.options,
      explanation: question.explanation,
    })
    .eq("id", question.questionId);
  if (error) return { error };

  revalidatePath("/admin/dashboard");
  revalidatePath(`/admin/editor/${question.test_id}`);
  return data;
}
