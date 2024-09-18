import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string | undefined) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((n) => n.at(0))
    .join("")
    .toUpperCase();
};
