import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export default function Logo({ className, light = false }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={siteConfig.name}
    >
      <Image src="/images/brand/logo-mark.svg" alt="" width={36} height={36} />
      <span
        className={cn("text-lg font-bold tracking-tight", light ? "text-white" : "text-slate-900")}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
