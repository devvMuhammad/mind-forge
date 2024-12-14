import { JSX } from "react";

type PageTitleProps = {
  heading: string;
  description: string;
} & (
  | { containsButton: true; button: JSX.Element }
  | { containsButton: false; button?: undefined }
);
export default function PageTitle({
  heading,
  description,
  containsButton,
  button,
}: PageTitleProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex pt-2 justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl">{heading}</h1>
          {containsButton && button}
        </div>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
