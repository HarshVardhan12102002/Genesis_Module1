import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all",
        "focus:border-blue-400/60 focus:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
