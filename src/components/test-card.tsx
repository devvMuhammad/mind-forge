import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/utils";
import { TooltipProvider } from "./ui/tooltip";
import TestCardTooltips from "./test-card-tooltips";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

type TestCardProps = {
  title: string;
  id: string;
  createdAt: Date;
  category: string;
  questions: number;
};

export default function TestCard({
  title = "First Demo Test for Students Before NET",
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
        <TestCardProperty label="Test ID" value={id} />
        <TestCardProperty label="Category" value={category} />
        <TestCardProperty label="Questions" value={questions} />

        <div className="w-full flex justify-end">
          <Link
            href="/admin/editor/1"
            className={`px-6 ${buttonVariants({ size: "sm" })}`}
          >
            Edit Test{" "}
          </Link>
        </div>
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
      {label && <p>{label}:</p>}
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
}
