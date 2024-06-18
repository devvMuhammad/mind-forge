"use server";

import { TestType } from "@/types";
import { prisma } from "@/lib/prisma";

export async function createTest({ category, title, lastChangedBy }: TestType) {
  // return await prisma.tests.create({
  //   data: {
  //     category: category as any,
  //     title,
  //     lastChangedBy,
  //     lastChanged: new Date(),
  //     // atte
  //   },
  // });
}
