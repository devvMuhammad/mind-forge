import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";

import PageTitle from "@/components/page-title";
import { StudentTable } from "@/components/student/student-table";
export const metadata = {
  title: "Students",
};

async function getStudents() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, created_at, name, category")
    .eq("role", "student");

  if (error) {
    console.error("Error fetching students:", error);
    throw new Error("Failed to fetch students");
  }

  return data;
}

export default async function Page() {
  const students = await getStudents();

  return (
    <>
      <PageTitle
        heading="Students"
        description="View All Registered Students"
        containsButton={false}
      />
      <Suspense fallback={<div>Loading students...</div>}>
        <StudentTable data={students} />
      </Suspense>
    </>
  );
}
