"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name should be less than 100 characters" }),
  email: z
    .string({ invalid_type_error: "Email is required" })
    .email({ message: "Enter a Valid Email" }),
  file: z.custom<File | undefined>().refine((val) => val !== undefined, {
    message: "Screenshot is required",
  }),
});

export async function registerAction(formData: FormData) {
  const formEntries = formData.entries();
  const formDataObject = Object.fromEntries(formEntries);
  console.log("form data object inside the server action", formDataObject);
  // return;
  const supabase = createClient();
  const { error, data } = registerSchema.safeParse(formDataObject);
  if (error) return { error: error.message, data: null };
  console.log("debugginh", data.file);

  const { name, email, file } = data;
  if (!file) return { error: "File is required", data: null };

  // console.log("inside server", decode(file));

  const { data: responseData, error: bucketError } = await supabase.storage
    .from("transaction_proof")
    .upload(`${email}_proof.png`, file as File, {
      contentType: "image/png",
    });
  console.log("bucket error", bucketError);
  // if (bucketError) return { error: bucketError, data: null };

  // const { data: insertData, error: insertError } = await supabase
  //   .from("student")
  //   .insert({ name, email, proof: responseData.fullPath })
  //   .single();
  // console.log("insert error", insertError);
  // if (JSON.stringify(insertError) === "{}")
  // return { error: insertError, data: null };

  return { error: null, data: { ...responseData } }; // also add the insert data later
}
