/**
 * Nội dung landing page. Tách riêng khỏi component để chỉnh sửa text
 * mà không phải động vào giao diện.
 */

export const navLinks = [
  { label: "Tính năng", href: "#features" },
  { label: "Quy trình", href: "#process" },
  { label: "Khách hàng", href: "#testimonials" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Mới: Gói thiết kế UI/UX trọn gói 2026",
  title: "Biến ý tưởng thành",
  highlight: "sản phẩm số",
  titleSuffix: "trong vài tuần",
  description:
    "Chúng tôi thiết kế, phát triển và tối ưu website, ứng dụng giúp doanh nghiệp của bạn ra mắt nhanh hơn, đẹp hơn và bán hàng hiệu quả hơn.",
  primaryCta: { label: "Bắt đầu dự án", href: "#contact" },
  secondaryCta: { label: "Xem bảng giá", href: "#pricing" },
  image: {
    src: "/images/hero/dashboard.svg",
    alt: "Giao diện dashboard minh hoạ",
    width: 1200,
    height: 760,
  },
};

export const partnerLogos = [
  { name: "Nebula", src: "/images/logos/nebula.svg" },
  { name: "Quantum", src: "/images/logos/quantum.svg" },
  { name: "Lumen", src: "/images/logos/lumen.svg" },
  { name: "Orbit", src: "/images/logos/orbit.svg" },
  { name: "Vertex", src: "/images/logos/vertex.svg" },
  { name: "Atlas", src: "/images/logos/atlas.svg" },
];

// `icon` là key trong src/components/ui/Icons.js
export const features = [
  {
    icon: "bolt",
    title: "Tốc độ vượt trội",
    description: "Tối ưu Core Web Vitals, tải trang dưới 1 giây giúp tăng tỉ lệ chuyển đổi.",
  },
  {
    icon: "sparkles",
    title: "Thiết kế tinh tế",
    description: "Giao diện hiện đại, nhất quán với thương hiệu, hiển thị đẹp trên mọi thiết bị.",
  },
  {
    icon: "chart",
    title: "Chuẩn SEO",
    description: "Cấu trúc dữ liệu, metadata, sitemap được thiết lập sẵn để lên top Google.",
  },
  {
    icon: "shield",
    title: "Bảo mật",
    description: "Áp dụng best practices về bảo mật, HTTPS và cập nhật thường xuyên.",
  },
  {
    icon: "puzzle",
    title: "Dễ mở rộng",
    description: "Kiến trúc component rõ ràng, dễ dàng thêm tính năng khi doanh nghiệp phát triển.",
  },
  {
    icon: "globe",
    title: "Hỗ trợ tận tâm",
    description: "Đội ngũ đồng hành 24/7, bảo hành và bảo trì sau khi bàn giao.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Khám phá",
    description: "Trao đổi mục tiêu, khách hàng và yêu cầu để xác định phạm vi dự án.",
  },
  {
    step: "02",
    title: "Thiết kế",
    description: "Lên wireframe và giao diện chi tiết, chỉnh sửa đến khi bạn hài lòng.",
  },
  {
    step: "03",
    title: "Phát triển",
    description: "Lập trình, kiểm thử và tối ưu hiệu năng trên mọi thiết bị.",
  },
  {
    step: "04",
    title: "Ra mắt",
    description: "Triển khai, theo dõi số liệu và tiếp tục cải thiện sau khi go-live.",
  },
];

export const stats = [
  { value: "150+", label: "Dự án hoàn thành" },
  { value: "98%", label: "Khách hàng hài lòng" },
  { value: "5 năm", label: "Kinh nghiệm" },
  { value: "24/7", label: "Hỗ trợ" },
];

export const testimonials = [
  {
    quote:
      "ButStudio giúp chúng tôi ra mắt website mới chỉ trong 3 tuần. Lượng đăng ký tăng gấp đôi ngay tháng đầu tiên.",
    name: "Nguyễn An",
    role: "CEO, Nebula",
    avatar: "/images/avatars/an.svg",
  },
  {
    quote:
      "Đội ngũ chuyên nghiệp, giao tiếp rõ ràng và luôn đúng tiến độ. Thiết kế vượt xa kỳ vọng của chúng tôi.",
    name: "Trần Minh",
    role: "Marketing Lead, Quantum",
    avatar: "/images/avatars/minh.svg",
  },
  {
    quote:
      "Trang web nhanh, đẹp và dễ quản lý. Chúng tôi sẽ tiếp tục hợp tác cho các dự án tiếp theo.",
    name: "Lê Hương Linh",
    role: "Founder, Lumen",
    avatar: "/images/avatars/linh.svg",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "Dành cho cá nhân và startup mới bắt đầu.",
    price: { monthly: 4900000, yearly: 3900000 },
    features: ["Landing page 1 trang", "Responsive mọi thiết bị", "SEO cơ bản", "Hỗ trợ qua email"],
    cta: { label: "Chọn Starter", href: "#contact" },
  },
  {
    name: "Business",
    description: "Phù hợp cho doanh nghiệp đang tăng trưởng.",
    price: { monthly: 12900000, yearly: 9900000 },
    features: [
      "Website tới 10 trang",
      "Thiết kế UI/UX riêng",
      "SEO nâng cao & Analytics",
      "Tích hợp CMS",
      "Hỗ trợ ưu tiên",
    ],
    cta: { label: "Chọn Business", href: "#contact" },
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Giải pháp tuỳ chỉnh cho tổ chức lớn.",
    price: null,
    features: [
      "Không giới hạn trang",
      "Ứng dụng web tuỳ chỉnh",
      "SLA & bảo mật",
      "Quản lý dự án riêng",
    ],
    cta: { label: "Liên hệ tư vấn", href: "#contact" },
  },
];

export const faqs = [
  {
    question: "Một dự án landing page mất bao lâu?",
    answer: "Thông thường từ 1–3 tuần tuỳ độ phức tạp, bao gồm thiết kế, phát triển và kiểm thử.",
  },
  {
    question: "Tôi có thể tự chỉnh sửa nội dung sau khi bàn giao không?",
    answer:
      "Có. Chúng tôi có thể tích hợp CMS hoặc hướng dẫn bạn chỉnh sửa nội dung một cách dễ dàng.",
  },
  {
    question: "Chi phí đã bao gồm hosting và tên miền chưa?",
    answer:
      "Chưa bao gồm. Chúng tôi sẽ tư vấn và hỗ trợ bạn đăng ký hosting, tên miền phù hợp nhất.",
  },
  {
    question: "Có chính sách bảo hành không?",
    answer:
      "Tất cả dự án đều được bảo hành 6 tháng và hỗ trợ kỹ thuật trong suốt quá trình sử dụng.",
  },
];

export const cta = {
  title: "Sẵn sàng bắt đầu dự án của bạn?",
  description: "Nhận tư vấn miễn phí và báo giá chi tiết trong vòng 24 giờ.",
  primary: { label: "Đặt lịch tư vấn", href: "mailto:hello@butstudio.vn" },
  secondary: { label: "Xem bảng giá", href: "#pricing" },
};

export const footerLinks = [
  {
    title: "Dịch vụ",
    links: [
      { label: "Thiết kế website", href: "#features" },
      { label: "Landing page", href: "#features" },
      { label: "UI/UX Design", href: "#features" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { label: "Quy trình", href: "#process" },
      { label: "Khách hàng", href: "#testimonials" },
      { label: "Bảng giá", href: "#pricing" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Liên hệ", href: "#contact" },
    ],
  },
];
