import { useState } from "react";
import { QuestionType } from "@/types";
import { $Enums } from "@prisma/client";
import { SubjectTypesForCategory } from "@/config/tests";
import { QuestionToBeAddedType } from "@/components/add-questions/editing-area";

export function useEditingArea(
  currentCategory: $Enums.TestCategory,
  testId: string
) {
  const [currentSubject, setCurrentSubject] = useState<
    SubjectTypesForCategory<typeof currentCategory> | undefined
  >();
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

  return {
    addQuestion,
    removeQuestion,
    emptyQuestions,
    currentSubject,
    setCurrentSubject,
    questionsToBeAdded,
  };
}
