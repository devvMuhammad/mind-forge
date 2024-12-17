import { createClient } from "@/lib/supabase/server";
import Post from "./Post";
import { redirect } from "next/navigation";
import { toTitleCase } from "@/lib/utils";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const supabase = await createClient();
  const { postId } = await params;
  const { data } = await supabase
    .from("posts")
    .select("*, profiles(*)")
    .eq("id", postId)
    .order("created_at", { ascending: true });

  const { data: replies, error } = await supabase
    .from("replies")
    .select("*, profiles(*)")
    .eq("post_id", postId)
    .order("created_at", { ascending: false });
  console.log(error);

  if (!data) {
    redirect("/forum");
  }
  const post = data[0];
  console.log(post.profiles);
  // return <pre>{JSON.stringify(post, null, 2)}</pre>;
  return (
    <Post
      title={post.title}
      studentName={post.profiles?.name || "Anonymous"}
      content={post.content}
      category={toTitleCase(post.subject)}
      createdAt={post.created_at}
      replies={replies || []}
      postId={postId}
    />
  );
}
