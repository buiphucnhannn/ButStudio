// ============================================================
// TOÀN BỘ nội dung text / ảnh / bộ sưu tập của Bụt Studio.
// Chuỗi song ngữ viết dạng t("tiếng Việt", "English").
// Sửa nội dung tại đây, không cần đụng vào component.
// ============================================================
import { t } from "@/i18n";

const P = (group, n) => `/images/${group}/${group}-${String(n).padStart(2, "0")}.jpg`;

export const photos = {
  logo: "/images/brand/logo.png",
};

// ---------- Điều hướng ----------
export const nav = [
  { label: t("Về Bụt", "About"), href: "/#about" },
  { label: t("Bộ sưu tập", "Collections"), href: "/bo-suu-tap" },
  { label: t("Dịch vụ", "Services"), href: "/dich-vu" },
  { label: t("Thuê thế nào", "How it works"), href: "/#rental" },
  { label: t("Liên hệ", "Contact"), href: "/#contact" },
];

export const ui = {
  book: t("Đặt lịch thuê", "Book a fitting"),
  bookFree: t("Đặt lịch thuê trang phục", "Book a costume fitting"),
  explore: t("Khám phá bộ sưu tập", "Explore collections"),
  viewAll: t("Xem tất cả", "View all"),
  viewAlbum: t("Xem album", "View album"),
  swipe: t("Vuốt ngang để xem thêm →", "Swipe to see more →"),
  hover: t(
    "Rê chuột vào từng cột để khám phá. Mỗi bộ sưu tập là một vùng đất riêng.",
    "Hover each column to explore. Every collection is a world of its own.",
  ),
  scroll: t("Cuộn", "Scroll"),
  home: t("Trang chủ", "Home"),
  collections: t("Bộ sưu tập", "Collections"),
  nextCollection: t("Bộ sưu tập tiếp theo", "Next collection"),
  aboutCollection: t("Về bộ sưu tập", "About this collection"),
  bookThis: t("Đặt lịch thuê bộ này", "Book this collection"),
  photos: t("ảnh", "photos"),
  closeMenu: t("Đóng menu", "Close menu"),
  openMenu: t("Mở menu", "Open menu"),
  hotline: t("Hotline / Zalo", "Hotline / Zalo"),
  menu: t("Menu", "Menu"),
  contact: t("Liên hệ", "Contact"),
  map: t("Bản đồ", "Map"),
  directions: t("Chỉ đường trên Google Maps", "Get directions on Google Maps"),
  openHours: t("Giờ mở cửa", "Opening hours"),
  toTop: t("Lên đầu trang", "Back to top"),
  all: t("Tất cả", "All"),
  byCountry: t("Theo quốc gia", "By country"),
  byStyle: t("Theo phong cách", "By style"),
  resetFilters: t("Xoá bộ lọc", "Clear filters"),
  noResults: t(
    "Chưa có bộ sưu tập phù hợp với bộ lọc này.",
    "No collection matches these filters yet.",
  ),
  notFoundTitle: t("Không tìm thấy trang", "Page not found"),
  notFoundDesc: t(
    "Trang bạn tìm không tồn tại hoặc đã được di chuyển.",
    "The page you are looking for does not exist or has moved.",
  ),
  backHome: t("Về trang chủ", "Back to home"),
  priceContact: t("Giá thuê: liên hệ", "Rental price: contact us"),
  album: t("Album", "Album"),
  priceLabel: t("Giá thuê", "Rental price"),
  priceValue: t("Liên hệ", "Contact us"),
  callNow: t("Gọi ngay", "Call now"),
  chatMessenger: t("Chat Messenger", "Chat on Messenger"),
  chatZalo: t("Chat Zalo", "Chat on Zalo"),
};

// ---------- Phân loại: quốc gia & phong cách ----------
export const countries = {
  vn: t("Việt Nam", "Vietnam"),
  cn: t("Trung Hoa", "China"),
  jp: t("Nhật Bản", "Japan"),
  kr: t("Hàn Quốc", "Korea"),
  eu: t("Châu Âu", "Europe"),
  world: t("Đa quốc gia", "Worldwide"),
};

export const styles = {
  traditional: t("Truyền thống", "Traditional"),
  period: t("Cổ trang", "Period drama"),
  wedding: t("Cưới", "Wedding"),
  cosplay: t("Cosplay", "Cosplay"),
  kids: t("Trẻ em", "Kids"),
};

