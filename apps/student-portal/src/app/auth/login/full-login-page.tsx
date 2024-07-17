// !KEEPING THIS PAGE FOR FUTURE RECORD

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
    <div className="p-4 flex flex-col">
      {/* -- @Title */}
      <Title
        title="Log In To Get Started"
        description="Enter your credentials to access your account"
      />

      {/* -- @Social Logins */}
      <SocialLogins />

      {/* -- @Seperator */}
      <Seperator />

      {/* -- @Form */}
      <form
        onSubmit={handleSubmit(submitHandler, (err) => console.log(err))}
        className="flex flex-col space-y-5"
      >
        {/* ---- @Email */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email" className="text-gray-600 font-semibold">
            Email
          </Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="khanbaba@gmail.com"
            className="h-12 p-2 pl-5 border-2 rounded-md transition-all"
          />
        </div>

        {/* ---- @Password */}
        <div className="flex flex-col space-y-2">
          <div className="w-full flex justify-between items-center">
            <Label htmlFor="password" className="text-gray-600 font-semibold">
              Password
            </Label>
            <Link className="text-sm text-primary font-medium" href="#">
              Forgot Password?
            </Link>
          </div>
          <PasswordInput
            register={() => register("password")}
            id="password"
            placeholder={"**********"}
            className="h-12 p-2 pl-5 border-2 rounded-md transition-all"
          />
        </div>

        {/* ---- @Login Button */}
        <Button
          disabled={isPending}
          size="lg"
          className="bg-primary text-white rounded-md"
        >
          {isPending ? "Loading" : "Login"}
        </Button>

        {/* ---- @Signup Link */}
        <p className="text-gray-600">
          Don&apos;t Have an account?{" "}
          <Link className="text-primary font-bold" href="/#">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
