import { prisma } from "@/lib/prisma";

export async function getTest(testId: string) {
  return await prisma.tests.findFirst({ where: { id: testId } });
}
