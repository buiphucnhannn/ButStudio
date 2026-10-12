"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/ui";

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

  // Khoá cuộn trang khi menu mở, đóng menu bằng phím Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Đóng menu" : "Mở menu"}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] border-t border-slate-200 bg-white px-4 py-6"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="#contact" onClick={close} className="mt-6 w-full">
            Liên hệ ngay
          </Button>
        </div>
      )}
    </div>
  );
}
