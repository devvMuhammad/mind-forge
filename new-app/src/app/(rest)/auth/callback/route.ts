import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";
  console.log("inside the callback route", origin, next);
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      //! i customized it myself lol

      console.log("inside the callback route", origin, next);
      console.log(`${process.env.NEXT_PUBLIC_URL!}/student/dashboard)`);
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_URL!}/student/dashboard`
      );
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_URL!}/auth/auth-code-error`
  );
}
