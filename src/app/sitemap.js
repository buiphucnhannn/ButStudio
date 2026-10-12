import { siteConfig } from "@/config/site";
import { collections } from "@/data/site";

const base = siteConfig.url;

export default function sitemap() {
  const entry = (path, priority, changeFrequency = "monthly") => ({
    url: base + path,
    lastModified: siteConfig.lastUpdated,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        vi: base + path.replace(/^\/en/, "") || base,
        en: base + (path.startsWith("/en") ? path : `/en${path}`),
      },
    },
  });

  return [
    entry("/", 1),
    entry("/en", 0.9),
    entry("/bo-suu-tap", 0.9, "weekly"),
    entry("/en/bo-suu-tap", 0.8, "weekly"),
    entry("/dich-vu", 0.9),
    entry("/en/dich-vu", 0.8),
    ...collections.flatMap((c) => [
      entry(`/bo-suu-tap/${c.slug}`, 0.8),
      entry(`/en/bo-suu-tap/${c.slug}`, 0.7),
    ]),
  ];
}
