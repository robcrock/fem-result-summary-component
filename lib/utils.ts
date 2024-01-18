import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateCategoryStyle = (category: string) => {
  switch (category) {
    case "Memory":
      return "bg-primary-fem-orange/5 p-4 text-primary-fem-orange";
    case "Reaction":
      return "bg-primary-fem-red/5 p-4 text-primary-fem-red";
    case "Verbal":
      return "bg-primary-fem-green/5 p-4 text-primary-fem-green";
    case "Visual":
      return "bg-primary-fem-blue/5 p-4 text-primary-fem-blue";
    default:
      return "";
  }
};
