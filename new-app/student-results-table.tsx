"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { ViewIcon } from "lucide-react";

type Score = {
  score: number;
  total: number;
  subject: string;
};

type AttemptData = {
  id: number;
  created_at: string;
  test_id: string;
  scores: Score[];
  total: number;
  wrong: Array<{
    subject: string;
    wrongIndices: number[];
  }>;
};

const ScoresDialog = ({ scores }: { scores: Score[] }) => (
  <Dialog>
    <DialogTrigger asChild>
      {/* <Button size="icon" variant="outline"> */}
      <ViewIcon />
      {/* </Button> */}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Attempt Scores</DialogTitle>
      </DialogHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scores.map((score, index) => (
            <TableRow key={index}>
              <TableCell className="capitalize">{score.subject}</TableCell>
              <TableCell>{score.score}</TableCell>
              <TableCell>{score.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DialogContent>
  </Dialog>
);

export default function StudentResultsTable({
  attempts,
}: {
  attempts: AttemptData[];
}) {
  return (
    <div className="w-full">
      <Table>
        <TableCaption>Test Attempts Overview</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Attempt #</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Test ID</TableHead>
            <TableHead>Total Score</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attempts.map((attempt) => (
            <TableRow key={attempt.id}>
              <TableCell className="font-medium">{attempt.id}</TableCell>
              <TableCell>
                {format(new Date(attempt.created_at), "MMM d, yyyy HH:mm")}
              </TableCell>
              <TableCell className="font-mono text-sm">
                {attempt.test_id.slice(0, 8)}...
              </TableCell>
              <TableCell>{attempt.total}</TableCell>
              <TableCell>
                <ScoresDialog scores={attempt.scores} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
