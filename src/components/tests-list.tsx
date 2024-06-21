import TestCard from "@/components/test-card";
import { prisma } from "@/lib/prisma";

async function getTests() {
  const data = await prisma.tests.findMany({
    include: {
      questions: true,
    },
  });
  console.log(data);
  return data;
}

export default async function TestsList() {
  const data = await getTests();
  return data.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((test) => (
        <TestCard
          key={test.id}
          id={test.id}
          title={test.title}
          category={test.category}
          questionsLength={test.questions.length}
          attempts={test.attempts}
          createdAt={test.createdAt}
          lastChanged={test.lastChanged}
        />
      ))}
    </div>
  ) : (
    <h1 className="text-xl">
      No Snippets found at the moment. Start adding some by creating some :)
    </h1>
  );
}
