import { toTitleCase } from "@/lib/utils";
import { PossibleSubjectType, SubjectType } from "@/types";
import QuestionCard from "./question-card";
import QuestionCardContextProvider from "@/contexts/question-card-context";

type SubjectQuestionsProps = {
  testId: string;
  testCategory: string;
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
      </div>
      {/* //!Subject MCQs Start Here */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {subject.questions.map((question, index) => (
          <QuestionCardContextProvider
            key={question.id}
            value={{
              testId,
              subject: subject.subject as PossibleSubjectType,
              question,
            }}
          >
            <QuestionCard key={question.id} index={index} question={question} />
          </QuestionCardContextProvider>
        ))}
      </div>
    </div>
  ));
}
