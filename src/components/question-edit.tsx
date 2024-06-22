import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import QuestionForm from "./question-form";
import { QuestionType } from "@/types";
import { useQuestionCardContext } from "@/contexts/question-card-context";
import { editQuestion } from "@/app/actions/edit-question";
import { useState } from "react";

export default function QuestionEdit() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { subject, testId, question } = useQuestionCardContext();
  console.log(subject, testId, question);
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogHeader>
            <DialogTitle>Form to Edit Question</DialogTitle>
          </DialogHeader>
        </DialogHeader>
        {/* <EditQuestionForm /> */}
        <QuestionForm
          mode="edit"
          initialData={question}
          actionToPerformWithData={editQuestion}
          actionPerformedOnSuccess={() => setDialogOpen(false)}
          subject={subject}
          testId={testId}
          questionId={question.id as number}
        />
      </DialogContent>
    </Dialog>
  );
}
