"use server";

import { prisma } from "@/lib/prisma";
import { SubjectType } from "@/types";

export async function getQuestions(testId: string) {
  const result = await prisma.$queryRaw`
     SELECT 
      subject, 
      json_agg(json_build_object(
        'id', id,
        'statement', statement,
        'options', options,
        'answer', answer
      )) AS questions
    FROM 
      public.questions
    WHERE 
      "testId" = ${testId}
    GROUP BY 
      subject
  `;

  return result as SubjectType[];
}
