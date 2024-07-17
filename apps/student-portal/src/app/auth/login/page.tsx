"use client";
// =================
// Visit Page: http://localhost:3000/auth/login
// =================
// Table of Contents
// =================
// @Imports
// @Export
// -- @Title
// -- @Social Logins
// -- @Seperator
// -- @Form
// ---- @Email
// ---- @Password
// ---- @Login Button
// ---- @Signup Link
// =================

// @Imports
// import SocialLogins from "../components/social-logins";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import PasswordInput from "@repo/ui/components/ui/password-input";
import Link from "next/link";
// import Title from "../components/title";
// import Seperator from "../components/seperator";
// import { routes } from "@/config/routes";
// import { placeholders } from "@/config/placeholders";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
// import axios from "axios";
import { useToast } from "@repo/ui/components/ui/use-toast";
import { ToastAction } from "@repo/ui/components/ui/toast";
import Title from "@/components/title";
import Seperator from "@/components/separator";
import SocialLogins from "@/components/social-logins";
import { Icons } from "@repo/ui/components/icons";

// @Validation schema using Zod
const LoginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(1, { message: "Password is required" }),
  // .min(8, { message: "Password must be at least 8 characters" }),
});
type TLoginSchema = z.infer<typeof LoginSchema>;

// @Export
export default function Login() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { register, handleSubmit } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  function submitHandler(formData: TLoginSchema) {
    console.log(formData);
    // startTransition(async () => {
    //   try {
    //     const response = await axios.post(`/api/auth/login`, {
    //       email: formData.email,
    //       password: formData.password,
    //     });
    //     if (!response.data.valid) throw new Error(response.data.message);
    //     toast({
    //       variant: "default",
    //       title: "Login Successful",
    //       description: "You have logged in sucessfully!",
    //     });
    //     router.replace("/"); // move to the main events page (as for now)
    //     console.log(response);
    //   } catch (err) {
    //     console.log(err);
    //     toast({
    //       variant: "destructive",
    //       title: "Uh oh! Something went wrong.",
    //       description: (err as any)?.response.data.message,
    //       action: <ToastAction altText="Try again">Try again</ToastAction>,
    //     });
    //   }
    // });
  }
  return (
    <div className="border-2 border-solid border-muted rounded-xl p-14 flex flex-col">
      {/* -- @Title */}
      <Title
        title="Log In To Get Started"
        description="Login with any of the following providers"
      />

      {/* -- @Social Logins */}
      <div className="flex flex-col gap-4">
        <Button
          // onClick={() => signIn("google", { callbackUrl: "/" })}
          size="lg"
          className="grid grid-cols-[auto_1fr] text-left gap-4 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
        >
          <Icons.google className="mr-2 size-5" />
          Log in with Google
        </Button>

        <Button
          // onClick={() => signIn("github", { callbackUrl: "/" })}
          size="lg"
          className="grid grid-cols-[auto_1fr] text-left gap-4 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
        >
          <Icons.facebook className="mr-2 size-5" />
          Log in with Facebook
        </Button>

        <Button
          // onClick={() => signIn("github", { callbackUrl: "/" })}
          size="lg"
          className="grid grid-cols-[auto_1fr] text-left gap-4 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
        >
          <Icons.github className="mr-2 size-5" />
          Log in with Github
        </Button>
      </div>
    </div>
  );
}