// \u00a0 = khoảng trắng không ngắt dòng: giữ từ ghép tiếng Việt đi liền nhau ("truyền thống", "Nhật Bản"…)
// để tên bộ sưu tập không bị ngắt giữa chừng kiểu "Cưới truyền / thống".
// ---------- Bộ sưu tập (8 bộ, dùng đủ 67 ảnh trong kho) ----------
// pos = objectPosition cho ảnh bìa; ảnh dọc chụp chân dung thường cần "center 20%" để không cắt mặt.
export const collections = [
  {
    slug: "viet-phuc",
    name: t("Việt\u00a0phục", "Vietnamese Heritage"),
    sub: t("Việt\u00a0Nam · Truyền\u00a0thống", "Vietnam · Traditional"),
    country: "vn",
    style: "traditional",
    concept: t("Áo dài, Nhật Bình, nón quai thao", "Áo dài, Nhật Bình, flat palm hats"),
    desc: t(
      "Từ tà áo dài dịu dàng bên sen đến Nhật Bình cung đình và áo ngũ thân bên nón quai thao — bộ sưu tập Việt phục của Bụt kể lại vẻ đẹp Việt bằng ngôn ngữ hình ảnh hôm nay.",
      "From graceful áo dài beside lotus ponds to royal Nhật Bình and five-panel robes with flat palm hats — Bụt's Vietnamese collection retells Vietnamese beauty in today's visual language.",
    ),
    cover: P("viet-phuc", 4),
    coverPos: "center 30%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("viet-phuc", 4), pos: "center 20%" },
    images: [
      { src: P("viet-phuc", 1), pos: "center 20%" },
      { src: P("viet-phuc", 2), pos: "center 25%" },
      { src: P("viet-phuc", 3), pos: "center 25%" },
      { src: P("viet-phuc", 4), pos: "center 30%" },
      { src: P("viet-phuc", 5), pos: "center 30%" },
      { src: P("viet-phuc", 6), pos: "center", wide: true },
      { src: P("viet-phuc", 7), pos: "center 40%" },
      { src: P("viet-phuc", 8), pos: "center 20%" },
    ],
  },
  {
    slug: "han-phuc",
    name: t("Hán\u00a0phục cổ\u00a0trang", "Hanfu"),
    sub: t("Trung\u00a0Hoa · Cổ\u00a0trang", "China · Period\u00a0drama"),
    country: "cn",
    style: "period",
    concept: t("Tiên hiệp, Đường – Tống – Minh", "Xianxia, Tang – Song – Ming dynasties"),
    desc: t(
      "Bộ sưu tập lớn nhất của Bụt: váy lụa nhiều lớp, tay áo rộng, trâm cài và hoa tươi — từ nàng tiên tuyết trắng đến ánh đèn lồng đỏ đêm hội. Phù hợp chụp trong studio, phố cổ Hội An hay Bà Nà.",
      "Bụt's largest collection: layered silk gowns, wide sleeves, hairpins and fresh flowers — from snow-white fairies to red lantern nights. Perfect for studio shoots, Hội An old town or Bà Nà Hills.",
    ),
    cover: P("han-phuc", 19),
    coverPos: "center 20%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("han-phuc", 19), pos: "center 6%" },
    images: [
      { src: P("han-phuc", 1), pos: "center 20%" },
      { src: P("han-phuc", 2), pos: "center 30%" },
      { src: P("han-phuc", 3), pos: "center 20%" },
      { src: P("han-phuc", 4), pos: "center 20%" },
      { src: P("han-phuc", 5), pos: "center 25%" },
      { src: P("han-phuc", 6), pos: "center 30%" },
      { src: P("han-phuc", 7), pos: "center 30%" },
      { src: P("han-phuc", 8), pos: "center 25%" },
      { src: P("han-phuc", 9), pos: "center 25%" },
      { src: P("han-phuc", 10), pos: "center 20%" },
      { src: P("han-phuc", 11), pos: "center 20%" },
      { src: P("han-phuc", 12), pos: "center 20%" },
      { src: P("han-phuc", 13), pos: "center 25%" },
      { src: P("han-phuc", 14), pos: "center 25%" },
      { src: P("han-phuc", 15), pos: "center 30%" },
      { src: P("han-phuc", 16), pos: "center 25%" },
      { src: P("han-phuc", 17), pos: "center 20%" },
      { src: P("han-phuc", 18), pos: "center 25%" },
      { src: P("han-phuc", 19), pos: "center 20%" },
      { src: P("han-phuc", 20), pos: "center 25%" },
      { src: P("han-phuc", 21), pos: "center 25%" },
      { src: P("han-phuc", 22), pos: "center 25%" },
    ],
  },
  {
    slug: "don-hoang",
    name: t("Đôn\u00a0Hoàng & Tây\u00a0Vực", "Dunhuang & Silk\u00a0Road"),
    sub: t("Trung\u00a0Hoa · Cổ\u00a0trang", "China · Period\u00a0drama"),
    country: "cn",
    style: "period",
    concept: t("Phi thiên, lụa mỏng, sắc cam – lam", "Flying apsaras, sheer silk, amber & blue"),
    desc: t(
      "Cảm hứng từ bích hoạ Đôn Hoàng và con đường tơ lụa: khăn voan bay, trang sức bạc, sắc cam hoàng hôn và lam ngọc. Một concept táo bạo, rất ăn ảnh ngoài trời.",
      "Inspired by Dunhuang murals and the Silk Road: flowing veils, silver jewellery, sunset amber and turquoise blue. A bold concept that photographs beautifully outdoors.",
    ),
    cover: P("don-hoang", 2),
    coverPos: "center 25%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("don-hoang", 2), pos: "center 15%" },
    images: [
      { src: P("don-hoang", 1), pos: "center 25%" },
      { src: P("don-hoang", 2), pos: "center 25%" },
      { src: P("don-hoang", 3), pos: "center 20%" },
      { src: P("don-hoang", 4), pos: "center 20%" },
      { src: P("don-hoang", 5), pos: "center 20%" },
      { src: P("don-hoang", 6), pos: "center 25%" },
    ],
  },
  {
    slug: "nhat-ban",
    name: t("Kimono Nhật\u00a0Bản", "Japanese Kimono"),
    sub: t("Nhật\u00a0Bản · Truyền\u00a0thống", "Japan · Traditional"),
    country: "jp",
    style: "traditional",
    concept: t("Kimono, yukata, phong cách Harajuku", "Kimono, yukata, Harajuku style"),
    desc: t(
      "Kimono trắng thêu hoa với obi đỏ, trâm cài tóc và chiếc quạt giấy — cùng những biến tấu hiện đại theo phong cách đường phố Nhật. Gọn, dễ mặc, rất hợp với dạo phố và quán trà.",
      "White embroidered kimono with red obi, hairpins and paper fans — plus modern twists inspired by Japanese street style. Light, easy to wear, perfect for strolls and tea houses.",
    ),
    cover: P("nhat-ban", 1),
    coverPos: "center 20%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("nhat-ban", 1), pos: "center 15%" },
    images: [
      { src: P("nhat-ban", 1), pos: "center 20%" },
      { src: P("nhat-ban", 2), pos: "center 20%" },
      { src: P("nhat-ban", 3), pos: "center 25%", square: true },
    ],
  },
  {
    slug: "chau-au",
    name: t("Châu\u00a0Âu & Hoàng\u00a0gia", "European Royalty"),
    sub: t("Châu\u00a0Âu · Truyền\u00a0thống", "Europe · Traditional"),
    country: "eu",
    style: "traditional",
    concept: t(
      "Váy Victorian, áo choàng hoàng tử, lolita",
      "Victorian gowns, princely capes, lolita",
    ),
    desc: t(
      "Váy phồng ren Victorian, áo choàng nhung đỏ viền vàng và những chiếc đầm công chúa — dành cho ai muốn bước ra từ một cung điện châu Âu, hoặc một trang truyện cổ tích.",
      "Lace Victorian ball gowns, gold-trimmed red velvet capes and princess dresses — for those who want to step out of a European palace, or a page of a fairy tale.",
    ),
    cover: P("chau-au", 1),
    coverPos: "center 25%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("chau-au", 1), pos: "center 22%" },
    images: [
      { src: P("chau-au", 1), pos: "center 25%" },
      { src: P("chau-au", 2), pos: "center 30%", square: true },
      { src: P("chau-au", 3), pos: "center 30%", square: true },
      { src: P("chau-au", 4), pos: "center 20%" },
    ],
  },
  {
    slug: "cuoi-truyen-thong",
    name: t("Cưới truyền\u00a0thống", "Traditional Wedding"),
    sub: t("Việt\u00a0Nam & Trung\u00a0Hoa\u00a0·\u00a0Cưới", "Vietnam & China\u00a0·\u00a0Wedding"),
    country: "world",
    style: "wedding",
    concept: t(
      "Áo dài cưới gấm, khăn đóng, hỷ phục",
      "Brocade wedding áo dài, headdress, red hỷ phục",
    ),
    desc: t(
      "Sắc đỏ may mắn cho ngày trọng đại: áo dài cưới gấm thêu rồng phượng, khăn đóng, hỷ phục Trung Hoa với khăn voan đỏ. Bụt có sẵn bộ đôi cho cô dâu – chú rể và phụ kiện đi kèm.",
      "Lucky red for the big day: brocade wedding áo dài embroidered with dragons and phoenixes, headdresses, Chinese hỷ phục with red veils. Matching sets for bride and groom with accessories.",
    ),
    cover: P("cuoi-truyen-thong", 1),
    coverPos: "center 45%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("cuoi-truyen-thong", 2), pos: "center 25%" },
    images: [
      { src: P("cuoi-truyen-thong", 1), pos: "center 45%", wide: true },
      { src: P("cuoi-truyen-thong", 2), pos: "center 30%", wide: true },
      { src: P("cuoi-truyen-thong", 3), pos: "center 25%", square: true },
      { src: P("cuoi-truyen-thong", 4), pos: "center 30%" },
    ],
  },
  {
    slug: "cosplay-halloween",
    name: t("Cosplay &\u00a0Halloween", "Cosplay &\u00a0Halloween"),
    sub: t("Đa quốc\u00a0gia ·\u00a0Cosplay", "Worldwide ·\u00a0Cosplay"),
    country: "world",
    style: "cosplay",
    seasonal: true,
    concept: t("Phim ảnh, anime, kinh dị, nhóm bạn", "Movies, anime, horror, group costumes"),
    desc: t(
      "Từ Tề Thiên Đại Thánh, Squid Game, Hogwarts đến nữ tu, chú hề và búp bê Annabelle — bộ sưu tập dành cho tiệc hoá trang, Halloween và những nhóm bạn thích cùng nhau 'lên đồ'.",
      "From the Monkey King, Squid Game and Hogwarts to nuns, jesters and Annabelle — a collection for costume parties, Halloween and friend groups who love dressing up together.",
    ),
    cover: P("cosplay-halloween", 11),
    coverPos: "center 30%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("cosplay-halloween", 3), pos: "center 40%" },
    images: [
      { src: P("cosplay-halloween", 1), pos: "center 25%", square: true },
      { src: P("cosplay-halloween", 2), pos: "center 25%", square: true },
      { src: P("cosplay-halloween", 3), pos: "center", wide: true },
      { src: P("cosplay-halloween", 4), pos: "center 30%" },
      { src: P("cosplay-halloween", 5), pos: "center 30%" },
      { src: P("cosplay-halloween", 6), pos: "center 30%" },
      { src: P("cosplay-halloween", 7), pos: "center 25%" },
      { src: P("cosplay-halloween", 8), pos: "center 25%" },
      { src: P("cosplay-halloween", 9), pos: "center 30%" },
      { src: P("cosplay-halloween", 10), pos: "center 20%" },
      { src: P("cosplay-halloween", 11), pos: "center 30%" },
      { src: P("cosplay-halloween", 12), pos: "center", square: true },
      { src: P("cosplay-halloween", 13), pos: "center 30%" },
      { src: P("cosplay-halloween", 14), pos: "center 40%" },
      { src: P("cosplay-halloween", 15), pos: "center 30%" },
      { src: P("cosplay-halloween", 16), pos: "center 25%" },
      { src: P("cosplay-halloween", 17), pos: "center 30%" },
    ],
  },
  {
    slug: "be-yeu",
    name: t("Bé\u00a0yêu", "Little Ones"),
    sub: t("Đa quốc\u00a0gia · Trẻ\u00a0em", "Worldwide ·\u00a0Kids"),
    country: "world",
    style: "kids",
    concept: t("Hán phục & Việt phục cho bé", "Hanfu & Vietnamese outfits for kids"),
    desc: t(
      "Những bộ Hán phục, Việt phục thu nhỏ cho bé từ 3 tuổi — chất vải mềm, dễ mặc, dễ vận động. Rất hợp chụp ảnh gia đình, Tết và Trung thu.",
      "Mini Hanfu and Vietnamese outfits for kids from age 3 — soft fabrics, easy to wear and move in. Perfect for family photos, Lunar New Year and Mid-Autumn Festival.",
    ),
    cover: P("be-yeu", 3),
    coverPos: "center 30%",
    // Ảnh nền trang chi tiết (khung ngang ~1.8:1 bên phải hero) — chọn để thấy rõ mặt & trang phục
    hero: { src: P("be-yeu", 3), pos: "center 30%" },
    images: [
      { src: P("be-yeu", 1), pos: "center 20%", square: true },
      { src: P("be-yeu", 2), pos: "center 20%", square: true },
      { src: P("be-yeu", 3), pos: "center 30%", square: true },
    ],
  },
];

