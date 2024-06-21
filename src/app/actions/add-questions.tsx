"use server";
import { QuestionType } from "@/types";
import { prisma } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";

type QuestionToBeAddedType = QuestionType & {
  testId: string;
  subject: $Enums.QuestionSubject;
};

export async function addQuestions(questions: QuestionToBeAddedType[]) {
  const testId = questions[0].testId; // kisi aik se bhi utha lo
  const result = await prisma.$transaction([
    prisma.questions.createMany({
      data: questions,
    }),
    prisma.tests.update({
      where: { id: testId },
      data: { lastChanged: new Date() },
    }),
  ]);
  revalidatePath("/admin/dashboard"); // in order to update the cache to display latest change
  revalidatePath(`/admin/editor/${testId}`); // in order to update the cache to display latest change
  return result;
}
