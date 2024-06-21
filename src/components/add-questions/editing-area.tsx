"use client";

import { useState } from "react";
import AddQuestionsForm from "./add-questions-form";
import { QuestionType } from "@/types";
import QuestionsToAdd from "./questions-to-add";
import { $Enums } from "@prisma/client";

export type QuestionToBeAddedType = QuestionType & {
  testId: string;
  subject: $Enums.QuestionSubject;
};

export default function EditingArea({
  testId,
  currentSubject,
}: {
  testId: string;
  currentSubject: string;
}) {
  const [questionsToBeAdded, setQuestionsToBeAdded] = useState<
    QuestionToBeAddedType[]
  >([]);
  const addQuestion = (newQuestion: QuestionType) => {
    setQuestionsToBeAdded([
      ...questionsToBeAdded,
      { testId, subject: currentSubject as any, ...newQuestion },
    ]);
  };
  // temporary id in clinet will be the index
  const removeQuestion = (questionTempId: number) => {
    setQuestionsToBeAdded((prev) =>
      prev.filter((_, i) => i !== questionTempId)
    );
  };
  // to be done after submitting the questions successfully
  const emptyQuestions = () => setQuestionsToBeAdded([]);
  return (
    <div className="grid gap-4 grid-cols-2">
      <AddQuestionsForm addQuestion={addQuestion} />
      <QuestionsToAdd
        questionsToBeAdded={questionsToBeAdded}
        removeQuestion={removeQuestion}
        emptyQuestions={emptyQuestions}
      />
    </div>
  );
}
