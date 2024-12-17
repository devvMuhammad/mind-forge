import { createClient } from "@/lib/supabase/server";
import Post from "./Post";
import { redirect } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const supabase = await createClient();
  const { postId } = await params;
  const { data } = await supabase
    .from("posts")
    .select("*, profiles(*), replies(*)")
    .eq("id", postId)
    .order("created_at", { ascending: true });
  if (!data) {
    redirect("/forum");
  }
  const post = data[0];

  return (
    <Post
      title={post.title}
      studentName={post.profiles?.name || "Anonymous"}
      content={post.content}
      category={post.subject}
      createdAt={post.created_at}
      replies={post.replies}
    />
  );
}
