import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import TestCardTooltips from "./test-card-tooltips";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { toTitleCase } from "@/lib/utils";
import { convertToPKT } from "@/lib/date";

type TestCardProps = {
  title: string;
  id: string;
  category: string;
  questionsLength: number;
  createdAt: Date;
  lastChanged: Date;
  attempts: number;
};

export default function TestCard({
  title,
  id,
  category,
  questionsLength,
  attempts,
  createdAt,
  lastChanged,
}: TestCardProps) {
  return (
    <Card>
      {/* CARD CONTENT */}
      <CardContent className="w-full flex flex-col justify-between p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <TestCardProperty label="Test ID" value={id} />
        <TestCardProperty label="Category" value={toTitleCase(category)} />
        <TestCardProperty label="Questions" value={questionsLength} />

        <div className="w-full flex justify-end">
          <Link
            href={`/admin/editor/${id}`}
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
            createdAt={convertToPKT(createdAt)}
            attempts={attempts}
            lastChanged={convertToPKT(lastChanged)}
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
    <div className="grid grid-cols-[auto_1fr] gap-2">
      {label && <p>{label}:</p>}
      <p className="text-muted-foreground text-nowrap overflow-x-hidden text-ellipsis">
        {value}
      </p>
    </div>
  );
}
