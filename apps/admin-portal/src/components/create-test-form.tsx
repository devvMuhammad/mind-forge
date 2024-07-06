import { Controller, useForm } from "react-hook-form";
import { Label } from "@repo/ui/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { testsConfig } from "@/config/tests";
import { toTitleCase } from "@/lib/utils";
import { Input } from "@repo/ui/components/ui/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTest } from "@/app/actions/create-test";

const createTestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.enum(testsConfig.categories),
});
type TCreateTestSchema = z.infer<typeof createTestSchema>;

export default function CreateTestForm() {
  const { handleSubmit, control, register, reset } = useForm<TCreateTestSchema>(
    {
      resolver: zodResolver(createTestSchema),
    },
  );

  const { isPending, mutate } = useMutation({
    mutationFn: createTest,
    onSuccess: (data) => {
      reset();
      console.log(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function submitHandler(formData: TCreateTestSchema) {
    mutate({
      category: formData.category,
      title: formData.title,
      lastChangedBy: "Jawad Bambari", // fetch from session
    });
  }
  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(submitHandler, (err) => console.log(err))}
    >
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" type="text" {...register("title")} />
      </div>
      <div className="flex items-center gap-2">
        <Label>Category</Label>
        <Controller
          control={control}
          name="category"
          render={({ field: { value, onChange } }) => (
            <Select
              value={value === undefined ? undefined : `${value}`} // this code for showing the placeholder becuase it only shows when answer is undefined
              onValueChange={onChange}
            >
              <SelectTrigger id="answer">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {testsConfig.categories.map((category, index) => (
                  <SelectItem value={category} key={category}>
                    {toTitleCase(category)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button disabled={isPending}>Submit</Button>
      </div>
    </form>
  );
}
