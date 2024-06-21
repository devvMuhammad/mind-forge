"use client";

import { useState } from "react";
import AddQuestionsForm from "./add-questions-form";
import { QuestionType } from "@/types";
import QuestionsToAdd from "./questions-to-add";
import { $Enums } from "@prisma/client";
import { SubjectTypesForCategory, subjectsForCategories } from "@/config/tests";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "../ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { toTitleCase } from "@/lib/utils";
import { Label } from "../ui/label";

export type QuestionToBeAddedType = QuestionType & {
  testId: string;
  subject: $Enums.QuestionSubject;
};

export default function EditingArea({
  testId,
  currentCategory,
}: {
  testId: string;
  currentCategory: $Enums.TestCategory;
}) {
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
  return (
    <>
      <SelectSubject
        currentCategory={currentCategory}
        currentSubject={currentSubject}
        setCurrentSubject={setCurrentSubject}
      />
      <div className="grid gap-4 grid-cols-2">
        <AddQuestionsForm addQuestion={addQuestion} />
        <QuestionsToAdd
          questionsToBeAdded={questionsToBeAdded}
          removeQuestion={removeQuestion}
          emptyQuestions={emptyQuestions}
        />
      </div>
    </>
  );
}

function SelectSubject({
  currentCategory,
  currentSubject,
  setCurrentSubject,
}: {
  currentCategory: $Enums.TestCategory;
  currentSubject: $Enums.QuestionSubject | undefined;
  setCurrentSubject: (sub: $Enums.QuestionSubject) => void;
}) {
  return (
    <div className="my-4 py-2 flex gap-2 items-center">
      <Label className="text-base" htmlFor="subject">
        Selected Subject
      </Label>
      <Select value={currentSubject} onValueChange={setCurrentSubject}>
        <SelectTrigger
          id="subject"
          className="h-10 px-4 rounded-md border-2 border-text-muted-foreground"
        >
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent id="subject">
          <SelectGroup>
            <SelectLabel>Subjects</SelectLabel>
            {subjectsForCategories[currentCategory].map((subject) => (
              <SelectItem key={subject} value={subject}>
                {toTitleCase(subject)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
