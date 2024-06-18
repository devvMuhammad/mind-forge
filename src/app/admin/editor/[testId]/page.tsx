import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";
import { TestType } from "@/types";

type TestEditorPageProps = {
  params: {
    testId: string;
  };
};

type TestEditorPageData = {
  testData: TestType;
  mcqsLength: number;
};

export default function TestEditorPage({
  params: { testId },
}: TestEditorPageProps) {
  const dummyData: TestEditorPageData = {
    testData: {
      testId,
      title: "Test Title",
      category: "Pre-Engineering",
      mcqs: [
        {
          subject: "mathematics",
          questions: [
            {
              statement:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore id dolore tempore repellendus voluptatibus sint dolorum velit quaerat nihil cum harum nemo ad quam, neque ullam asperiores incidunt impedit corrupti ab mollitia ut? Facilis cum laboriosam molestiae dolor praesentium eveniet fuga perspiciatis, culpa debitis minima in alias nobis quae",
              options: ["Option 1", "Option 2", "Option 3", "Option 4"],
              answer: 0,
            },
            {
              statement: "Question 2",
              options: ["Option 1", "Option 2", "Option 3", "Option 4"],
              answer: 1,
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
    },
    mcqsLength: 4,
  };
  return (
    <section>
      <TestDetails
        category={dummyData.testData.category}
        mcqsLength={dummyData.mcqsLength}
        lastChangedBy={dummyData.testData.lastChangedBy}
        lastChangedDate={dummyData.testData.lastChangedDate}
      />
      <SubjectQuestions testId={testId} mcqs={dummyData.testData.mcqs} />
    </section>
  );
}
