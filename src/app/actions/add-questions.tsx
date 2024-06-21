"use server";
import { QuestionType } from "@/types";
import { prisma } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

type QuestionToBeAddedType = QuestionType & {
  testId: string;
  subject: $Enums.QuestionSubject;
};

export async function addQuestions(questions: QuestionToBeAddedType[]) {
  return await prisma.questions.createMany({
    data: questions,
    // quest
  });
}