export const getCollection = (slug) => collections.find((c) => c.slug === slug);
export const featuredCollections = [
  "viet-phuc",
  "han-phuc",
  "don-hoang",
  "nhat-ban",
  "chau-au",
  "cosplay-halloween",
].map(getCollection);

// ---------- Hero ----------
export const hero = {
  eyebrow: t(
    "Bụt Studio · 33 Phan Châu Trinh · Đà Nẵng",
    "Bụt Studio · 33 Phan Chau Trinh · Da Nang",
  ),
  title: t("Khoác lên mình", "Wear the stories"),
  accent: t("câu chuyện của thế giới.", "of the world."),
  desc: t(
    "Cho thuê trang phục truyền thống các nước, cổ trang, cosplay và trang phục cưới — kèm makeup, làm tóc và hỗ trợ chụp ảnh ngay trung tâm Đà Nẵng.",
    "Traditional costumes from around the world, period drama, cosplay and wedding outfits for rent — with makeup, hair styling and photo support in the heart of Da Nang.",
  ),
  // 3 cột ảnh dọc (desktop), mỗi cột xoay vòng lệch nhịp
  columns: [
    [
      { src: P("viet-phuc", 1), pos: "center 20%" },
      { src: P("han-phuc", 19), pos: "center 20%" },
      { src: P("chau-au", 1), pos: "center 25%" },
    ],
    [
      { src: P("han-phuc", 2), pos: "center 30%" },
      { src: P("viet-phuc", 5), pos: "center 30%" },
      { src: P("don-hoang", 2), pos: "center 25%" },
    ],
    [
      { src: P("nhat-ban", 1), pos: "center 20%" },
      { src: P("han-phuc", 16), pos: "center 25%" },
      { src: P("cosplay-halloween", 1), pos: "center 25%" },
    ],
  ],
  badges: [
    t(
      "Việt Nam · Trung Hoa · Nhật Bản · Hàn Quốc · Châu Âu",
      "Vietnam · China · Japan · Korea · Europe",
    ),
    t("Makeup · Làm tóc · Hỗ trợ chụp ảnh", "Makeup · Hair · Photo support"),
    t("Nhận đồ trực tiếp tại cửa hàng", "Pick up in store"),
  ],
};

