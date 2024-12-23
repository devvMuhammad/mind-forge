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
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { toTitleCase } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useEditingArea } from "@/hooks/useEditingArea";
import QuestionForm from "../question-form-new";

export default function EditingArea({
  testId,
  currentCategory,
}: {
  testId: string;
  currentCategory: $Enums.TestCategory;
}) {
  const {
    currentSubject,
    setCurrentSubject,
    addQuestion,
    questionsToBeAdded,
    removeQuestion,
    emptyQuestions,
  } = useEditingArea(currentCategory, testId);
  return (
    <>
      <SelectSubject
        currentCategory={currentCategory}
        currentSubject={currentSubject}
        setCurrentSubject={setCurrentSubject}
      />
      <div className="grid gap-4 grid-cols-2">
        <QuestionForm
          mode="add"
          submitHandler={addQuestion}
          subject={currentSubject}
        />
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
          <SelectValue placeholder="Select a subject" />
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
