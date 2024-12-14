import { formatDate, toTitleCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type TestDetailsProps = {
  category: string;
  lastChangedBy: string;
  lastChangedDate: Date;
  mcqsLength: number;
};

export default function TestDetails({
  category,
  lastChangedBy,
  lastChangedDate,
  mcqsLength,
}: TestDetailsProps) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Test Editor</h1>
        <Button>Fetch Latest Changes</Button>
      </div>
      <h3 className=" font-bold">
        Category: <span className="font-normal">{toTitleCase(category)}</span>{" "}
      </h3>
      <p>
        Last changed by <span className="font-bold">{lastChangedBy}</span> on{" "}
        <span className="font-bold">{formatDate(lastChangedDate)}</span>
      </p>
      <p className="text-xl mt-4 pb-2">
        Current Questions <span className="font-bold">({mcqsLength})</span>
      </p>
    </>
  );
}
