import PageTitle from "@/components/page-title";
import SelectCategory from "@/components/select-category";
import TestCard from "@/components/student/test-card";
import TestsSkeleton from "@/components/tests/tests-skeleton";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard",
};

async function getStudentCategory() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log("error in getStudentCategory", error);
    redirect("/");
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("category,name")
    .eq("id", data.user.id);
  if (profileError) {
    console.log("error in getStudentCategory", error);
    redirect("/");
  }

  return profileData[0];
}

export default async function Page() {
  const supabase = await createClient();
  const { category, name } = await getStudentCategory();
  if (!category) {
    return (
      <>
        <PageTitle
          heading={`Hi, ${name}!`}
          description="You need to select a category to start your attempts!"
          containsButton={false}
        />
        <Suspense fallback={<TestsSkeleton />}>
          <SelectCategory />
        </Suspense>
      </>
    );
  }

  const { data: tests } = await supabase
    .from("tests")
    .select("*, questions:questions(count)")
    .eq("category", category);

  return (
    <>
      <PageTitle
        heading="Tests"
        description="These are the tests you have registerd for!"
        containsButton={false}
      />
      <Suspense fallback={<TestsSkeleton />}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tests?.map((test) => (
            <TestCard
              key={test.id}
              id={test.id}
              title={test.title}
              questionsLength={test.questions[0]?.count ?? 0}
              category={test.category}
            />
          ))}
        </div>
      </Suspense>
    </>
  );
}
