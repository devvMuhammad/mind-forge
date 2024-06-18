import { Icons } from "@/components/icons";
import { dashboardConfig } from "@/config/dashboard";

export type DashboardNavMainItem = {
  title: string;
  href: string;
};

export type DashboardNavSidebarItem = {
  title: string;
  href: string;
  icon: keyof typeof Icons;
};

export type QuestionType = {
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
