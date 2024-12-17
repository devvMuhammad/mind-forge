"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addReply({
  content,
  postId,
}: {
  content: string;
  postId: string;
}) {
  try {
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser()).data.user?.id;

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
      .from("replies")
      .insert({ post_id: +postId, author_id: userId, content: content });

    if (error) {
      throw new Error(error.message);
    }
    revalidatePath(`/forum/${postId}`);
    return { data, message: "Reply added successfully!" };
  } catch (err) {
    return { error: (err as Error).message };
  }
}
