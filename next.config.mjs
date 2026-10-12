/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Ẩn nút "N" góc trái khi dev (lỗi compile/runtime vẫn hiện overlay)
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Next 16 bắt buộc khai báo danh sách quality; ảnh studio dùng 90 cho nét
    qualities: [75, 90],
  },
  // Tiếng Việt là mặc định tại "/", tiếng Anh tại "/en" (route thật nằm ở app/[lang])
  async rewrites() {
    return [
      { source: "/", destination: "/vi" },
      { source: "/bo-suu-tap", destination: "/vi/bo-suu-tap" },
      { source: "/bo-suu-tap/:slug", destination: "/vi/bo-suu-tap/:slug" },
      { source: "/dich-vu", destination: "/vi/dich-vu" },
    ];
  },
};

export default nextConfig;
