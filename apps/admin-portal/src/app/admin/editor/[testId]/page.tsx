import SubjectQuestions from "@/components/editor/subject-questions";
import TestDetails from "@/components/editor/test-details";
import { QuestionType, SubjectType, TestType } from "@/types";
import { redirect } from "next/navigation";
import { buttonVariants } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Json } from "@/types/supabase";
import { convertToPKT } from "@repo/utils/date";

type TestEditorPageProps = {
  params: {
    testId: string;
  };
};

type TestEditorPageData = {
  testData: TestType;
  mcqsLength: number;
};

function TransformDBQuestions(
  questions: {
    id: number;
    answer: number;
    explanation: string | null;
    options: Json;
    statement: string;
    subject:
      | "mathematics"
      | "physics"
      | "chemistry"
      | "english"
      | "iq"
      | "biology"
      | "computer"
      | "basic_maths";
  }[],
): SubjectType[] {
  return questions.reduce((acc: SubjectType[], curr) => {
    const newQuestion = {
      id: curr.id,
      answer: curr.answer,
      explanation: curr.explanation,
      options: curr.options as QuestionType["options"],
      statement: curr.statement,
    };
    const subjectIndex = acc.findIndex(
      (subject) => subject.subject === curr.subject,
    );
    if (subjectIndex === -1)
      acc.push({
        subject: curr.subject,
        questions: [newQuestion],
      });
    else acc[subjectIndex].questions.push(newQuestion);

    return acc;
  }, []);
}

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
      .select(
        "*, questions(id, answer, explanation, options, statement, subject)",
      )
      .eq("id", testId)
      .single()
  ).data;
  if (!testDetails) redirect("/admin/dashboard");

  const questions = TransformDBQuestions(testDetails.questions);

  // ! i think i can do this with the above query as well, i dont think this will be needed LOL
  // const questions = await getQuestions(testId);
  // console.log("here are the questions", questions[0].questions);
  return (
    <section>
      {/* <pre>{JSON.stringify(questions, null, 2)}</pre> */}

      <TestDetails
        category={testDetails.category}
        mcqsLength={testDetails.questions.length}
        lastChangedBy={testDetails.last_changed_by}
        lastChangedDate={convertToPKT(new Date(testDetails.last_changed))}
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
          mcqs={questions}
        />
      ) : (
        <p>No Questions Found</p>
      )}
    </section>
  );
}
