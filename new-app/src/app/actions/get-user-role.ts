"use server";

import { createClient } from "@/lib/supabase/server";
import { cache } from "react";

export const getUserRole = cache(async (userId: string) => {
  const supabase = await createClient();

  const result = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId);

  return result;
});
