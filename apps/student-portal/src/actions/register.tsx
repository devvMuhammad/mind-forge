"use server";

import { registerSchema } from "@/lib/schema/register";
import { createClient } from "@/lib/supabase/server";
import { getSession } from "./auth";

export async function registerAction(formData: FormData) {
  const formEntries = formData.entries();
  const formDataObject = Object.fromEntries(formEntries);

  const supabase = createClient();
  const { error, data } = registerSchema.safeParse(formDataObject);
  if (error) return { error: error.message, data: null };

  const { category, file } = data;
  if (!file) return { error: "File is required", data: null };

  // fetch user data from the session
  const { data: userData, error: sessionError } = await getSession();
  if (!data || sessionError) return { error: "You need to Sign In first" };

  const {
    user: {
      user_metadata: { email, name },
    },
  } = userData;

  const { data: responseData, error: bucketError } = await supabase.storage
    .from("transaction_proof")
    .upload(
      `${email}_${category}_${new Date().toISOString()}_proof.png`,
      file as File,
      {
        contentType: "image/png",
        upsert: true,
      },
    );

  console.log("responseData", responseData);
  console.log("bucket error", bucketError);

  if (bucketError) return { error: bucketError, data: null };

  const { data: insertData, error: insertError } = await supabase
    .from("registrations" as any)
    .insert({ name, email, screenshot_url: responseData.path, category })
    .single();

  console.log("insert error", insertError);
  console.log("insert data", insertData);

  if (insertError) return { error: insertError, data: null };

  return { error: null, data: { ...responseData } }; // also add the insert data later
}
