import { QuestionType } from "@/types";
import { Button } from "../ui/button";
import TemporaryQuestionCard from "./temporary-question-card";

export default function QuestionsToAdd({
  questionsToBeAdded,
  removeQuestion,
}: {
  questionsToBeAdded: QuestionType[];
  removeQuestion: (index: number) => void;
}) {
  return questionsToBeAdded.length <= 0 ? (
    <h1 className="text-lg text-center font-bold">
      Questions you want to add will appear here. <br /> Start adding some{" "}
    </h1>
  ) : (
    <div className="space-y-4">
      {questionsToBeAdded.length > 0 && (
        <div className="flex justify-end">
          <Button className="self-end">Add All</Button>
        </div>
      )}
      <div className="h-screen py-2 pl-4 space-y-2 border-l-2 overflow-y-auto">
        {questionsToBeAdded.map((question, index) => (
          <TemporaryQuestionCard
            key={question.question + index}
            number={index}
            question={question}
            removeQuestion={removeQuestion}
          />
        ))}
      </div>
    </div>
  );
}
