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

type TemporaryQuestionCardProps = {
  number: number;
  question: QuestionType;
  removeQuestion: (index: number) => void;
};

export default function TemporaryQuestionCard({
  number,
  question,
  removeQuestion,
}: TemporaryQuestionCardProps) {
  const optionIsCorrect = (index: number) => index === question.answer;
  const onDelete = () => removeQuestion(number); // number is actually the index here
  return (
    <Card className="relative">
      <CardHeader className="pb-2 ">
        <CardTitle className="text-base">Question: {number + 1}</CardTitle>
        <Button
          onClick={onDelete}
          className="absolute right-4 top-4"
          variant="destructive"
          size="icon"
        >
          <Icons.trash />
        </Button>
      </CardHeader>
      <CardContent className="text-sm">
        <div>
          <p className="text-nowrap overflow-x-hidden text-ellipsis">
            {question.statement}
          </p>
          <ul className="mt-2">
            {question.options.map((option, currentIndex) => (
              <li
                key={currentIndex}
                className="flex items-center gap-2  text-nowrap overflow-x-hidden "
              >
                <input
                  type="radio"
                  className="bg-red-500"
                  disabled={!optionIsCorrect(currentIndex)}
                  checked={optionIsCorrect(currentIndex)}
                  readOnly
                />
                <p
                  className={`${
                    !optionIsCorrect(currentIndex) && "text-muted-foreground"
                  }`}
                >
                  {option}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
