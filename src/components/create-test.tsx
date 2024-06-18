"use client";
import { createTest } from "@/app/actions/create-test";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { testsConfig } from "@/config/tests";
import { toTitleCase } from "@/lib/utils";
// import { useAction } from "next-safe-action/hooks";

export default function CreateTestButton() {
  // const { execute } = useAction(createTest, { onSuccess: (args) => args.data });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Create Test</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {testsConfig.categories.map((category) => (
            <DropdownMenuItem key={category}>
              {toTitleCase(category)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
