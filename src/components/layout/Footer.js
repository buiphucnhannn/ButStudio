import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/data/landing";
import { Container, Icon, Logo } from "@/components/ui";
import CurrentYear from "./CurrentYear";

const socials = [
  { name: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { name: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "github", label: "GitHub", href: siteConfig.social.github },
];

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{siteConfig.description}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon name={s.name} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Liên hệ</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="mail" className="size-5 shrink-0 text-brand-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="phone" className="size-5 shrink-0 text-brand-400" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mapPin" className="size-5 shrink-0 text-brand-400" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p>Made with Next.js & Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
