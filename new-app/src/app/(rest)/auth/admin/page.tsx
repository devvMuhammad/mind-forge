"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { founders } from "@/config/founders";
import PasswordInput from "@/components/ui/password-input";
import { login } from "@/app/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "@/contexts/user-context";
import { useRouter } from "next/navigation";

// @Validation schema using Zod
const LoginSchema = z.object({
  founder: z
    .string({
      invalid_type_error: "Founder is required",
      required_error: "Founder is required",
    })
    .min(1, { message: "Founder is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
type TLoginSchema = z.infer<typeof LoginSchema>;

// @Export
export default function Login() {
  const router = useRouter();
  const { setUser } = useUserContext();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const {
        data: { user },
        error,
      } = data;
      if (error) {
        // ?toaster here
        return;
      }
      // set the context

      setUser({
        name: user.user_metadata.name,
        email: user.email as string,
      });
      // move to the dashboard page
      router.push("/admin/dashboard");
    },
  });

  const submitHandler = async (data: TLoginSchema) => {
    // console.log(data);
    // console.log(await signIn("credentials", data));

    mutate(data);
    //! check this later
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full">
      <div className="w-1/2 max-w-[500px]  border-2 p-8 rounded-md shadow-md bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Login Kar</h1>
        <p className="mb-8">Apna Password bata</p>

        {/* -- @Form */}
        <form
          onSubmit={handleSubmit(submitHandler, (err) => console.log(err))}
          className="flex flex-col space-y-5"
        >
          {/* ---- @Email */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="founder" className="text-gray-600 font-semibold">
              Founder
            </Label>
            <Controller
              control={control}
              name="founder"
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value === undefined ? undefined : `${value}`} // this code for showing the placeholder becuase it only shows when answer is undefined
                  onValueChange={onChange}
                >
                  <SelectTrigger id="founder">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {founders.map((founder) => (
                      <SelectItem
                        value={founder.name + "@mindforge.pk"}
                        key={founder.name}
                      >
                        {founder.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.founder && (
              <p className="text-red-500 text-sm">{errors.founder.message}</p>
            )}
          </div>

          {/* ---- @Password */}
          <div className="flex flex-col space-y-2">
            <div className="w-full flex justify-between items-center">
              <Label htmlFor="password" className="text-gray-600 font-semibold">
                Password
              </Label>
            </div>
            <PasswordInput
              register={() => register("password")}
              id="password"
              placeholder={"***********"}
              className="h-12 p-2 pl-5 border-2 rounded-md transition-all"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* ---- @Login Button */}
          <Button
            disabled={isPending}
            size="lg"
            className="bg-primary text-white rounded-md"
          >
            {isPending ? "Loading" : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}
