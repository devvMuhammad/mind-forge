"use client";
import { QuestionType } from "@/types";
import { $Enums } from "@prisma/client";
import { createContext, useContext } from "react";

type QuestionCardContextType = {
  question: QuestionType;
  subject: $Enums.QuestionSubject;
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
