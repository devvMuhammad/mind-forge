import EditingArea from "@/components/add-questions/editing-area";
import { testsConfig } from "@/config/tests";
import { redirect } from "next/navigation";

type AddQuestionsEditorProps = {
  params: Promise<{ testId: string }>;
  searchParams: Promise<{ category: string; subject: string }>;
};

export default async function page({
  params,
  searchParams,
}: AddQuestionsEditorProps) {
  const { testId } = await params;
  const { category } = await searchParams;

  console.log({ category });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!category || testsConfig.categories.indexOf(category as any) === -1) {
    redirect(`/admin/editor/${testId}`);
  }
  // !fetch the title properties based on the testID and then pass it onto the questions title
  //? or a better way would be to fetch the data using context
  return (
    <section>
      <h1 className="text-2xl font-bold">Interface for Adding MCQs</h1>
      <EditingArea testId={testId} currentCategory={category} />
    </section>
  );
}
