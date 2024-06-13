import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";

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
      <p>{category}</p>
      <p>
        Last changed by <span className="font-bold">{lastChangedBy}</span> on{" "}
        <span className="font-bold">{formatDate(lastChangedDate)}</span>
      </p>
      <p className="text-xl mt-4 border-b-2 pb-2">
        Current Questions <span className="font-bold">({mcqsLength})</span>
      </p>
    </>
  );
}
