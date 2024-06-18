import { Button, buttonVariants } from "@/components/ui/button";
import { toTitleCase } from "@/lib/utils";
import { SubjectType } from "@/types";
import { ChevronDown } from "lucide-react";
import QuestionCard from "./question-card";
import Link from "next/link";

type SubjectQuestionsProps = {
  testId: string;
  mcqs: SubjectType[];
};
export default function SubjectQuestions({
  testId,
  mcqs,
}: SubjectQuestionsProps) {
  return mcqs.map((subject) => (
    <div key={subject.subject} className="space-y-4">
      {/* Subject Title */}
      <div className="flex items-center justify-between mt-4 border-b-2 pb-2">
        <p className="text-xl">
          {toTitleCase(subject.subject)}{" "}
          <span className="font-bold">({subject.questions.length})</span>
        </p>
        <div className="flex items-center gap-2">
          <Link
            className={buttonVariants({ size: "sm" })}
            href={`/admin/editor/${testId}/add-questions`}
          >
            + Add Question
          </Link>
          <ChevronDown className="cursor-pointer" />
        </div>
      </div>
      {/* //!Subject MCQs Start Here */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {subject.questions.map((question, index) => (
          <QuestionCard
            key={question.statement}
            number={index + 1}
            question={question}
          />
        ))}
      </div>
    </div>
  ));
}