// ---------- Dải chữ chạy ----------
export const marquee = [
  t("Việt phục", "Vietnamese"),
  t("Hán phục", "Hanfu"),
  t("Kimono", "Kimono"),
  t("Hanbok", "Hanbok"),
  t("Đôn Hoàng", "Dunhuang"),
  t("Hoàng gia châu Âu", "European royalty"),
  t("Cosplay", "Cosplay"),
  t("Cưới truyền thống", "Traditional wedding"),
  t("Bé yêu", "Kids"),
];

// ---------- Về Bụt ----------
export const about = {
  eyebrow: t("Về Bụt", "About Bụt"),
  manifesto: [
    { text: t("Mỗi bộ trang phục", "Every costume") },
    { text: t("là một tấm vé", "is a ticket") },
    { text: t("đến một", "to a") },
    { text: t("vùng đất khác.", "different land."), accent: true },
  ],
  paragraphs: [
    t(
      "Bụt Studio là kho trang phục truyền thống các nước ngay trung tâm Đà Nẵng: Việt phục, Hán phục, Kimono, Hanbok, trang phục cưới, cosplay và trang phục theo concept.",
      "Bụt Studio is a wardrobe of traditional costumes from around the world in the heart of Da Nang: Vietnamese, Hanfu, Kimono, Hanbok, wedding, cosplay and concept outfits.",
    ),
    t(
      "Bạn chỉ cần đến — Bụt lo phần còn lại: chọn đồ, phối phụ kiện, makeup, làm tóc và gợi ý góc chụp đẹp quanh thành phố.",
      "Just show up — Bụt takes care of the rest: outfit selection, accessories, makeup, hair styling and the best photo spots around the city.",
    ),
  ],
  main: { src: P("viet-phuc", 4), pos: "center 30%" },
  polaroids: [
    { src: P("han-phuc", 1), caption: "hanfu sisters", pos: "center 20%" },
    { src: P("chau-au", 3), caption: "victorian", pos: "center 30%", square: true },
  ],
  highlights: [
    { value: "08", label: t("Bộ sưu tập", "Collections") },
    { value: "05+", label: t("Quốc gia & phong cách", "Countries & styles") },
    { value: "1:1", label: t("Stylist đồng hành", "Personal stylist") },
  ],
};

// ---------- Dịch vụ (5 mục theo brief) ----------
export const services = {
  eyebrow: t("Dịch vụ", "Services"),
  title: t("Từ tủ đồ đến khung hình.", "From wardrobe to frame."),
  desc: t(
    "Rê chuột vào từng dịch vụ để xem hình minh hoạ. Mọi gói đều có thể kết hợp với nhau.",
    "Hover each service to preview. Every service can be combined.",
  ),
  items: [
    {
      n: "01",
      title: t("Trang phục truyền thống các nước", "Traditional costumes worldwide"),
      desc: t(
        "Việt phục, Hán phục, Đôn Hoàng, hoàng gia châu Âu… đủ size, đủ phụ kiện đi kèm.",
        "Vietnamese, Hanfu, Dunhuang, European royalty… all sizes, accessories included.",
      ),
      image: P("viet-phuc", 6),
      pos: "center",
      collection: "viet-phuc",
    },
    {
      n: "02",
      title: t("Hanbok Hàn Quốc & Kimono Nhật Bản", "Korean Hanbok & Japanese Kimono"),
      desc: t(
        "Hanbok nhiều màu và kimono thêu hoa, hướng dẫn mặc đúng cách trong 10 phút.",
        "Colourful hanbok and embroidered kimono, properly fitted in 10 minutes.",
      ),
      image: P("nhat-ban", 2),
      pos: "center 20%",
      collection: "nhat-ban",
    },
    {
      n: "03",
      title: t("Trang phục cosplay", "Cosplay costumes"),
      desc: t(
        "Nhân vật phim, anime, kinh dị — có set cho nhóm bạn và cặp đôi.",
        "Movie, anime and horror characters — sets for groups and couples.",
      ),
      image: P("cosplay-halloween", 3),
      pos: "center",
      collection: "cosplay-halloween",
    },
    {
      n: "04",
      title: t("Trang phục cưới & chụp theo concept", "Wedding & concept outfits"),
      desc: t(
        "Áo dài cưới gấm, hỷ phục, bộ đôi cô dâu – chú rể và concept chụp ảnh riêng.",
        "Brocade wedding áo dài, hỷ phục, bride & groom sets and custom photo concepts.",
      ),
      image: P("cuoi-truyen-thong", 2),
      pos: "center 30%",
      collection: "cuoi-truyen-thong",
    },
    {
      n: "05",
      title: t("Makeup, làm tóc & hỗ trợ chụp ảnh", "Makeup, hair & photo support"),
      desc: t(
        "Makeup theo concept, vấn tóc, cài trâm và gợi ý góc chụp đẹp quanh Đà Nẵng.",
        "Concept makeup, hair styling, hairpins and the best photo spots around Da Nang.",
      ),
      image: P("han-phuc", 13),
      pos: "center 25%",
    },
  ],
};

