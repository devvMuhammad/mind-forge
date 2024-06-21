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
  const result = await prisma.$transaction([
    prisma.questions.createMany({
      data: questions,
    }),
    prisma.tests.update({
      where: { id: questions[0].testId },
      data: { lastChanged: new Date() },
    }),
  ]);
  revalidatePath("/admin/dashboard"); // in order to update the cache to display latest change
  return result;
}
