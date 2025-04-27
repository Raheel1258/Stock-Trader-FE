import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classes: ClassValue[]): string => {
  return twMerge(clsx(classes));
};

export { cn }