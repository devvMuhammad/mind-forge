import PageTitle from "@/components/page-title";
import ResultsTable from "@/components/results-table";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Students",
};

export default async function Page() {
  const supabase = await createClient();
  const { data: results, error } = await supabase
    .from("results")
    .select("*, profiles(*) ")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return <h1>Error while loading students</h1>;
  }

  return (
    <>
      <PageTitle
        heading="Students"
        description="View Students' Results here in form of a table"
        containsButton={false}
      />
      <ResultsTable />
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </>
  );
}
