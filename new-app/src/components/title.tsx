import { cn } from '@/lib/utils'

interface TitleProps {
  title: string;
  description?: string;
  noMarginBottom?: boolean;
}

export default function Title({
  title,
  description,
  noMarginBottom = false,
}: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      {description && (
        <p className={cn("text-gray-500", noMarginBottom ? "mb-4" : "mb-8")}>
          {description}
        </p>
      )}
    </>
  );
}
