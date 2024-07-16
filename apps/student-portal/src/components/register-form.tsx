"use client";

import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { useToast } from "@repo/ui/components/ui/use-toast";
import { Icons } from "@repo/ui/components/icons";
import { isValidObjectURL } from "@repo/utils/file";
import Image from "next/image";
import { FileRejection, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

interface ScreenshotType extends File {
  preview: string;
}

const registerSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name should be less than 100 characters" }),
  email: z
    .string({ invalid_type_error: "Email is required" })
    .email({ message: "Enter a Valid Email" }),
  file: z
    .custom<ScreenshotType | undefined>()
    .refine((val) => val !== undefined && isValidObjectURL(val.preview), {
      message: "Screenshot is required",
    }),
});

type TRegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { toast } = useToast();
  // const [screenshot, setScreenshot] = useState<ScreenshotType | undefined>();

  function onDrop(acceptedFiles: File[], fileRejections: FileRejection[]) {
    if (fileRejections.length > 0) {
      console.log(fileRejections);
      if (fileRejections[0].errors[0].code === "file-invalid-type") {
        toast({
          title: "Invalid File Type",
          description: "Please upload a valid image file",
          variant: "destructive",
        });
      } else if (fileRejections[0].errors[0].code === "too-many-files") {
        toast({
          title: "Too Many Files",
          description: "Only 1 file can be uploaded",
          variant: "destructive",
        });
      } else if (fileRejections[0].errors[0].code === "file-too-large") {
        toast({
          title: "File Too Large",
          description: "File size should be less than 2MB",
          variant: "destructive",
        });
      }
      return;
    }
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);
    setValue("file", { ...file, preview });
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".webp"],
    },
    maxSize: 2 * 1024 * 1024,
  });

  function submitHandler(data: TRegisterSchema) {
    console.log(data);
  }
  const screenshot = watch("file"); // use watch instead of getValues("file")
  return (
    // set width styling later
    <form
      onSubmit={handleSubmit(submitHandler, (err) => console.log(err))}
      className="flex flex-col gap-3 p-8 mx-auto w-[90%] sm:w-3/4 xl:w-1/2 rounded-xl"
    >
      <h1 className="text-2xl font-bold mb-4">Register Form</h1>
      <div className="space-y-1">
        <Label className="sm:text-sm">
          Name <sup className="text-primary">*</sup>
        </Label>
        <Input
          {...register("name")}
          className="w-full md:max-w-[90%] xl:max-w-[50%] transition-all"
          type="text"
          placeholder="Muhammad Amjad"
        />
        {errors.name && (
          <div className="text-red-500 text-xs">{errors.name.message}</div>
        )}
      </div>
      <div className="space-y-1">
        <Label className="sm:text-sm">
          Email <sup className="text-primary">*</sup>
        </Label>
        <Input
          {...register("email")}
          className="w-full md:max-w-[90%] xl:max-w-[50%] transition-all"
          type="text"
          placeholder="mindforge@alpha.com"
        />
        {errors.email && (
          <div className="text-red-500 text-xs">{errors.email.message}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label className="sm:text-sm">
          Screenshot <sup className="text-primary">*</sup>
        </Label>
        {/* @File Upload Component */}
        {!screenshot ? (
          <div
            {...getRootProps({
              className:
                "border-2 border-solid border-[#0000005C] rounded-xl p-4",
            })}
            style={{ borderStyle: "dotted" }}
          >
            <input {...getInputProps()} />
            <div className="w-full grid grid-cols-[auto_1fr_auto] gap-4 items-center">
              <div className="h-12 w-12 bg-muted flex items-center justify-center">
                <Icons.image className="text-muted-foreground" />
              </div>
              <div className="flex flex-col text-muted-foreground">
                <p>Upload or Drop the Screenshot of Transcation Here. </p>
                <span className="text-sm">PNG, JPEG, JPG or WEBP</span>
              </div>
              <Button type="button" variant="outline" size="sm">
                Browse
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <Image
              src={screenshot?.preview}
              alt="screenshot"
              className="rounded-md"
              width={300}
              height={300}
              onLoad={() => {
                URL.revokeObjectURL(screenshot?.preview);
              }}
            />
            <div className="flex gap-4 items-center">
              <div {...getRootProps()}>
                <input id="reupload" hidden {...getInputProps()} />
                <Label
                  className={`cursor-pointer ${buttonVariants({ size: "sm", variant: "outline" })}`}
                >
                  Reupload
                </Label>
              </div>
              <Button
                type="button"
                size="sm"
                variant="destructive"
                onClick={() => {
                  console.log("Shit");
                  setValue("file", undefined);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
        {errors.file && (
          <div className="text-red-500 text-xs">{errors.file.message}</div>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