// ---------- Thuê thế nào (3 bước) + thông tin ----------
export const rental = {
  eyebrow: t("Thuê thế nào", "How it works"),
  title: t("Bốn bước để hoá thân.", "Four steps to transform."),
  // Nguồn DUY NHẤT cho các bước thuê — dùng ở trang chủ (Thuê thế nào) và trang Dịch vụ (Hành trình)
  steps: [
    {
      n: "01",
      title: t("Tư vấn & chọn bộ", "Consult & choose"),
      desc: t(
        "Nhắn Bụt concept, dịp chụp và số người — Bụt gợi ý bộ sưu tập phù hợp và giữ lịch cho bạn.",
        "Tell Bụt your concept, occasion and group size — we suggest the right collection and hold your slot.",
      ),
      image: P("cuoi-truyen-thong", 4),
      pos: "center 30%",
    },
    {
      n: "02",
      title: t("Thử đồ & phụ kiện", "Fitting & accessories"),
      desc: t(
        "Đến cửa hàng thử đồ, chọn size và phối trâm, quạt, nón, khăn sao cho đúng tinh thần trang phục.",
        "Try on in store, pick your size and pair hairpins, fans, hats and veils true to the costume.",
      ),
      image: P("han-phuc", 13),
      pos: "center 20%",
    },
    {
      n: "03",
      title: t("Makeup & làm tóc", "Makeup & hair"),
      desc: t(
        "Makeup theo concept, vấn tóc và cài phụ kiện tóc để bạn hoàn thiện diện mạo trước khi chụp.",
        "Concept makeup, hair styling and hair accessories to complete your look before the shoot.",
      ),
      image: P("han-phuc", 12),
      pos: "center 20%",
    },
    {
      n: "04",
      title: t("Chụp ảnh & trả đồ", "Shoot & return"),
      desc: t(
        "Chụp tại studio hoặc dạo phố Đà Nẵng, Hội An với gợi ý góc chụp của Bụt, rồi quay lại trả đồ.",
        "Shoot in studio or around Da Nang and Hội An with Bụt's spot suggestions, then return the outfit.",
      ),
      image: P("han-phuc", 9),
      pos: "center 25%",
    },
  ],
  priceTitle: t("Giá thuê", "Rental price"),
  priceNote: t(
    "Liên hệ để được tư vấn và báo giá theo bộ, số người và thời gian thuê.",
    "Contact us for a quote based on the outfit, group size and rental time.",
  ),
  pickup: t(
    "Khách nhận trang phục trực tiếp tại cửa hàng 33 Phan Châu Trinh.",
    "Pick up your costume directly at 33 Phan Chau Trinh.",
  ),
  // Nền ảnh ghép cho section RentalInfo (2 hàng trôi ngược chiều) — chọn ảnh đa dạng, ít trùng section khác
  collage: [
    { src: P("viet-phuc", 3), pos: "center 25%" },
    { src: P("han-phuc", 4), pos: "center 20%" },
    { src: P("don-hoang", 3), pos: "center 20%" },
    { src: P("chau-au", 2), pos: "center 30%" },
    { src: P("han-phuc", 15), pos: "center 30%" },
    { src: P("nhat-ban", 3), pos: "center 25%" },
    { src: P("han-phuc", 21), pos: "center 25%" },
    { src: P("cuoi-truyen-thong", 3), pos: "center 25%" },
    { src: P("han-phuc", 8), pos: "center 25%" },
    { src: P("viet-phuc", 6), pos: "center" },
    { src: P("don-hoang", 5), pos: "center 20%" },
    { src: P("han-phuc", 18), pos: "center 25%" },
    { src: P("be-yeu", 2), pos: "center 20%" },
    { src: P("han-phuc", 22), pos: "center 25%" },
    { src: P("viet-phuc", 5), pos: "center 30%" },
    { src: P("han-phuc", 11), pos: "center 20%" },
  ],
  perks: [
    t("Đủ phụ kiện đi kèm", "Accessories included"),
    t("Hỗ trợ mặc đúng cách", "Dressing assistance"),
    t("Có set nhóm & cặp đôi", "Group & couple sets"),
  ],
};

