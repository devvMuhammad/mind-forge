"use client";
import { useState } from "react";
import Link from "next/link";
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
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, MessageSquare, ThumbsUp, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { addReply } from "@/app/actions/forum/add-reply";
import { Replies } from "@/components/forum/Replies";

interface PostProps {
  title: string;
  studentName: string;
  content: string;
  category: string;
  createdAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replies?: any[]; // Adjust type as needed
  likes?: number;
  postId: string;
}

export default function Post({
  title,
  studentName,
  content,
  category,
  createdAt,
  replies = [],
  likes = 0,
  postId,
}: PostProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const { toast } = useToast();

  const replyMutation = useMutation({
    mutationFn: (content: string) => addReply({ content, postId }),
    onSuccess: (data) => {
      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: data.message,
        });
        setReplyContent("");
        setIsReplying(false);
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleReply = () => {
    setIsReplying(true);
  };

  const handleSendReply = () => {
    if (!replyContent.trim()) return;
    replyMutation.mutate(replyContent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${studentName}`}
                />
                <AvatarFallback>
                  {studentName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                <CardDescription>
                  Posted by {studentName} on{" "}
                  {new Date(createdAt).toLocaleDateString()}
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p>{content}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="flex justify-between w-full mb-4">
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {likes} Likes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {replies.length} Replies
              </Button>
            </div>
            <Button variant="outline" size="sm" onClick={handleReply}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Reply
            </Button>
          </div>
          {isReplying && (
            <div className="w-full">
              <Textarea
                placeholder="Write your reply here..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mb-2"
                disabled={replyMutation.isPending}
              />
              <Button
                onClick={handleSendReply}
                className="float-right"
                disabled={replyMutation.isPending}
              >
                {replyMutation.isPending ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⏳</span> Sending...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </>
                )}
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
      <Replies
        replies={replies.map((reply) => ({
          id: reply.id,
          author: reply.profiles.name,
          content: reply.content,
          createdAt: reply.created_at,
          role: reply.profiles.role,
        }))}
      />
    </div>
  );
}
