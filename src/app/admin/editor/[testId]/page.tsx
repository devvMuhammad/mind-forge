import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";

import { formatDate, toTitleCase } from "@/lib/utils";
import { SubjectType } from "@/types";
import { ChevronDown } from "lucide-react";

type TestEditorPageProps = {
  params: {
    testId: string;
  };
};

type TestEditorPageData = {
  testId: string;
  category: string;
  title: string;
  mcqs: SubjectType[];
  mcqsLength: number;
  lastChangedDate: Date;
  lastChangedBy: string;
};

export default function TestEditorPage({
  params: { testId },
}: TestEditorPageProps) {
  const dummyData: TestEditorPageData = {
    testId,
    title: "Test Title",
    category: "Pre-Engineering",
    mcqsLength: 4,
    mcqs: [
      {
        subject: "mathematics",
        questions: [
          {
            question:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore id dolore tempore repellendus voluptatibus sint dolorum velit quaerat nihil cum harum nemo ad quam, neque ullam asperiores incidunt impedit corrupti ab mollitia ut? Facilis cum laboriosam molestiae dolor praesentium eveniet fuga perspiciatis, culpa debitis minima in alias nobis quae",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 1",
          },
          {
            question: "Question 2",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2",
          },
        ],
      },
      // {
      //   subject: "physics",
      //   questions: [
      //     {
      //       question: "Question 1",
      //       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      //       correctAnswer: "Option 3",
      //     },
      //     {
      //       question: "Question 2",
      //       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      //       correctAnswer: "Option 4",
      //     },
      //   ],
      // },
    ],
    lastChangedDate: new Date(),
    lastChangedBy: "Asjad Khudad",
  };
  return (
    <section>
      <TestDetails
        category={dummyData.category}
        mcqsLength={dummyData.mcqsLength}
        lastChangedBy={dummyData.lastChangedBy}
        lastChangedDate={dummyData.lastChangedDate}
      />
      <SubjectQuestions testId={testId} mcqs={dummyData.mcqs} />
    </section>
  );
}
