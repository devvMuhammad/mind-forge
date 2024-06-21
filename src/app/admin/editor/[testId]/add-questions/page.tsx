import { toTitleCase } from "@/lib/utils";
import EditingArea from "@/components/add-questions/editing-area";
import { testsConfig } from "@/config/tests";
import { redirect } from "next/navigation";

export default function page({
  params: { testId },
  searchParams: { subject },
}: {
  params: { testId: string };
  searchParams: { subject: string };
}) {
  // console.log(searchParams);
  if (!subject || testsConfig.subjects.indexOf(subject as any) === -1) {
    redirect(`/admin/dashboard/${testId}`);
  }
  // !fetch the title properties based on the testID and then pass it onto the questions title
  //? or a better way would be to fetch the data using context
  return (
    <section>
      <AddQuestionsTitle subject={subject} />
      <EditingArea testId={testId} currentSubject={subject} />
    </section>
  );
}

type AddQuestionsTitleProps = {
  // title: string;
  // category: string;
  subject: string;
};
function AddQuestionsTitle({
  // title,
  // category,
  subject,
}: AddQuestionsTitleProps) {
  return (
    <>
      <h1 className="text-2xl font-bold">Interface for Adding MCQs</h1>
      {/* <h3 className=" font-bold">
        Title: <span className="font-normal">{title}</span>{" "}
      </h3> */}
      {/* <h3 className=" font-bold">
        Category: <span className="font-normal">{toTitleCase(category)}</span>{" "}
      </h3> */}
      <h3 className=" font-bold">
        Subject: <span className="font-normal">{toTitleCase(subject)}</span>{" "}
      </h3>
    </>
  );
}
