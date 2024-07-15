import { Icons } from "@/components/icons";
import { dashboardConfig } from "@/config/dashboard";
import { $Enums } from "@prisma/client";
import { Database } from "./supabase";

// @Dashboard Types
export type DashboardNavMainItem = {
  title: string;
  href: string;
};

export type DashboardNavSidebarItem = {
  title: string;
  href: string;
  icon: keyof typeof Icons;
};

// @Test Types
export type PossibleCategoryType = Database["public"]["Enums"]["TestCategory"];
export type PossibleSubjectType =
  Database["public"]["Enums"]["QuestionSubject"];

export type QuestionType = {
  id?: number;
  statement: string;
  options: [string, string, string, string];
  answer: number; // this is the index of the answer from 0 to 3
  explanation?: string;
};

export type SubjectType = {
  subject: string;
  questions: QuestionType[];
};

export type TestType = {
  testId: string;
  category: string;
  title: string;
  mcqs: SubjectType[];
  attempts: number;
  // mcqsLength: number;
  lastChangedDate: Date;
  lastChangedBy: string;
};

export type ErrorResponse = {
  success: false;
  message: string;
};

export type GoodResponse = {
  success: true;
  data: any;
};

// @Student Result Types (using a dummy version right now)
type ResultType = {
  id: string;
  // test info
  testId: string; //title of the string
  test: string; // title of the string
  category: PossibleCategoryType;
  // student info
  studentName: string;
  // result info
  subjectScores: SubjectScoreType[];
  marks: number;
  total: number;
  createdAt: Date;
  // wrongIndices //? will deal with this later on
};

type SubjectScoreType = {
  subject: PossibleSubjectType;
  score: number;
  total: number;
};
