import { UserIcon as User } from "lucide-react";
import { AvatarProps } from "@radix-ui/react-avatar";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
// import { Icons } from "@/components/icons"

interface UserAvatarProps extends AvatarProps {
  // user: Pick<typeof User, "image" | "name">;
  user: {
    email: string;
    name: string;
    image: string;
  };
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <User className=" h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
