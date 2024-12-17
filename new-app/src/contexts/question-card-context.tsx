"use client";
import { PossibleSubjectType, QuestionType } from "@/types";
import { createContext, useContext } from "react";

type QuestionCardContextType = {
  question: QuestionType;
  subject: PossibleSubjectType;
  testId: string;
};

const QuestionCardContext = createContext({} as QuestionCardContextType);

type ProviderProps = {
  value: QuestionCardContextType;
  children: React.ReactNode;
};

export default function QuestionCardContextProvider({
  value,
  children,
}: ProviderProps) {
  return (
    <QuestionCardContext.Provider value={value}>
      {children}
    </QuestionCardContext.Provider>
  );
}

export function useQuestionCardContext() {
  return useContext(QuestionCardContext);
}
