"use server";

import { QuestionType } from "@/types";
import { prisma } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";

type QuestionToBeEditedType = QuestionType & {
  questionId: number;
  testId: string;
  subject: $Enums.QuestionSubject;
};

export async function editQuestion(question: QuestionToBeEditedType) {
  const result = await prisma.$transaction([
    prisma.questions.update({
      where: { id: question.questionId },
      data: {
        statement: question.statement,
        options: question.options,
        answer: question.answer,
        explanation: question.explanation,
        subject: question.subject,
      },
      // data: question,
    }),
    prisma.tests.update({
      where: { id: question.testId },
      data: { lastChanged: new Date() },
    }),
  ]);
  console.log(result[0]);
  revalidatePath("/admin/dashboard");
  revalidatePath(`/admin/editor/${question.testId}`);
  return result[0];
}
