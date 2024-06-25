"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { UserAvatar } from "./user-avatar";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { auth } from "@/lib/auth";

interface UserAccountNavProps {
  user: {
    name: string;
    image: string;
    email: string;
  };
}

export default function UserProfile({ user }: UserAccountNavProps) {
  // const {} =  auth();
  const session = useSession();
  console.log("session status", session.status);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            email: "king@gmail.com",
            name: "Muhammad Amjad",
            image: "none",
          }}
          className="h-8 w-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-[0.25rem]">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">Muhammad Amjad</p>
            {/* && ( */}
            <p className="w-[250px] truncate text-sm text-muted-foreground">
              king@gmail.com
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer rounded-[0.25rem] p-2"
          onSelect={(e) => {
            e.preventDefault();
            startTransition(() => {
              // to be decided later
              signOut({ redirect: false });
              router.push("/login");
            });
          }}
        >
          {isPending ? "Logging out" : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
