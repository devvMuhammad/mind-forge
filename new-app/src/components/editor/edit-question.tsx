"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QuestionType } from "@/types";

const EditQuestionSchema = z.object({
  question: z.string().min(1, "Question is required"),
  option1: z.string().min(1, "Option 1 is required"),
  option2: z.string().min(1, "Option 2 is required"),
  option3: z.string().min(1, "Option 3 is required"),
  option4: z.string().min(1, "Option 4 is required"),
  "correct-option": z.string().min(1, "Correct option is required"),
  explanation: z.string().min(1, "Explanation is required"),
});
type TEditQuestionSchema = z.infer<typeof EditQuestionSchema>;

type EditQuestionProps = { questionData: QuestionType };

export default function EditQuestion({ questionData }: EditQuestionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditQuestionSchema>({
    defaultValues: {
      question: questionData.statement,
      option1: questionData.options[0],
      option2: questionData.options[1],
      option3: questionData.options[2],
      option4: questionData.options[3],
      "correct-option": questionData.answer.toString(),
      explanation: questionData.explanation || "",
    },
    resolver: zodResolver(EditQuestionSchema),
  });
  const onSubmit = (data: TEditQuestionSchema) => {
    console.log(data);
  };
  const options =
    questionData?.options || (Array(4).fill("") as QuestionType["options"]);

  return (
    <Dialog onOpenChange={() => alert("hi")}>
      <DialogTrigger asChild>
        <Button size="sm">+ Add Question</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Create Question</DialogTitle>
          <DialogDescription>
            Fill out the fields to create a new question for your quiz.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* question statement */}
          <div className="grid gap-2">
            <Label htmlFor="question">Question Statement</Label>
            <Textarea
              {...register("question")}
              id="question"
              placeholder="Enter the question statement"
            />
            {errors.question && (
              <p className="text-red-500">{errors.question.message}</p>
            )}
          </div>
          {/* question options */}
          {options.map((option, i) => (
            <div key={option + i} className="grid gap-2">
              <Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
              <Textarea
                id={`option${i + 1}`}
                placeholder="Enter the first option"
              />
              {errors[`option${i + 1}` as keyof typeof errors] && (
                <p className="text-red-500">
                  {errors[`option${i + 1}` as keyof typeof errors]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="grid gap-2">
            <Label htmlFor="correct-option">Correct Option</Label>
            <Select defaultValue="1">
              <SelectTrigger id="correct-option">
                <SelectValue placeholder="Select correct option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
                <SelectItem value="4">Option 4</SelectItem>
              </SelectContent>
            </Select>
            {errors["correct-option"] && (
              <p className="text-red-500">{errors["correct-option"].message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="explanation">Explanation</Label>
            <Textarea
              id="explanation"
              placeholder="Enter the explanation for the correct answer"
              className="min-h-[100px]"
            />
            {errors.explanation && (
              <p className="text-red-500">{errors.explanation.message}</p>
            )}
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Save Question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
