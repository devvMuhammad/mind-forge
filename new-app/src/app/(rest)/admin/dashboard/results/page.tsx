/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/lib/supabase/server";
import { ResultsTable } from "./results";
import PageTitle from "@/components/page-title";

async function getResults() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("results")
    .select("id, created_at, scores, profiles(*), tests(*)");

  if (error) {
    console.error("Error fetching students:", error);
    throw new Error("Failed to fetch students");
  }

  return data;
}

export default async function Page() {
  const results = await getResults();

  if (!results || results.length === 0) {
    return <p>No results found</p>;
  }
  return (
    <>
      <PageTitle
        heading="Results"
        description="View Results of All Attempts Here"
        containsButton={false}
      />
      <ResultsTable data={results as any} />;
    </>
  );
}
