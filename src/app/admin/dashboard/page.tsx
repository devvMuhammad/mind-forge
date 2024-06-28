import CreateTestButton from "@/components/create-test";
import TestsList from "@/components/tests/tests-list";
import TestsSkeleton from "@/components/tests/tests-skeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <>
      <div className="flex items-center justify-between px-2">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex pt-2 justify-between">
            <h1 className="font-semibold text-2xl md:text-3xl">Snippets</h1>
            <CreateTestButton />
          </div>
          <p className="text-base text-muted-foreground">
            View, Create, Delete & Edit your Snippets here
          </p>
        </div>
      </div>
      <Suspense fallback={<TestsSkeleton />}>
        <TestsList />
      </Suspense>
    </>
  );
}
