"use server";

import { PossibleCategoryType, QuestionType, TestType } from "@/types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma, QuestionSubject } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

type ActionProps = {
  category: PossibleCategoryType;
  title: string;
  lastChangedBy: string;
};
// type a = Prisma.TestsCreateArgs<DefaultArgs>;

export async function createTest({
  category,
  title,
  lastChangedBy,
}: ActionProps) {
  // try {
  const data = await prisma.tests.create({
    data: {
      category,
      title,
      lastChangedBy,
      attempts: 0,
    },
  });
  revalidatePath("/admin/dashboard");
  return { success: true, data };
}
