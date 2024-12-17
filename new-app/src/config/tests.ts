import { Database } from "@/types/supabase";

export const testsConfig = {
  categories: ["engineering", "medical", "ics", "business"],
  subjects: [
    "mathematics",
    "physics",
    "chemistry",
    "english",
    "iq",
    "biology",
    "computer",
    "basic_maths",
  ],
} as const;

export const subjectsForCategories = {
  engineering: ["mathematics", "physics", "chemistry", "english", "iq"],
  medical: ["biology", "physics", "chemistry", "english", "iq"],
  ics: ["mathematics", "physics", "computer", "english", "iq"],
  business: ["basic_maths", "english", "iq"],
} satisfies Record<
  Database["public"]["Enums"]["TestCategory"],
  Database["public"]["Enums"]["QuestionSubject"][]
>;

// get the union of all the subjects of a particular category provided in generic
export type SubjectTypesForCategory<
  T extends keyof typeof subjectsForCategories
> = (typeof subjectsForCategories)[T][number];
