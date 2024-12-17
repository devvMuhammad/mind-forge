import ForumPost from "@/components/forum/ForumPost";
import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Forum() {
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from("posts")
    .select("*, profiles(*)")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-6">Recent Discussions</h1>
        <Link
          href="/forum/create"
          className={buttonVariants({ variant: "default" })}
        >
          <PlusIcon className="mr-4" /> Create Post
        </Link>
      </div>

      <div>
        {posts?.map(function (post) {
          return (
            <ForumPost
              key={post.id}
              id={`${post.id}`}
              studentName={post.profiles?.name || "Anonymous"}
              title={post.title}
              description={post.content}
              category={post.subject}
            />
          );
        })}
      </div>
    </div>
  );
}
