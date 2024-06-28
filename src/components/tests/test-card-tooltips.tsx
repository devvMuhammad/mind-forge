import { formatDate } from "@/lib/utils";
import { Icons } from "../icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type TestCardTooltipsProps = {
  createdAt: Date;
  attempts: number;
  lastChanged: Date;
};

export default function TestCardTooltips({
  createdAt,
  attempts,
  lastChanged,
}: TestCardTooltipsProps) {
  return (
    <div className="w-full flex justify-evenly items-center gap-4">
      <Tooltip>
        {/* <div className=""> */}
        <TooltipTrigger className="flex items-center gap-1 group">
          <Icons.calender className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 cursor-pointer" />
          <span className="text-xs text-gray-500 group-hover:text-blue-500  dark:text-gray-400">
            Published
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-blue-500 border-none text-xs px-2 py-1">
          {formatDate(createdAt)}
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-1 group">
          <Icons.eye className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-green-500 cursor-pointer" />
          <span className="text-xs text-gray-500 group-hover:text-green-500 dark:text-gray-400">
            Attempts
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-green-600 border-none text-xs px-2 py-1">
          {attempts.toString()} Students
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-1 group">
          <Icons.edit className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-red-600 cursor-pointer" />
          <span className="text-xs text-gray-500 group-hover:text-red-600 dark:text-gray-400">
            Updated
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-red-600 border-none text-xs px-2 py-1">
          {formatDate(lastChanged)}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
