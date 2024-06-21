import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";
import { TestType } from "@/types";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type TestEditorPageProps = {
  params: {
    testId: string;
  };
};

type TestEditorPageData = {
  testData: TestType;
  mcqsLength: number;
};

export default async function TestEditorPage({
  params: { testId },
}: TestEditorPageProps) {
  // prisma.questions.grou
  const test1 = await prisma.tests.findUnique({
    where: { id: testId },
    include: { questions: true },
  });
  // const test2 = await prisma.questions.groupBy({
  //   where: {
  //     testId: {
  //       equals: testId,
  //     },
  //   },
  //   by: "subject",
  // });
  // console.log("details of test2", test2);
  if (!test1) redirect("/admin/dashboard");
  const dummyData = {
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
              options: ["Option 1", "Option 2", "Option 3", "Option 4"] as [
                string,
                string,
                string,
                string
              ],
              answer: 0,
            },
            {
              statement: "Question 2",
              options: ["Option 1", "Option 2", "Option 3", "Option 4"] as [
                string,
                string,
                string,
                string
              ],
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
        category={test1.category}
        mcqsLength={test1.questions.length}
        lastChangedBy={test1.lastChangedBy}
        lastChangedDate={test1.lastChanged}
      />
      <SubjectQuestions testId={testId} mcqs={dummyData.testData.mcqs} />
      {/* <SubjectQuestions testId={testId} /> */}
    </section>
  );
}
