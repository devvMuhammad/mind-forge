"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, MessageSquare, Share2 } from "lucide-react";
import { Replies } from "@/./components/forum/Replies";

export default function Post({ post }: { post: any }) {
  const [showReplies, setShowReplies] = useState(false);

  if (!post) {
    notFound();
  }

  const toggleReplies = () => {
    setShowReplies((showReplies) => !showReplies);
  };

  return (
    <div className="container mx-auto px-4">
      <Link
        href="/forum"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Forum
      </Link>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.studentName}`}
                />
                <AvatarFallback>
                  {post.studentName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  Posted by {post.studentName} on{" "}
                  {new Date(post.createdAt).toLocaleDateString()}
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{post.description}</p>
          <Separator className="my-4" />
          <div className="prose dark:prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={toggleReplies}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {post.replies.length} Replies
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      </Card>
      {showReplies && <Replies replies={post.replies} />}
    </div>
  );
}
