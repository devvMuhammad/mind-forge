"use client";

import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { useToast } from "@repo/ui/components/ui/use-toast";
import Image from "next/image";
import { SVGProps, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

interface ScreenshotType extends File {
  preview: string;
}

export default function RegisterForm() {
  const { toast } = useToast();
  const [screenshot, setScreenshot] = useState<ScreenshotType | undefined>();
  function onDrop(
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    // event: DropEvent,
  ) {
    if (fileRejections.length > 0) {
      if (fileRejections[0].errors[0].code === "file-invalid-type") {
        toast({
          title: "Invalid File Type",
          description: "Please upload a valid image file",
          variant: "destructive",
        });
      }
      return;
    }
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);
    setScreenshot({ ...file, preview });
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".webp"],
    },
  });
  return (
    // set width styling later
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3 p-8 mx-auto w-1/2 border border-solid border-muted-foreground rounded-xl"
    >
      <h1 className="text-center text-xl font-bold mb-4">Register Form</h1>
      <div className="space-y-1">
        <Label className="sm:text-base">Name</Label>
        <Input
          className="w-full sm:max-w-[75%] md:max-w-[50%]"
          type="text"
          placeholder="Muhammad Amjad"
        />
      </div>
      <div className="space-y-1">
        <Label className="sm:text-base">Email</Label>
        <Input
          className="w-full sm:max-w-[75%] md:max-w-[50%]"
          type="text"
          placeholder="mindforge@alpha.com"
        />
      </div>

      <div className="space-y-1">
        <Label className="sm:text-base">Screenshot of Transaction</Label>
        {/* @File Upload Component */}
        {!screenshot ? (
          <div
            {...getRootProps({
              className:
                "border-2 border-solid border-[#0000005C] rounded-xl p-8",
            })}
          >
            <input {...getInputProps()} />
            <div className="flex gap-2 flex-col justify-center items-center text-[#0000005C]">
              <FileUploadIcon />
              <h1 className="text-xl text-balance">Drag Files to Upload</h1>
              <p>OR</p>
              <Button variant="outline">Browse Files</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="text-muted-foreground">Preview</p>
            <Image
              src={screenshot?.preview}
              alt="screenshot"
              width={300}
              height={300}
              onLoad={() => {
                URL.revokeObjectURL(screenshot?.preview);
              }}
            />
            <div {...getRootProps()}>
              <input id="reupload" hidden {...getInputProps()} />
              <Label
                className={`cursor-pointer mt-2 ${buttonVariants({ size: "sm", variant: "outline" })}`}
              >
                Reupload
              </Label>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Button>Submit</Button>
      </div>
    </form>
  );
}

const FileUploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={68}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillOpacity={0.36}
      d="M58.556 18.106a20.783 20.783 0 0 0-6.5-11.919A20.798 20.798 0 0 0 37.992.724c-4.027 0-7.95 1.155-11.311 3.331a20.765 20.765 0 0 0-6.766 7.122 11.95 11.95 0 0 0-2.192-.207c-6.292 0-11.415 5.122-11.415 11.415 0 .814.089 1.599.237 2.369C2.473 27.714 0 32.482 0 37.56c0 4.1 1.525 8.084 4.308 11.237 2.858 3.228 6.633 5.138 10.66 5.36H27.82a1.99 1.99 0 0 0 1.999-1.999 1.99 1.99 0 0 0-2-1.999H15.147c-6.055-.37-11.148-6.13-11.148-12.614 0-4.19 2.25-8.099 5.877-10.216.844-.489 1.2-1.51.874-2.428a7.253 7.253 0 0 1-.444-2.547c0-4.086 3.331-7.417 7.417-7.417.874 0 1.733.148 2.532.444a2.008 2.008 0 0 0 2.502-1.022c2.769-5.878 8.75-9.668 15.25-9.668 8.736 0 15.946 6.544 16.775 15.22.089.903.77 1.629 1.658 1.777 6.589 1.125 11.563 7.21 11.563 14.154 0 7.359-5.789 13.755-12.925 14.302H44.165a1.99 1.99 0 0 0-1.998 2 1.99 1.99 0 0 0 1.998 1.998H55.3c4.516-.326 8.735-2.398 11.874-5.863A18.438 18.438 0 0 0 72 35.843c-.015-8.306-5.685-15.694-13.444-17.737Z"
    />
    <path
      fill="#000"
      fillOpacity={0.36}
      d="M48 39.456a1.993 1.993 0 0 0 0-2.828L37.414 26.042a2.022 2.022 0 0 0-1.407-.592 1.96 1.96 0 0 0-1.406.592L24.015 36.628a1.993 1.993 0 0 0 0 2.828c.385.385.903.592 1.406.592a1.95 1.95 0 0 0 1.407-.592l7.18-7.18v33.001a1.99 1.99 0 0 0 2 1.999 1.99 1.99 0 0 0 1.998-1.999V32.275l7.18 7.18c.77.786 2.03.786 2.814 0Z"
    />
  </svg>
);
