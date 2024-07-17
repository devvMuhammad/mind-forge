"use server";

import { registerSchema } from "@/lib/schema/register";
import { createClient } from "@/lib/supabase/server";

export async function registerAction(formData: FormData) {
  const formEntries = formData.entries();
  const formDataObject = Object.fromEntries(formEntries);

  const supabase = createClient();
  const { error, data } = registerSchema.safeParse(formDataObject);
  if (error) return { error: error.message, data: null };

  const { name, email, file } = data;
  if (!file) return { error: "File is required", data: null };

  const { data: responseData, error: bucketError } = await supabase.storage
    .from("transaction_proof")
    .upload(`${email}_proof.png`, file as File, {
      contentType: "image/png",
    });

  console.log("responseData", responseData);
  console.log("bucket error", bucketError);
  if (bucketError) return { error: bucketError, data: null };

  const { data: insertData, error: insertError } = await supabase
    .from("registrations" as any)
    .insert({ name, email, screenshot_url: responseData.path })
    .single();
  console.log("insert error", insertError);
  if (JSON.stringify(insertError) !== "{}")
    return { error: insertError, data: null };

  return { error: null, data: { ...responseData } }; // also add the insert data later
}
