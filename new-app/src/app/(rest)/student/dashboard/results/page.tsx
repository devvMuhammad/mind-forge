import PageTitle from "@/components/page-title";
import TestsSkeleton from "@/components/tests/tests-skeleton";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import StudentResultsTable from "./student-results-table";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const supabase = await createClient();

  const { data: tests } = await supabase
    .from("results")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <PageTitle
        heading="Results"
        description="View the results of all your attempts here!"
        containsButton={false}
      />
      <Suspense fallback={<TestsSkeleton />}>
        {!tests || tests?.length > 0 ? (
          <StudentResultsTable attempts={tests || []} />
        ) : (
          <NoAttempts />
        )}
      </Suspense>
    </>
  );
}

function NoAttempts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <span className="text-8xl mb-4">📝</span>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Attempts Yet
      </h2>
      <p className="text-gray-600">
        Take your first test to see your results here!
      </p>
    </div>
  );
}
