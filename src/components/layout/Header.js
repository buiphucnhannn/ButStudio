import Link from "next/link";
import { navLinks } from "@/data/landing";
import { Button, Container, Logo } from "@/components/ui";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <Container
        as="nav"
        className="flex h-16 items-center justify-between"
        aria-label="Điều hướng chính"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Liên hệ ngay
          </Button>
        </div>

        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}
