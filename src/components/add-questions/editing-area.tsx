"use client";

import { useState } from "react";
import AddQuestionsForm from "./add-questions-form";
import { QuestionType } from "@/types";
import QuestionsToAdd from "./questions-to-add";

export default function EditingArea() {
  const [questionsToBeAdded, setQuestionsToBeAdded] = useState<QuestionType[]>(
    []
  );
  const addQuestion = (newQuestion: QuestionType) => {
    setQuestionsToBeAdded([...questionsToBeAdded, newQuestion]);
  };
  // temporary id in clinet will be the index
  const removeQuestion = (questionTempId: number) => {
    setQuestionsToBeAdded((prev) =>
      prev.filter((_, i) => i !== questionTempId)
    );
  };
  // to be done after submitting the questions successfully
  const emptyQuestion = () => setQuestionsToBeAdded([]);
  return (
    <div className="grid gap-4 grid-cols-2">
      <AddQuestionsForm addQuestion={addQuestion} />
      <QuestionsToAdd
        questionsToBeAdded={questionsToBeAdded}
        removeQuestion={removeQuestion}
      />
    </div>
  );
}
