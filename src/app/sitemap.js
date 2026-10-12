import { siteConfig } from "@/config/site";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
