"use client";

import { Button } from "@/components/ui/button";
import Title from "@/components/title";
import { Icons } from "@/components/icons";
import { loginSSO } from "@/app/actions/auth";
import { startTransition } from "react";

export default function Login() {
  return (
    <div className="border-2 border-solid border-muted rounded-xl py-14 px-20 flex flex-col">
      {/* -- @Title */}
      <Title
        title="Log In To Get Started"
        description="Login with any of the following providers"
      />

      {/* -- @Social Logins */}
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => {
            startTransition(async () => {
              const response = await loginSSO();
              console.log(response);
            });
          }}
          size="lg"
          className="grid grid-cols-[auto_1fr] text-left gap-4 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
        >
          <Icons.google className="mr-2 size-5" />
          Log in with Google
        </Button>
      </div>
    </div>
  );
}