// ---------- Khoảnh khắc (dải ngang) ----------
export const moments = {
  eyebrow: t("Khoảnh khắc", "Moments"),
  title: t("Những khung hình khách đã mang về.", "Frames our guests took home."),
  hint: t(
    "Cuộn tiếp để lướt qua ảnh khách chụp cùng Bụt",
    "Keep scrolling to browse photos our guests took with Bụt",
  ),
  items: [
    { src: P("han-phuc", 5), size: "tall", caption: t("Hán phục & alpaca", "Hanfu & alpaca") },
    { src: P("don-hoang", 1), size: "square", caption: t("Tây Vực lam ngọc", "Silk Road blue") },
    { src: P("viet-phuc", 7), size: "tall", caption: t("Làng quê Việt", "Vietnamese village") },
    { src: P("chau-au", 4), size: "tall", caption: t("Vintage châu Âu", "European vintage") },
    { src: P("han-phuc", 14), size: "square", caption: t("Đêm trắng", "White night") },
    { src: P("cosplay-halloween", 2), size: "tall", caption: "Squid Game" },
    { src: P("han-phuc", 10), size: "tall", caption: t("Hí khúc", "Opera") },
    { src: P("be-yeu", 3), size: "square", caption: t("Bé yêu", "Little ones") },
    { src: P("viet-phuc", 8), size: "tall", caption: t("Áo dài vàng", "Yellow áo dài") },
    { src: P("don-hoang", 6), size: "tall", caption: t("Du mục", "Nomad") },
    { src: P("cosplay-halloween", 16), size: "square", caption: "Annabelle" },
    { src: P("han-phuc", 7), size: "tall", caption: t("Phòng trà đỏ", "Red tea room") },
  ],
};

// ---------- Mùa Halloween (gợi ý concept theo brief) ----------
export const seasonal = {
  eyebrow: t("Gợi ý mùa này", "This season"),
  title: t(
    "Halloween 2026 — lên đồ cùng cả nhóm.",
    "Halloween 2026 — dress up with the whole crew.",
  ),
  desc: t(
    "Nữ tu, chú hề, cương thi, Hogwarts hay Squid Game — Bụt có set cho nhóm 2 đến 10 người, kèm makeup kinh dị. Đặt sớm để giữ size.",
    "Nuns, jesters, jiangshi, Hogwarts or Squid Game — Bụt has sets for groups of 2 to 10, with horror makeup. Book early to secure sizes.",
  ),
  cta: t("Đặt set Halloween", "Book a Halloween set"),
  posters: [
    P("cosplay-halloween", 7),
    P("cosplay-halloween", 12),
    P("cosplay-halloween", 14),
    P("cosplay-halloween", 8),
    P("cosplay-halloween", 13),
    P("cosplay-halloween", 15),
    P("cosplay-halloween", 9),
    P("cosplay-halloween", 17),
    P("cosplay-halloween", 10),
    P("cosplay-halloween", 11),
    P("cosplay-halloween", 4),
    P("cosplay-halloween", 5),
    P("cosplay-halloween", 6),
  ],
};

// ---------- Liên hệ (khối mời gọi cuối trang) ----------
export const contact = {
  script: t("Hẹn gặp bạn ở Bụt", "See you at Bụt"),
  eyebrow: t("Liên hệ & đặt lịch", "Contact & booking"),
  title: t("Hôm nay bạn muốn là ai?", "Who do you want to be today?"),
  desc: t(
    "Nhắn Bụt qua Messenger hoặc Zalo, gọi điện hay ghé thẳng cửa hàng — Bụt tư vấn bộ phù hợp và giữ lịch cho bạn.",
    "Message Bụt on Messenger or Zalo, call, or drop by the store — we'll suggest the right outfit and hold your slot.",
  ),
  polaroids: [
    { src: P("viet-phuc", 2), caption: "lotus", pos: "center 25%" },
    { src: P("han-phuc", 17), caption: "snow fairy", pos: "center 20%" },
    { src: P("nhat-ban", 1), caption: "kimono", pos: "center 20%" },
    { src: P("be-yeu", 1), caption: "mini hanfu", pos: "center 20%", square: true },
  ],
};

// ---------- Popup đặt lịch ----------
export const booking = {
  title: t("Đặt lịch thuê trang phục", "Book a costume fitting"),
  desc: t(
    "Để lại thông tin, Bụt sẽ liên hệ xác nhận lịch và tư vấn bộ phù hợp trong ngày.",
    "Leave your details and Bụt will confirm your slot and suggest outfits within the day.",
  ),
  image: { src: P("han-phuc", 6), pos: "center 30%" },
  // "\n" = ngắt dòng có chủ đích (hiển thị bằng whitespace-pre-line)
  headline: t("Đến là có đồ,\ncó makeup, có ảnh đẹp.", "Just show up —\nwe handle the rest."),
  bullets: [
    t("Đủ phụ kiện: trâm, quạt, nón, khăn", "Accessories included: hairpins, fans, hats, veils"),
    t("Makeup & làm tóc theo concept", "Concept makeup & hair styling"),
    t("Nhận đồ tại 33 Phan Châu Trinh", "Pick up at 33 Phan Chau Trinh"),
  ],
  fields: {
    name: t("Họ tên", "Full name"),
    phone: t("Số điện thoại / Zalo", "Phone / Zalo"),
    date: t("Ngày muốn thuê", "Rental date"),
    people: t("Số người", "Group size"),
    collection: t("Bộ sưu tập quan tâm", "Collection of interest"),
    note: t("Ghi chú (size, concept, địa điểm chụp…)", "Notes (size, concept, shooting location…)"),
    undecided: t("Chưa quyết định, cần tư vấn", "Not sure yet, need advice"),
    submit: t("Gửi qua Messenger", "Send via Messenger"),
    submitZalo: t("Gửi qua Zalo", "Send via Zalo"),
    or: t("Hoặc liên hệ nhanh:", "Or contact directly:"),
    copied: t(
      "Đã sao chép nội dung — dán vào khung chat nhé!",
      "Message copied — paste it in the chat!",
    ),
    privacy: t(
      "Bụt chỉ dùng thông tin này để xác nhận lịch thuê.",
      "Bụt only uses this information to confirm your booking.",
    ),
  },
  // nội dung tin nhắn soạn sẵn
  message: t(
    "Xin chào Bụt Studio, mình muốn đặt lịch thuê trang phục:",
    "Hello Bụt Studio, I'd like to book a costume fitting:",
  ),
};

