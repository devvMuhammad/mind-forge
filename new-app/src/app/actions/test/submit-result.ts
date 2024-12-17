"use server";

import { createClient } from "@/lib/supabase/server";
import { calculateScore } from "@/test-code/utils/utils";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export async function submitResult(testId: string, mcqArray: unknown) {
  try {
    const [subjectScores, wrongQuestionsIndices] = calculateScore(mcqArray);
    console.log("subjectScores", subjectScores);
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser())?.data.user?.id;
    if (!userId) {
      return { error: "User not logged in" };
    }

    const total = subjectScores.reduce((acc, curr) => acc + curr.score, 0);

    const { error } = await supabase.from("results").insert({
      test_id: testId,
      profile_id: userId,
      scores: subjectScores,
      total,
      wrong: wrongQuestionsIndices,
    });

    if (error) {
      console.log("error inserting result", error);
      return { success: false, message: "Error inserting result" };
    }

    revalidatePath("/student/dashboard", "layout");
    redirect("/student/dashboard");
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }

    console.log(err);
    return { success: false, message: (err as Error).message };
  }
}
