import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuestionType } from "@/types";
import { CardOperations } from "../card-operations";
import QuestionCardContextProvider from "@/contexts/question-card-context";

type QuestionCardProps = {
  index: number;
  question: QuestionType;
};

export default function QuestionCard({ index, question }: QuestionCardProps) {
  const optionIsCorrect = (index: number) => index === question.answer;
  return (
    <Card>
      <CardHeader className="pb-2 ">
        <div className="w-full flex justify-between">
          <CardTitle className="text-base">Question: {index + 1}</CardTitle>
          <CardOperations question={question} />
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <div key={index}>
          <p className="text-nowrap overflow-x-hidden text-ellipsis">
            {question.statement}
          </p>

          <ul className="mt-2">
            {question.options.length > 0 ? (
              question.options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2  text-nowrap overflow-x-hidden "
                >
                  <input
                    type="radio"
                    className="bg-red-500"
                    disabled={!optionIsCorrect(index)}
                    checked={optionIsCorrect(index)}
                    readOnly
                    // name={question.statement}
                  />
                  <p
                    className={`${
                      !optionIsCorrect(index) && "text-muted-foreground"
                    }`}
                  >
                    {option}
                  </p>
                </li>
              ))
            ) : (
              <pre>{JSON.stringify(question.options, null, 2)}</pre>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
