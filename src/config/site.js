import { t } from "@/i18n";

/**
 * Thông tin thương hiệu, liên hệ, SEO — theo brief docs/demo.docx.
 */
export const siteConfig = {
  name: "Bụt Studio",
  shortName: "Bụt",
  tagline: t(
    "Trang phục truyền thống các nước trên thế giới",
    "Traditional costumes from around the world",
  ),
  description: t(
    "Bụt Studio Đà Nẵng — cho thuê trang phục truyền thống các nước: Việt phục, Hán phục, Kimono, Hanbok, cosplay, trang phục cưới & chụp ảnh theo concept. Hỗ trợ makeup, làm tóc và chụp ảnh.",
    "Bụt Studio Da Nang — rental of traditional costumes from around the world: Vietnamese, Hanfu, Kimono, Hanbok, cosplay, wedding and concept outfits. Makeup, hair styling and photo support available.",
  ),
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  lastUpdated: "2026-10-12",
  themeColor: "#f2f2f0",
  keywords: [
    "Bụt Studio",
    "thuê trang phục truyền thống Đà Nẵng",
    "thuê Hanbok Đà Nẵng",
    "thuê Kimono Đà Nẵng",
    "thuê Hán phục",
    "thuê Việt phục",
    "thuê đồ cosplay Đà Nẵng",
    "costume rental Da Nang",
  ],

  phone: "090 501 90 83",
  phoneRaw: "0905019083",
  zalo: "https://zalo.me/0905019083",
  facebook: "https://www.facebook.com/Soom.vn/",
  messenger: "https://m.me/Soom.vn",
  instagram: "https://www.instagram.com/", // TODO: khách bổ sung link Instagram chính thức
  mapsLink: "https://maps.app.goo.gl/HDR1uqqfFCUccfHE7",
  mapsEmbed:
    "https://www.google.com/maps?q=33+Phan+Ch%C3%A2u+Trinh,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng&z=17&hl=vi&output=embed",

  address: t(
    "33 Phan Châu Trinh, Quận Hải Châu, TP. Đà Nẵng",
    "33 Phan Chau Trinh, Hai Chau District, Da Nang",
  ),
  addressShort: t("33 Phan Châu Trinh, Đà Nẵng", "33 Phan Chau Trinh, Da Nang"),
  geo: { lat: 16.0678, lng: 108.2208 },

  // Giờ hoạt động theo brief
  hours: [
    { days: t("Thứ 2, 5, 6, 7 & Chủ nhật", "Mon, Thu, Fri, Sat & Sun"), time: "08:00 – 19:00" },
    { days: t("Thứ 3 & Thứ 4", "Tue & Wed"), time: "08:00 – 21:00" },
  ],
  hoursShort: t("Mở cửa hằng ngày từ 08:00", "Open daily from 08:00"),
  openingHoursSchema: ["Mo,Th,Fr,Sa,Su 08:00-19:00", "Tu,We 08:00-21:00"],
};
