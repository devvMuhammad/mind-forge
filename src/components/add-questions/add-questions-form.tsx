"use client";

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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QuestionType } from "@/types";
import { Dispatch, SetStateAction } from "react";

const EditQuestionSchema = z.object({
  question: z.string().min(1, { message: "Question is required" }),
  option1: z.string().min(1, { message: "Option 1 is required" }),
  option2: z.string().min(1, { message: "Option 2 is required" }),
  option3: z.string().min(1, { message: "Option 3 is required" }),
  option4: z.string().min(1, { message: "Option 4 is required" }),
  "correct-option": z.string().min(1, "Correct option is required"),
  explanation: z.string().optional(),
});

type TEditQuestionSchema = z.infer<typeof EditQuestionSchema>;
type AddQuestionsFormProps = {
  addQuestion: (question: QuestionType) => void;
};

export default function AddQuestionsForm({
  addQuestion,
}: AddQuestionsFormProps) {
  // console.log("params in add questions page", testId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TEditQuestionSchema>({
    resolver: zodResolver(EditQuestionSchema),
  });
  const onSubmit = (data: TEditQuestionSchema) => {
    // perform some data transformations
    const transformedOptions = [
      data.option1,
      data.option2,
      data.option3,
      data.option4,
    ];
    // remember that we obtain either 0,1,2,3 from the correct option field
    const transformedCorrectAnswer =
      transformedOptions[+data["correct-option"]];
    const transformedData = {
      question: data.question,
      options: transformedOptions as QuestionType["options"],
      correctAnswer: transformedCorrectAnswer,
      explanation: data.explanation,
    } satisfies QuestionType;

    addQuestion(transformedData);
  };
  const options = Array(4).fill("") as QuestionType["options"];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      {/* @Question statement */}
      <div className="grid gap-2">
        <Label htmlFor="question">Question Statement</Label>
        <Controller
          control={control}
          name="question"
          render={({ field: { value, onBlur, onChange } }) => (
            <Textarea
              id="question"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Enter the question statement"
            />
          )}
        />

        {errors.question && (
          <p className="text-red-500">{errors.question.message}</p>
        )}
      </div>
      {/* @Question options */}
      {options.map((option, i) => (
        <div key={option} className="grid gap-2">
          <Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
          <Controller
            control={control}
            name={`option${i + 1}` as keyof TEditQuestionSchema}
            render={({ field: { value, onBlur, onChange } }) => (
              <Textarea
                id={`option${i + 1}`}
                placeholder="Enter the first option"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors[`option${i + 1}` as keyof typeof errors] && (
            <p className="text-red-500">
              {errors[`option${i + 1}` as keyof typeof errors]?.message}
            </p>
          )}
        </div>
      ))}
      {/* @Correct Option */}
      <div className="grid gap-2">
        <Label htmlFor="correct-option">Correct Option</Label>

        <Controller
          control={control}
          name="correct-option"
          render={({ field: { value, onChange } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger id="correct-option">
                <SelectValue placeholder="Select correct option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Option 1</SelectItem>
                <SelectItem value="1">Option 2</SelectItem>
                <SelectItem value="2">Option 3</SelectItem>
                <SelectItem value="3">Option 4</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors["correct-option"] && (
          <p className="text-red-500">{errors["correct-option"].message}</p>
        )}
      </div>
      {/* @Explanation */}
      <div className="grid gap-2">
        <Label htmlFor="explanation">Explanation (Optional)</Label>
        <Controller
          control={control}
          name="explanation"
          render={({ field: { value, onChange } }) => (
            <Textarea
              value={value}
              onChange={onChange}
              id="explanation"
              placeholder="Enter the explanation for the correct answer"
              className="min-h-[100px]"
            />
          )}
        />
        {errors.explanation && (
          <p className="text-red-500">{errors.explanation.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
