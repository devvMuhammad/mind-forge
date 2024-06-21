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

type QuestionCardProps = {
  index: number;
  question: QuestionType;
};

export default function QuestionCard({ index, question }: QuestionCardProps) {
  const optionIsCorrect = (index: number) => index === question.answer;
  return (
    <Card>
      <CardHeader className="pb-2 ">
        <CardTitle className="text-base">Question: {index + 1}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div key={index}>
          <p className="text-nowrap overflow-x-hidden text-ellipsis">
            {question.statement}
          </p>
          <ul className="mt-2">
            {question.options.map((option, index) => (
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
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View</Button>
        <div className="flex gap-2">
          <Button size="icon">
            <Icons.edit />
          </Button>
          <Button variant="destructive" size="icon">
            <Icons.trash />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
