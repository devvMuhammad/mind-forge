"use client";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { DropdownMenuItem } from "@repo/ui/components/ui/dropdown-menu";
import QuestionForm from "./question-form-new";
import { QuestionType } from "@/types";
import { useQuestionCardContext } from "@/contexts/question-card-context";
import { editQuestion } from "@/app/actions/edit-question";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function QuestionEdit() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { subject, testId, question } = useQuestionCardContext();

  const { mutate, isPending } = useMutation({
    mutationFn: editQuestion,
    onSuccess: (data) => {
      if (data?.error) throw new Error(data.error.message);
      console.log(data.data);
      setDialogOpen(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

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
          submitHandler={mutate}
          subject={subject}
          testId={testId}
          questionId={question.id as number}
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
