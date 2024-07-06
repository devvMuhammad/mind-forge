"use client";
import { Button } from "@repo/ui/components/ui/button";
import TemporaryQuestionCard from "./temporary-question-card";
import { useMutation } from "@tanstack/react-query";
import { addQuestions } from "@/app/actions/add-questions";
import { QuestionToBeAddedType } from "./editing-area";

type QuestionsToAddProps = {
  questionsToBeAdded: QuestionToBeAddedType[];
  removeQuestion: (index: number) => void;
  emptyQuestions: () => void;
};

export default function QuestionsToAdd({
  questionsToBeAdded,
  removeQuestion,
  emptyQuestions,
}: QuestionsToAddProps) {
  const { isPending, mutate } = useMutation({
    mutationFn: addQuestions,
    onSuccess: (data) => {
      console.log(data);
      emptyQuestions();
      // add toast later
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return questionsToBeAdded.length <= 0 ? (
    <h1 className="text-lg text-center font-bold">
      Questions you want to add will appear here. <br /> Start adding some{" "}
    </h1>
  ) : (
    <div className="space-y-4">
      {questionsToBeAdded.length > 0 && (
        <div className="flex justify-end">
          <Button
            className="self-end"
            disabled={isPending}
            onClick={() => mutate(questionsToBeAdded)}
          >
            Add All
          </Button>
        </div>
      )}
      <div className="h-screen py-2 pl-4 space-y-2 border-l-2 overflow-y-auto">
        {questionsToBeAdded.map((question, index) => (
          <TemporaryQuestionCard
            key={question.statement + index}
            number={index}
            question={question}
            removeQuestion={removeQuestion}
          />
        ))}
      </div>
    </div>
  );
}
