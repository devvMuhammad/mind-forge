"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CreateTestForm from "./create-test-form";

export default function CreateTestButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Create Test</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <CreateTestForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
