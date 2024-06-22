import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteQuestion(questionId: number, testId: string) {
  const result = await prisma.$transaction([
    prisma.questions.delete({
      where: { id: questionId },
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