// ---------- Trang Dịch vụ (/dich-vu) ----------
export const servicesPage = {
  meta: {
    title: t("Dịch vụ", "Services"),
    desc: t(
      "Dịch vụ của Bụt Studio Đà Nẵng: cho thuê trang phục truyền thống các nước, Hanbok, Kimono, cosplay, trang phục cưới & concept, makeup, làm tóc và hỗ trợ chụp ảnh.",
      "Bụt Studio Da Nang services: traditional costume rental from around the world, Hanbok, Kimono, cosplay, wedding & concept outfits, makeup, hair styling and photo support.",
    ),
  },
  hero: {
    eyebrow: t("Dịch vụ của Bụt", "Bụt's services"),
    title: t("Một lần ghé,", "One visit,"),
    accent: t("trọn vẹn khung hình.", "a complete look."),
    desc: t(
      "Từ chọn trang phục, phối phụ kiện đến makeup, làm tóc và gợi ý góc chụp — Bụt chuẩn bị mọi thứ để bạn chỉ việc hoá thân và tận hưởng.",
      "From picking your outfit and accessories to makeup, hair and the best photo spots — Bụt prepares everything so you can simply transform and enjoy.",
    ),
    ctaSecondary: t("Xem các dịch vụ", "See all services"),
    script: t("trọn vẹn từng chi tiết", "every detail, covered"),
    images: [
      { src: P("viet-phuc", 2), pos: "center 25%" },
      { src: P("han-phuc", 16), pos: "center 25%" },
      { src: P("nhat-ban", 2), pos: "center 20%" },
    ],
    stats: [
      { value: "05", label: t("Nhóm dịch vụ", "Service groups") },
      { value: "08", label: t("Bộ sưu tập", "Collections") },
      { value: "1:1", label: t("Stylist đồng hành", "Personal stylist") },
    ],
  },
  journey: {
    eyebrow: t("Hành trình", "The journey"),
    title: t("Bốn bước, một buổi hoá thân.", "Four steps, one transformation."),
    hint: t("Rê chuột vào từng bước để xem chi tiết.", "Hover each step to see details."),
    steps: rental.steps, // dùng chung với section Thuê thế nào ở trang chủ
  },
  list: {
    eyebrow: t("Dịch vụ chính", "Main services"),
    title: t(
      "Năm điều Bụt chuẩn bị cho buổi hoá thân của bạn.",
      "Five things Bụt prepares for your transformation.",
    ),
    book: t("Đặt lịch dịch vụ này", "Book this service"),
    consult: t("Tư vấn ngay", "Ask us"),
    viewCollection: t("Xem bộ sưu tập", "View collection"),
    items: [
      {
        n: "01",
        sub: t("Truyền thống", "Traditional"),
        title: t("Trang phục truyền thống các nước", "Traditional costumes worldwide"),
        desc: t(
          "Việt phục, Hán phục cổ trang, Đôn Hoàng & Tây Vực, hoàng gia châu Âu — mỗi bộ được chăm chút đúng tinh thần văn hoá của nó, sẵn sàng cho những bộ ảnh mang màu sắc riêng.",
          "Vietnamese heritage, Hanfu, Dunhuang & Silk Road, European royalty — each outfit cared for in the spirit of its culture, ready for photos with a character of their own.",
        ),
        points: [
          t(
            "Việt phục · Hán phục · Đôn Hoàng · châu Âu",
            "Vietnamese · Hanfu · Dunhuang · European",
          ),
          t("Nhiều size cho người lớn và trẻ em", "Many sizes for adults and kids"),
          t("Phụ kiện đi kèm: trâm, quạt, nón, khăn", "Accessories: hairpins, fans, hats, veils"),
        ],
        image: P("viet-phuc", 1),
        pos: "center 25%",
        collection: "viet-phuc",
      },
      {
        n: "02",
        sub: t("Nhật Bản · Hàn Quốc", "Japan · Korea"),
        title: t("Hanbok Hàn Quốc & Kimono Nhật Bản", "Korean Hanbok & Japanese Kimono"),
        desc: t(
          "Kimono thêu hoa với obi nổi bật và Hanbok nhiều màu — gọn nhẹ, dễ mặc, rất hợp dạo phố, quán trà hay những con hẻm cổ ở Hội An.",
          "Embroidered kimono with bold obi and colourful hanbok — light and easy to wear, perfect for strolls, tea houses or the old lanes of Hội An.",
        ),
        points: [
          t("Kimono thêu hoa, obi nhiều màu", "Embroidered kimono, colourful obi"),
          t("Hướng dẫn mặc đúng cách", "Help wearing it the right way"),
          t("Hợp dạo phố, quán trà, Hội An", "Great for strolls, tea houses, Hội An"),
        ],
        image: P("nhat-ban", 1),
        pos: "center 20%",
        collection: "nhat-ban",
      },
      {
        n: "03",
        sub: t("Cosplay", "Cosplay"),
        title: t("Trang phục cosplay", "Cosplay costumes"),
        desc: t(
          "Từ Tề Thiên Đại Thánh, Squid Game đến Hogwarts, nữ tu hay chú hề — dành cho tiệc hoá trang, Halloween và những nhóm bạn thích cùng nhau lên đồ.",
          "From the Monkey King and Squid Game to Hogwarts, nuns or jesters — for costume parties, Halloween and friend groups who love dressing up together.",
        ),
        points: [
          t("Nhân vật phim, anime, kinh dị", "Movie, anime and horror characters"),
          t("Có set cho nhóm và cặp đôi", "Sets for groups and couples"),
          t("Makeup theo nhân vật", "Character makeup"),
        ],
        image: P("cosplay-halloween", 1),
        pos: "center 25%",
        collection: "cosplay-halloween",
      },
      {
        n: "04",
        sub: t("Cưới & concept", "Wedding & concept"),
        title: t("Trang phục cưới & chụp theo concept", "Wedding & concept outfits"),
        desc: t(
          "Áo dài cưới gấm thêu rồng phượng, khăn đóng, hỷ phục với khăn voan đỏ — cùng những concept chụp riêng cho cặp đôi muốn giữ nét truyền thống trong ngày trọng đại.",
          "Brocade wedding áo dài with dragon & phoenix embroidery, headdresses and red-veiled hỷ phục — plus custom concepts for couples who want tradition on their big day.",
        ),
        points: [
          t("Áo dài cưới gấm, khăn đóng, hỷ phục", "Brocade áo dài, headdress, hỷ phục"),
          t("Bộ đôi cô dâu – chú rể", "Matching bride & groom sets"),
          t("Tư vấn concept chụp riêng", "Custom shooting concepts"),
        ],
        image: P("cuoi-truyen-thong", 3),
        pos: "center 25%",
        collection: "cuoi-truyen-thong",
      },
      {
        n: "05",
        sub: t("Diện mạo", "The look"),
        title: t("Makeup, làm tóc & hỗ trợ chụp ảnh", "Makeup, hair & photo support"),
        desc: t(
          "Makeup theo concept trang phục, vấn tóc và cài trâm để diện mạo hoàn chỉnh — kèm gợi ý góc chụp đẹp tại studio và quanh Đà Nẵng.",
          "Makeup matched to your costume, hair styling and hairpins for a complete look — plus the best photo spots in studio and around Da Nang.",
        ),
        points: [
          t("Makeup theo concept trang phục", "Makeup matched to the costume"),
          t("Vấn tóc, cài trâm, phụ kiện tóc", "Hair styling, hairpins, accessories"),
          t("Gợi ý góc chụp đẹp quanh Đà Nẵng", "Photo spot tips around Da Nang"),
        ],
        image: P("han-phuc", 3),
        pos: "center 20%",
      },
    ],
  },
  faq: {
    eyebrow: t("Câu hỏi thường gặp", "FAQ"),
    title: t("Những điều bạn hay hỏi Bụt.", "What people often ask Bụt."),
    polaroids: [
      { src: P("han-phuc", 18), caption: "ask us anything", pos: "center 20%" },
      { src: P("be-yeu", 2), caption: "mini hanfu", pos: "center 20%" },
    ],
    items: [
      {
        q: t("Có cần đặt lịch trước không?", "Do I need to book in advance?"),
        a: t(
          "Bạn có thể ghé trực tiếp trong giờ mở cửa, nhưng nên nhắn trước để Bụt giữ bộ và sắp lịch makeup — nhất là cuối tuần và mùa lễ hội.",
          "You can drop by during opening hours, but messaging first lets Bụt hold your outfit and schedule makeup — especially on weekends and festive seasons.",
        ),
      },
      {
        q: t("Giá thuê được tính thế nào?", "How is the rental price calculated?"),
        a: t(
          "Giá phụ thuộc bộ trang phục, số người và thời gian thuê. Nhắn Bụt qua Messenger hoặc Zalo để được báo giá chi tiết.",
          "It depends on the outfit, group size and rental time. Message Bụt on Messenger or Zalo for a detailed quote.",
        ),
      },
      {
        q: t("Có đủ size cho mình không?", "Will there be my size?"),
        a: t(
          "Các bộ sưu tập có nhiều size cho người lớn và trẻ em. Khi đặt lịch, bạn báo chiều cao và cân nặng để Bụt chuẩn bị sẵn.",
          "Collections come in many sizes for adults and kids. Share your height and weight when booking so Bụt can prepare.",
        ),
      },
      {
        q: t("Có thể mặc đồ ra ngoài chụp không?", "Can I wear the outfit outside?"),
        a: t(
          "Có. Nhiều khách mặc đồ dạo phố Đà Nẵng hoặc Hội An; Bụt sẽ hướng dẫn thời gian trả đồ khi bạn nhận trang phục.",
          "Yes. Many guests stroll around Da Nang or Hội An; Bụt will explain the return time when you pick up the outfit.",
        ),
      },
      {
        q: t("Bụt có hỗ trợ chụp ảnh không?", "Does Bụt help with photos?"),
        a: t(
          "Có. Bên cạnh makeup và làm tóc, Bụt hỗ trợ chụp ảnh và gợi ý góc chụp đẹp tại studio cũng như quanh thành phố.",
          "Yes. Besides makeup and hair, Bụt offers photo support and suggests great spots in studio and around the city.",
        ),
      },
    ],
  },
  cta: {
    script: t("Hẹn gặp bạn ở Bụt", "See you at Bụt"),
    title: t("Sẵn sàng cho buổi hoá thân của bạn?", "Ready for your transformation?"),
    desc: t(
      "Để lại thông tin, Bụt sẽ tư vấn bộ trang phục và giữ lịch cho bạn trong ngày.",
      "Leave your details and Bụt will suggest outfits and hold your slot within the day.",
    ),
    zalo: t("Nhắn Zalo", "Message on Zalo"),
    bg: [
      { src: P("han-phuc", 21), pos: "center 25%" },
      { src: P("viet-phuc", 8), pos: "center 25%" },
      { src: P("chau-au", 1), pos: "center 25%" },
    ],
  },
};

// ---------- Trang Bộ sưu tập ----------
export const collectionsPage = {
  title: t("Bộ sưu tập của", "Collections by"),
  accent: t("Bụt.", "Bụt."),
  desc: t(
    "Phân loại theo quốc gia và phong cách. Chọn album để xem trọn bộ ảnh, rồi đặt lịch thuê ngay trên trang.",
    "Sorted by country and style. Open an album to see the full set, then book directly from the page.",
  ),
  ctaScript: t("Chưa biết chọn gì?", "Not sure what to pick?"),
  ctaTitle: t("Để Bụt gợi ý cho bạn.", "Let Bụt suggest for you."),
  ctaDesc: t(
    "Kể Bụt nghe về buổi chụp, nhóm bạn hay dịp đặc biệt — Bụt sẽ chọn bộ hợp nhất.",
    "Tell Bụt about your shoot, your group or the occasion — we'll pick the best fit.",
  ),
};

// ---------- Footer ----------
export const footer = {
  blurb: t(
    "Kho trang phục truyền thống các nước ngay trung tâm Đà Nẵng.",
    "A wardrobe of world traditional costumes in the heart of Da Nang.",
  ),
  rights: t("Bảo lưu mọi quyền.", "All rights reserved."),
};
