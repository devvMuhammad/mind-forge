import PageTitle from "@/components/page-title";
import TestsSkeleton from "@/components/tests/tests-skeleton";
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
        heading="Tests"
        description="These are the tests you have registerd for!"
        containsButton={false}
      />
      <Suspense fallback={<TestsSkeleton />}>
        <h1>Update with the number of tests</h1>
      </Suspense>
    </>
  );
}
