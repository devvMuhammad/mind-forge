import { toTitleCase } from "@/lib/utils";
import EditingArea from "@/components/add-questions/editing-area";
import { subjectsForCategories, testsConfig } from "@/config/tests";
import { redirect } from "next/navigation";
import { Label } from "@/components/ui/label";
import { $Enums } from "@prisma/client";

type AddQuestionsEditorProps = {
  params: { testId: string };
  searchParams: { category: string; subject: string };
};

const validateSearchParams = ({
  subject,
  category,
  testId,
}: Pick<AddQuestionsEditorProps, "searchParams">["searchParams"] & {
  testId: string;
}) => {
  if (
    !category ||
    !subject ||
    testsConfig.categories.indexOf(category as any) === -1
  ) {
    if (
      !subjectsForCategories[category as $Enums.TestCategory].includes(
        subject as any,
      )
    ) {
      redirect(`/admin/dashboard/${testId}`);
    }
  }
};

export default function page({
  params: { testId },
  searchParams: { category },
}: AddQuestionsEditorProps) {
  console.log({ category });
  if (!category || testsConfig.categories.indexOf(category as any) === -1) {
    redirect(`/admin/editor/${testId}`);
  }
  // !fetch the title properties based on the testID and then pass it onto the questions title
  //? or a better way would be to fetch the data using context
  return (
    <section>
      <h1 className="text-2xl font-bold">Interface for Adding MCQs</h1>
      <EditingArea
        testId={testId}
        currentCategory={category as $Enums.TestCategory}
      />
    </section>
  );
}
