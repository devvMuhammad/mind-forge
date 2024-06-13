import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/utils";
import { TooltipProvider } from "./ui/tooltip";
import TestCardTooltips from "./test-card-tooltips";

type TestCardProps = {
  title: string;
  id: string;
  createdAt: Date;
  category: string;
  questions: number;
};

export default function TestCard({
  title = "Hamara Pehla Demo Test",
  id = "19384",
  createdAt = new Date(),
  category = "Pre Engineering",
  questions = 75,
}: Partial<TestCardProps>) {
  return (
    <Card>
      {/* CARD CONTENT */}
      <CardContent className="w-full flex flex-col justify-between p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <TestCardProperty label="ID" value={id} />
        <TestCardProperty label="Category" value={category} />
        <TestCardProperty label="Questions" value={questions} />

        {/* <SnippetOperations /> */}
      </CardContent>
      <CardFooter className="border-t p-4">
        <TooltipProvider delayDuration={0}>
          <TestCardTooltips
            createdAt={new Date()}
            attempts={100}
            updatedAt={new Date()}
          />
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

function TestCardProperty({
  label,
  value,
}: {
  label?: string;
  value: string | number;
}) {
  return (
    <div className="flex gap-2">
      {label && <p className="font-bold">{label}:</p>}
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
}
