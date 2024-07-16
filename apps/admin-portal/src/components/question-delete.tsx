import { DropdownMenuItem } from "@repo/ui/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@repo/ui/components/ui/alert-dialog";

import React from "react";
import { Icons } from "./icons";
import { useQuestionCardContext } from "@/contexts/question-card-context";
import { useMutation } from "@tanstack/react-query";
import { deleteQuestion } from "@/app/actions/delete-question";

export default function QuestionDelete() {
  const {
    testId,
    question: { id: questionId },
  } = useQuestionCardContext();
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);

  const { isPending, mutate } = useMutation({
    mutationFn: deleteQuestion,
    onSuccess: (data) => {
      console.log(data);
      if (data?.error) return;
      setShowDeleteAlert(false);
    },
    onError: (err) => console.log(err),
  });

  return (
    <>
      <DropdownMenuItem
        className="bg-red-500 text-white cursor-pointer"
        onSelect={(e) => {
          e.preventDefault();
          setShowDeleteAlert(true);
        }}
      >
        Delete
      </DropdownMenuItem>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this snippet?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                mutate({ testId, questionId: questionId as number });
              }}
              className="bg-red-600 focus:ring-red-600"
              disabled={isPending}
            >
              <Icons.trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
