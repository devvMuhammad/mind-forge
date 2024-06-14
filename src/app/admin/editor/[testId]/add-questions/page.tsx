import { toTitleCase } from "@/lib/utils";
import EditingArea from "@/components/add-questions/editing-area";

export default function page({
  params: { testId },
}: {
  params: { testId: string };
}) {
  // !fetch the title properties based on the testID and then pass it onto the questions title
  const dummyFetchedData = {
    title: "Demo Test for Engineering Before NET-4",
    category: "pre-engineering",
    subject: "Mathematics",
  };
  const { title, category, subject } = dummyFetchedData;
  return (
    <section>
      <AddQuestionsTitle title={title} category={category} subject={subject} />
      <EditingArea />
    </section>
  );
}

type AddQuestionsTitleProps = {
  title: string;
  category: string;
  subject: string;
};
function AddQuestionsTitle({
  title,
  category,
  subject,
}: AddQuestionsTitleProps) {
  return (
    <>
      <h1 className="text-2xl font-bold">Interface for Adding MCQs</h1>
      <h3 className=" font-bold">
        Title: <span className="font-normal">{title}</span>{" "}
      </h3>
      <h3 className=" font-bold">
        Category: <span className="font-normal">{toTitleCase(category)}</span>{" "}
      </h3>
      <h3 className=" font-bold">
        Subject: <span className="font-normal">{toTitleCase(subject)}</span>{" "}
      </h3>
    </>
  );
}
