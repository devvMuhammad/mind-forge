import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });
}

const specialCases: Record<string, string> = {
  basic_maths: "Basic Mathematics",
  iq: "Intelligence",
};

export function toTitleCase(str: string) {
  // Check if the string is in the special cases mapping
  if (specialCases[str.toLowerCase()]) {
    return specialCases[str.toLowerCase()];
  }

  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
