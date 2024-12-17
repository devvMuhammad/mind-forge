import PageTitle from "@/components/page-title";
import { createClient } from "@/lib/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const { data: students, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "student");

  if (error) {
    console.error(error);
    return <h1>Error while loading students</h1>;
  }

  return (
    <>
      <PageTitle
        heading="Students"
        description="View All Registered Students"
        containsButton={false}
      />
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </>
  );
}
