import CreateTestButton from "@/components/create-test";
import TestCard from "@/components/test-card";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Dashboard",
};

async function getTests() {
  return await prisma.tests.findMany({
    include: {
      questions: true,
    },
  });
}

export default async function Page() {
  // const data = await checkServerSession();
  // console.log("data inside the server component", data);
  // if (data.error) redirect("/login");
  // const tests = await prisma.tests.findMany();
  // console.log(tests);
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TestCard />
      </div>
    </>
  );
}
