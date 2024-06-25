import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";
import { TestType } from "@/types";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getQuestions } from "@/app/actions/get-questions";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

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
  const testDetails = await prisma.tests.findUnique({
    where: { id: testId },
    include: { questions: true },
  });
  if (!testDetails) redirect("/admin/dashboard");
  const questions = await getQuestions(testId);
  // console.log("here are the questions", questions[0].questions);
  return (
    <section>
      <TestDetails
        category={testDetails.category}
        mcqsLength={testDetails.questions.length}
        lastChangedBy={testDetails.lastChangedBy}
        lastChangedDate={testDetails.lastChanged}
      />
      <div className="flex items-center gap-2">
        <Link
          className={buttonVariants()}
          href={`/admin/editor/${testId}/add-questions?category=${testDetails.category}`}
        >
          + Add Questions Here
        </Link>
      </div>
      {questions.length > 0 ? (
        <SubjectQuestions
          testId={testId}
          testCategory={testDetails.category}
          mcqs={questions}
        />
      ) : (
        <p>No Questions Found</p>
      )}
    </section>
  );
}
