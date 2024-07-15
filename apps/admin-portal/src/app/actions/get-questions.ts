"use server";

import { createClient } from "@/lib/supabase/server";
import { SubjectType } from "@/types";

export async function getQuestions(testId: string) {
  const supabase = createClient();
  // supabase.from("profiles").fetch()
  // return result as SubjectType[];
}

//? NOTE
// RAW SQL QUERY FOR DIRECTLY DOING ALL THIS
// DIDNT GO WITH THIS, CUZ IT REQUIRED ME CREATING A FUNCTION ON POSTGRES AND CALLING IT VIA SUPABASE RPC
// SO INSTEAD WENT WITH TRANSFORMING THE DATA ON THE CLIENT

// SELECT
//       subject,
//       json_agg(json_build_object(
//         'id', id,
//         'statement', statement,
//         'options', options,
//         'answer', answer
//       ) ORDER BY id) AS questions
//     FROM
//       public.questions
//     WHERE
//       "testId" = ${testId}
//     GROUP BY
//       subject
