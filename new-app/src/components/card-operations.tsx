"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//! will introduce this later to show result states of operations
// import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import QuestionEdit from "./question-edit";
import QuestionDelete from "./question-delete";

export function CardOperations() {
  //! LOGIC WILL BE DISCUSSED LATER
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex p-2 items-center justify-center rounded-[0.35rem] border transition-colors hover:bg-muted">
          <Icons.ellipsis className=" h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <QuestionEdit />
          <DropdownMenuSeparator />
          <QuestionDelete />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
