import { siteConfig } from "@/config/site";
import { localize, href } from "@/i18n";
import {
  hero,
  marquee,
  about,
  featuredCollections,
  collections,
  services,
  rental,
  moments,
  seasonal,
  contact,
  ui,
  t,
} from "@/data/site";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Collections from "@/components/sections/Collections";
import Services from "@/components/sections/Services";
import Rental from "@/components/sections/Rental";
import RentalInfo from "@/components/sections/RentalInfo";
import Moments from "@/components/sections/Moments";
import Seasonal from "@/components/sections/Seasonal";
import Contact from "@/components/sections/Contact";

const collectionsHeading = {
  eyebrow: { vi: "Bộ sưu tập", en: "Collections" },
  title: { vi: "Mỗi quốc gia, một tủ đồ", en: "Every country, a wardrobe" },
  accent: { vi: "của Bụt.", en: "by Bụt." },
};

// Trang chủ: Hero → Marquee → Về Bụt → Bộ sưu tập → Dịch vụ → Thuê thế nào → Thông tin thuê → Khoảnh khắc → Mùa này → Liên hệ
export default async function HomePage({ params }) {
  const { lang } = await params;
  const site = localize(siteConfig, lang);
  const L = localize(
    {
      hero,
      marquee,
      about,
      featuredCollections,
      services,
      rental,
      moments,
      seasonal,
      contact,
      ui,
      collectionsHeading,
    },
    lang,
  );

  return (
    <>
      <Hero hero={L.hero} ui={L.ui} exploreHref={href(lang, "/bo-suu-tap")} />
      <Marquee items={L.marquee} />
      <About about={L.about} />
      <Collections
        lang={lang}
        collections={L.featuredCollections}
        ui={L.ui}
        heading={L.collectionsHeading}
      />
      <Services lang={lang} services={L.services} ui={L.ui} />
      <Rental rental={L.rental} />
      <RentalInfo rental={L.rental} site={site} ui={L.ui} />
      <Moments
        moments={L.moments}
        ui={L.ui}
        allHref={href(lang, "/bo-suu-tap")}
        collectionsCount={collections.length}
      />
      <Seasonal seasonal={L.seasonal} ui={L.ui} collectionSlug="cosplay-halloween" />
      <Contact contact={L.contact} site={site} ui={L.ui} />
    </>
  );
}
