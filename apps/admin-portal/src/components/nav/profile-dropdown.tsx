"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";
import { useTransition } from "react";
import { signOut } from "@/app/actions/auth";

interface UserAccountNavProps {
  name: string;
  image?: string;
  email: string;
}

export default function ProfileDropdown({ email, name }: UserAccountNavProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            email,
            name,
            image: "",
          }}
          className="h-8 w-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-[0.25rem] overflow-y-auto"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{name}</p>
            {/* && ( */}
            <p className="w-[250px] truncate text-sm text-muted-foreground">
              {email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
        <DropdownMenuItem
          className="cursor-pointer rounded-[0.25rem] p-2"
          onSelect={(e) => {
            e.preventDefault();
            startTransition(async () => {
              await signOut();
            });
          }}
        >
          {isPending ? "Logging out" : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
