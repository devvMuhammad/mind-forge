"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/ui/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QuestionToBeEditedType, QuestionType } from "@/types";
import { $Enums } from "@prisma/client";

const EditQuestionSchema = z.object({
  statement: z
    .string({
      required_error: "Question is required",
    })
    .trim()
    .min(1, { message: "Question is required" }),
  option1: z
    .string({ required_error: "Option 1 is required" })
    .trim()
    .min(1, { message: "Option 1 is required" }),
  option2: z
    .string({ required_error: "Option 2 is required" })
    .trim()
    .min(1, { message: "Option 2 is required" }),
  option3: z
    .string({ required_error: "Option 3 is required" })
    .trim()
    .min(1, { message: "Option 3 is required" }),
  option4: z
    .string({ required_error: "Option 4 is required" })
    .trim()
    .min(1, { message: "Option 4 is required" }),
  answer: z.coerce
    .number({
      invalid_type_error: "Answer index is required",
    })
    .min(0, { message: "Minimum index is 0" })
    .max(3, { message: "Maximum index is 3" }),
  explanation: z.string().nullable(),
});

type TEditQuestionSchema = z.infer<typeof EditQuestionSchema>;

function transformQuestionToSchemaForm(
  question: QuestionType | undefined,
): TEditQuestionSchema | undefined {
  if (question === undefined) return undefined;
  return {
    statement: question.statement,
    option1: question.options[0],
    option2: question.options[1],
    option3: question.options[2],
    option4: question.options[3],
    answer: question.answer,
    explanation: question.explanation,
  };
}

// type QuestionFormProps =
//   | {
//       mode: "edit";
//       initialData: QuestionType;
//       actionToPerformWithData: (data: QuestionToBeEditedType) => Promise<any>;
//       actionPerformedOnSuccess: () => void;
//       actionPerformedOnError?: (err: any) => void;
//       subject: $Enums.QuestionSubject;
//       testId: string;
//       questionId: number;
//     }
//   | {
//       mode: "add";
//       initialData?: undefined;
//       actionToPerformWithData: (data: QuestionType) => Promise<any>;
//       actionPerformedOnSuccess?: undefined;
//       actionPerformedOnError?: undefined;
//       subject: string | undefined; // needed to ensure button is disabled if no subject is selected from the select element
//       testId?: undefined;
//       questionId?: undefined;
//     };

type QuestionFormProps =
  | {
      mode: "edit";
      initialData: QuestionType;
      submitHandler: (data: QuestionToBeEditedType) => void;
      // will be provided in case of edit
      subject: $Enums.QuestionSubject;
      testId: string;
      questionId: number;
      // isPending state for the button
      isPending: boolean;
    }
  | {
      mode: "add";
      submitHandler: (data: QuestionType) => void;
      // needed to ensure button is disabled if no subject is selected from the select element };
      subject: string | undefined;
    };

/*
question form is used for edit and delete
- for add question, no initialData
- for edit question, initialData is the required

- then pass the submitHandler
*/

export default function QuestionForm(props: QuestionFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TEditQuestionSchema>({
    defaultValues: transformQuestionToSchemaForm(
      props.mode === "edit" ? props.initialData : undefined,
    ),
    resolver: zodResolver(EditQuestionSchema),
  });

  const onSubmit = (formData: TEditQuestionSchema) => {
    const transformedOptions = [
      formData.option1,
      formData.option2,
      formData.option3,
      formData.option4,
    ];
    const transformedData = {
      statement: formData.statement,
      options: transformedOptions as QuestionType["options"],
      answer: formData.answer,
      explanation: formData.explanation,
    } satisfies QuestionType;

    // mutate(transformedData);
    if (props.mode === "edit") {
      // what you send to the server should be test_id, not testId
      // mutate({ ...transformedData, test_id: testId, subject, questionId }); // this will call the edit-question server action
      props.submitHandler({
        ...transformedData,
        test_id: props.testId,
        subject: props.subject,
        questionId: props.questionId,
      });
    } else {
      // mutate(transformedData); // which will be a state update
      props.submitHandler(transformedData);
    }
  };

  const options = Array(4).fill("") as QuestionType["options"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="statement">Question Statement</Label>
        <Controller
          control={control}
          name="statement"
          render={({ field: { value, onBlur, onChange } }) => (
            <Textarea
              id="statement"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Enter the question statement"
            />
          )}
        />
        {errors.statement && (
          <p className="text-red-500">{errors.statement.message}</p>
        )}
      </div>
      {options.map((_, i) => (
        <div key={i} className="grid gap-2">
          <Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
          <Controller
            control={control}
            name={`option${i + 1}` as keyof TEditQuestionSchema}
            render={({ field: { value, onBlur, onChange } }) => (
              <Textarea
                id={`option${i + 1}`}
                placeholder={`Enter option ${i + 1}`}
                value={value || ""}
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
      <div className="grid gap-2">
        <Label htmlFor="answer">Correct Option</Label>
        <Controller
          control={control}
          name="answer"
          render={({ field: { value, onChange } }) => (
            <Select
              value={value === undefined ? undefined : `${value}`}
              onValueChange={onChange}
            >
              <SelectTrigger id="answer">
                <SelectValue placeholder="Select an option" />
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
        {errors.answer && (
          <p className="text-red-500">{errors.answer.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="explanation">Explanation (Optional)</Label>
        <Controller
          control={control}
          name="explanation"
          render={({ field: { value, onChange } }) => (
            <Textarea
              value={value || ""}
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
        <Button
          disabled={
            (props.mode === "edit" && props.isPending) || !props.subject
          }
          type="submit"
        >
          {props.mode === "edit" && props.isPending
            ? "Submitting..."
            : "Submit"}
        </Button>
      </div>
    </form>
  );
}
