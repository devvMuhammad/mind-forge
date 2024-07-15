import { getSession } from "@/app/actions/auth";
import CreateTestButton from "@/components/create-test";
import PageTitle from "@/components/page-title";
import TestsList from "@/components/tests/tests-list";
import TestsSkeleton from "@/components/tests/tests-skeleton";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  //! check this later and replace the protection part by middleware
  // const { data, error } = await getSession();
  // if (!data || error) {
  //   redirect("/auth/login");
  // }
  return (
    <>
      <PageTitle
        heading="Snippets"
        description="View, Create, Delete & Edit your Snippets here"
        containsButton={true}
        button={<CreateTestButton />}
      />
      <Suspense fallback={<TestsSkeleton />}>
        <TestsList />
      </Suspense>
    </>
  );
}
