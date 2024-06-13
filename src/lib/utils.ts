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

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
