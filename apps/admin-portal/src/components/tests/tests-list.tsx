import TestCard from "@/components/tests/test-card";
import { createClient } from "@/lib/supabase/server";

export default async function TestsList() {
  const supabase = createClient();
  const data = (await supabase.from("tests").select("*, questions(*)")).data;

  if (!data || data.length === 0)
    return (
      <h1 className="text-xl">
        No Snippets found at the moment. Start adding some by creating some :)
      </h1>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((test) => (
        <TestCard
          key={test.id}
          id={test.id}
          title={test.title}
          category={test.category}
          questionsLength={test.questions.length}
          attempts={test.attempts}
          createdAt={new Date(test.created_at)}
          lastChanged={new Date(test.last_changed)}
        />
      ))}
    </div>
  );
}
