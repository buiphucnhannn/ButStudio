import { cn } from "@/lib/cn";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-600/15",
        className,
      )}
    >
      {children}
    </span>
  );
}
