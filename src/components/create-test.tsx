"use client";
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

export default function CreateTestButton() {
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
            <DropdownMenuItem
              key={category}
              onSelect={() => console.log(category)}
            >
              {toTitleCase(category)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
