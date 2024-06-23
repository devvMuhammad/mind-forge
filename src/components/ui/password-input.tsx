"use client";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: () => UseFormRegisterReturn;
}

export default function PasswordInput({
  register,
  ...props
}: PasswordInputProps) {
  const [hide, setHide] = useState(false);
  const toggleHide = () => setHide((prev) => !prev);
  return (
    <div className="relative">
      <Input {...register()} type={!hide ? "password" : "text"} {...props} />

      {!hide ? (
        <EyeIcon
          onClick={toggleHide}
          className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 h-5 w-5 text-gray-500"
        />
      ) : (
        <EyeOffIcon
          onClick={toggleHide}
          className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 h-5 w-5 text-gray-500"
        />
      )}
    </div>
  );
}
