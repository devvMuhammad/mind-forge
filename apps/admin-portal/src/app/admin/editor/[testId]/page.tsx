import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";
import { TestType } from "@/types";
// import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getQuestions } from "@/app/actions/get-questions";
import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

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
  const supabase = createClient();
  // const testDetails = await prisma.tests.findUnique({
  //   where: { id: testId },
  //   include: { questions: true },
  // });
  const testDetails = (
    await supabase
      .from("tests")
      .select("*, questions(*)")
      .eq("id", testId)
      .single()
  ).data;
  if (!testDetails) redirect("/admin/dashboard");

  // ! i think i can do this with the above query as well, i dont think this will be needed LOL
  // const questions = await getQuestions(testId);
  // console.log("here are the questions", questions[0].questions);
  return (
    <section>
      <pre>{JSON.stringify(testDetails, null, 2)}</pre>
    </section>
  );
}

{
  /* <TestDetails
  category={testDetails.category}
  mcqsLength={testDetails.questions.length}
  lastChangedBy={testDetails.last_changed_by}
  lastChangedDate={new Date(testDetails.last_changed)}
/>
<div className="flex items-center gap-2">
  <Link
    className={buttonVariants()}
    href={`/admin/editor/${testId}/add-questions?category=${testDetails.category}`}
  >
    + Add Questions Here
  </Link>
</div>
{testDetails.questions.length > 0 ? (
  <SubjectQuestions
    testId={testId}
    testCategory={testDetails.category}
    // mcqs={questions}
  />
) : (
  <p>No Questions Found</p>
)} */
}
