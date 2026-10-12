/**
 * Cấu hình chung của website — chỉnh sửa tại đây để thay đổi thương hiệu, SEO, liên hệ.
 */
export const siteConfig = {
  name: "ButStudio",
  shortName: "ButStudio",
  tagline: "Biến ý tưởng thành sản phẩm số",
  description:
    "ButStudio thiết kế và phát triển website, ứng dụng và sản phẩm số giúp doanh nghiệp tăng trưởng nhanh hơn.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "vi_VN",
  lastUpdated: "2026-10-12",
  themeColor: "#6366F1",
  keywords: ["ButStudio", "thiết kế website", "landing page", "phát triển sản phẩm", "Next.js"],
  contact: {
    email: "hello@butstudio.vn",
    phone: "+84 900 000 000",
    address: "TP. Hồ Chí Minh, Việt Nam",
  },
  social: {
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
  },
};
