import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toTitleCase } from "@/lib/utils";
import { SubjectType } from "@/types";
import { ChevronDown } from "lucide-react";
import QuestionCard from "./question-card";

export default function SubjectQuestions({ mcqs }: { mcqs: SubjectType[] }) {
  return mcqs.map((subject, index) => (
    <div key={subject.subject} className="space-y-4">
      {/* Subject Title */}
      <div className="flex items-center justify-between mt-4 border-b-2 pb-2">
        <p className="text-xl">
          {toTitleCase(subject.subject)}{" "}
          <span className="font-bold">({subject.questions.length})</span>
        </p>
        <div className="flex items-center gap-2">
          <Button size="sm">+ Add Question</Button>
          <ChevronDown className="cursor-pointer" />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* //!Subject MCQs Start Here */}
        {subject.questions.map((question, index) => (
          <QuestionCard
            key={question.question}
            number={index + 1}
            question={question}
          />
        ))}
      </div>
    </div>
  ));
}
