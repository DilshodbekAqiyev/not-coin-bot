import { cn } from "@/lib/utils";
import { Props } from "./types";

export const Card = ({ children, className }: Props) => (
  <div
    className={cn("rounded-[18px] bg-slate-300 bg-opacity-15 p-4", className)}
  >
    {children}
  </div>
);
