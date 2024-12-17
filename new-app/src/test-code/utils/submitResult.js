"use server";

import { calculateScore } from "./utils";
// import { cookies } from "next/headers";
// import { connectDB } from "@/db/connect";

//! WE WILL ADD SUPABASE HERE
export async function submitResult(mcqArray) {
  try {
    const [subjectScores, wrongQuestionsIndices] = calculateScore(mcqArray);
    // console.log(subjectScores);
    // const userCookie = cookies().get("user");
    // if (!userCookie) throw new Error("User not found!!!");
    // const user = JSON.parse(userCookie.value);
    // await connectDB();
    // const result = await Promise.all([
    //   Result.create({
    //     name: user.name,
    //     email: user.email,
    //     test: user.test,
    //     subjectScores,
    //     wrongQuestionsIndices,
    //   }),
    //   deleteCookie(),
    // ]);
    // console.log(result);
    // await Result.create({
    //   name: user.name,
    //   email: user.email,
    //   test: user.test,
    //   subjectScores,
    //   wrongQuestionsIndices,
    // });

    // await deleteCookie();

    return {
      success: true,
      message: "Result submitted successfully!!!",
      // subjectScores,
      // wrongQuestionsIndices,
    };
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
}
