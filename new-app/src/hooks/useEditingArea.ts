import { useState } from "react";
import {
  PossibleCategoryType,
  PossibleSubjectType,
  QuestionType,
} from "@/types";
import { SubjectTypesForCategory } from "@/config/tests";

export type QuestionToBeAddedType = QuestionType & {
  test_id: string;
  subject: PossibleSubjectType;
};

export function useEditingArea(
  currentCategory: PossibleCategoryType,
  testId: string
) {
  const [currentSubject, setCurrentSubject] = useState<
    SubjectTypesForCategory<typeof currentCategory> | undefined
  >();
  const [questionsToBeAdded, setQuestionsToBeAdded] = useState<
    QuestionToBeAddedType[]
  >([]);

  // async is added here just so it can be passed to the useMutation hook because  the mutationFn requires a function that returns a promise
  const addQuestion = async (newQuestion: QuestionType) => {
    setQuestionsToBeAdded([
      ...questionsToBeAdded,
      // test_id here cuz in db, this is the actual name
      {
        test_id: testId,
        subject: currentSubject as PossibleSubjectType,
        ...newQuestion,
      },
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
