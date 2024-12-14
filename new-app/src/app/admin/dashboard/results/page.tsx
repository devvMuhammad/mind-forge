import PageTitle from "@/components/page-title";
import ResultsTable from "@/components/results-table";

export const metadata = {
  title: "Students",
};

export default function Page() {
  return (
    <>
      <PageTitle
        heading="Students"
        description="View Students' Results here in form of a table"
        containsButton={false}
      />
      <ResultsTable />
    </>
  );
}
