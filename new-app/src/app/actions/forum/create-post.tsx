"use server";

import { createClient } from "@/lib/supabase/server";
import { TPostSchema } from "@/lib/zod/post";
import { revalidatePath } from "next/cache";

export async function createPost({ post }: { post: TPostSchema }) {
  try {
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser()).data.user?.id;

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
      .from("posts")
      .insert({ ...post, author_id: userId });

    if (error) {
      console.error("error while creating post", error);
      throw new Error(error.message);
    }

    revalidatePath("/forum");
    return { data, message: "Post created successfully!" };
  } catch (err) {
    return { error: (err as Error).message };
  }
}
