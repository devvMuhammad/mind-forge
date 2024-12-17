import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Reply {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

interface RepliesProps {
  replies: Reply[];
}

export function Replies({ replies }: RepliesProps) {
  return (
    <div className="mt-6 space-y-4">
      {replies.map((reply) => (
        <Card key={reply.id}>
          <CardHeader className="flex flex-row items-center gap-4 p-4">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${reply.author}`}
              />
              <AvatarFallback>
                {reply.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{reply.author}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(reply.createdAt).toLocaleDateString()}
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">{reply.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
