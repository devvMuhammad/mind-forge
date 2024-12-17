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
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Database } from "@/types/supabase";
import { EllipsisVertical } from "lucide-react";

type Score = {
  score: number;
  total: number;
  subject: string;
};

type AttemptData = Database["public"]["Tables"]["results"]["Row"];

const ScoresDialog = ({ scores }: { scores: Score[] }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="icon">
        <EllipsisVertical className="h-4 w-4" />
      </Button>
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
          {attempts.map((attempt, index) => (
            <TableRow key={attempt.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {format(new Date(attempt.created_at), "MMM d, yyyy HH:mm")}
              </TableCell>
              <TableCell className="font-mono text-sm">
                {attempt.test_id.slice(0, 8)}...
              </TableCell>
              <TableCell>{attempt.total}</TableCell>
              <TableCell>
                <ScoresDialog scores={attempt.scores as Score[]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
