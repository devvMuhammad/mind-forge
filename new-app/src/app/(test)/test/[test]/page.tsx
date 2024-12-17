import Test from "./Test";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { transformData } from "@/lib/transform";

export default async function page({
  params,
}: {
  params: Promise<{ test: string }>;
}) {
  const supabase = await createClient();
  const testId = (await params).test;

  const { data, error } = await supabase
    .from("tests")
    .select("*, questions(*)")
    .eq("id", testId);

  if (error) {
    console.log("error fetching data", error);
    redirect("/student/dashboard");
  }

  console.log("this is the data", data[0].title);
  const transformedData = transformData(data[0] as never);

  // return <pre>{JSON.strinArray.engineering} />;
  return <Test mcqBank={transformedData} />;
}
