import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type SchemaProps = unknown[]

export const cn = (...inputs: SchemaProps) => twMerge(clsx(inputs));