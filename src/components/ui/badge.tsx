import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-violet-400/35 bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
