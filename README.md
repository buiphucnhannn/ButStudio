# Bụt Studio — Landing Page (Next.js 16 + Tailwind CSS v4 + JavaScript)

Website giới thiệu **Bụt Studio** (33 Phan Châu Trinh, Đà Nẵng) — cho thuê trang phục truyền thống các nước,
cổ trang, cosplay, trang phục cưới; kèm makeup, làm tóc và hỗ trợ chụp ảnh. Làm theo brief trong `docs/demo.docx`,
phong cách tối giản tone xám, tham khảo cấu trúc & hiệu ứng từ project MUSE Bridal.

## 1. Chạy project

```bash
npm install
cp .env.example .env.local   # đặt NEXT_PUBLIC_SITE_URL = domain thật khi deploy
npm run dev                  # http://localhost:3000
npm run build && npm start
```

| Script                 | Mô tả                       |
| ---------------------- | --------------------------- |
| `npm run dev`          | Môi trường phát triển       |
| `npm run build`        | Build production            |
| `npm run start`        | Chạy bản build              |
| `npm run lint`         | ESLint                      |
| `npm run format`       | Prettier (tự sắp xếp class) |
| `npm run format:check` | Kiểm tra format (CI)        |

## 2. Cấu trúc

```
public/images/
├── brand/              logo.jpg (gốc) + logo.png (tách nền)
├── viet-phuc/          8 ảnh   ┐
├── han-phuc/           22 ảnh  │
├── don-hoang/          6 ảnh   │  67 ảnh khách gửi, đã phân loại
├── nhat-ban/           3 ảnh   │  theo bộ sưu tập, đặt tên
├── chau-au/            4 ảnh   │  <nhóm>-<số>.jpg
├── cuoi-truyen-thong/  4 ảnh   │
├── cosplay-halloween/  17 ảnh  │
└── be-yeu/             3 ảnh   ┘

src/
├── app/
│   ├── [lang]/                 ROOT LAYOUT nằm trong segment ngôn ngữ (vi | en)
│   │   ├── layout.js           font, metadata, JSON-LD, Navbar/Footer, Lenis, popup đặt lịch
│   │   ├── page.js             trang chủ
│   │   ├── not-found.js
│   │   └── bo-suu-tap/         danh sách (lọc theo quốc gia / phong cách) + [slug] chi tiết album
│   ├── globals.css             Tailwind v4 @theme (màu, font, animation) + hiệu ứng reveal/split/marquee
│   ├── icon.png, apple-icon.png, opengraph-image.js, manifest.js, robots.js, sitemap.js
├── components/
│   ├── fx/        SmoothScroll (Lenis), SplitText, Parallax, Preloader, ScrollTop
│   ├── layout/    Navbar (pill kính mờ + VI/EN), Footer (bản đồ), FloatingContact (Messenger/Zalo/Gọi)
│   ├── sections/  Hero, Marquee, About, Collections, Services, Rental, Moments, Seasonal, Contact
│   ├── gallery/   CollectionsGrid (bộ lọc), AlbumGallery (lưới + lightbox)
│   ├── booking/   BookingModal + BookingForm
│   └── ui/        Button, Container, Icons, Lightbox, Logo, Pic, Reveal, SectionHeading
├── config/site.js   thông tin thương hiệu, liên hệ, giờ mở cửa, SEO
├── data/site.js     TOÀN BỘ nội dung text (song ngữ) + mapping ảnh vào bộ sưu tập
├── i18n/index.js    t(), localize(), href() — cơ chế song ngữ
├── hooks/           useReveal, useScrollProgress
└── lib/utils.js     cn(), lockScroll()
```

## 3. Song ngữ Việt / Anh

- Tiếng Việt tại `/`, tiếng Anh tại `/en` (rewrites trong `next.config.mjs` ánh xạ `/` → `/vi`).
- Chuỗi trong `src/data/site.js` viết dạng `t("tiếng Việt", "English")`; page gọi `localize(data, lang)` để lấy đúng ngôn ngữ.
- Link nội bộ dùng `href(lang, "/bo-suu-tap")`; nút VI/EN trên header giữ nguyên trang đang xem.
- `<html lang>`, `alternates.languages`, sitemap đều có cả 2 ngôn ngữ.

## 4. Sửa nội dung

| Muốn sửa                           | Ở đâu                                           |
| ---------------------------------- | ----------------------------------------------- |
| SĐT, Zalo, Messenger, địa chỉ, giờ | `src/config/site.js`                            |
| Text từng section, bộ sưu tập, ảnh | `src/data/site.js`                              |
| Thêm bộ sưu tập                    | thêm thư mục ảnh + 1 object trong `collections` |
| Màu, font, animation               | khối `@theme` trong `src/app/globals.css`       |
| Thứ tự section trang chủ           | `src/app/[lang]/page.js`                        |

`coverPos` / `pos` là `object-position` của ảnh (ảnh chân dung thường để `center 20%` để không cắt mặt).

## 5. Hiệu ứng (theo mẫu MUSE Bridal)

- **Header**: viên thuốc kính mờ nổi; kính tối chữ trắng khi nằm trên section có `data-nav-theme="dark"`, kính xám khi cuộn xuống.
- **Cuộn mượt**: Lenis (`fx/SmoothScroll.js`, lerp 0.06, wheelMultiplier 0.78) — chậm, có quán tính; anchor `/#id` cuộn êm,
  nút lên đầu trang. Handler click đăng ký ở pha capture để chạy trước `<Link>`.
- **Màn chào**: `fx/Preloader.js` hiện logo ~1,2s rồi kéo lên; phát sự kiện `but:ready` để hero bắt đầu đúng lúc.
- **Hero**: 3 cột ảnh dọc xoay vòng 9 ảnh + ken burns, chữ hiện từng ký tự, parallax khi cuộn.
- **Bộ sưu tập**: accordion ngang (rê chuột nở cột); mobile vuốt ngang snap.
- **Dịch vụ**: rê chuột vào mục → ảnh bên phải đổi theo.
- **Khoảnh khắc**: section ghim, dải ảnh chạy ngang theo chiều cuộn (chỉ ghim khi viewport ≤ 1080px cao; màn cao hơn → kéo chuột).
- **Mùa này (Halloween)**: 2 dải poster chạy ngược chiều, bấm phóng to.
- `.reveal` / `.split` hiện dần khi cuộn tới (`hooks/useReveal.js`).

## 6. Đặt lịch & liên hệ

- Mọi phần tử có `data-booking` mở popup; `data-booking="han-phuc"` chọn sẵn bộ sưu tập.
- Form chưa có backend: soạn tin nhắn từ các ô nhập, sao chép vào clipboard rồi mở Messenger / Zalo. Khi có backend thay `handleSend` trong `booking/BookingForm.js`.
- Nút nổi Messenger / Zalo / Gọi hiện sau khi cuộn qua nửa hero. Bản đồ Google Maps nhúng ở footer (không cần API key).

## 7. Lưu ý Next.js 16

- Project bật **Cache Components**: không gọi `Date.now()` trực tiếp khi render (xem `layout/CurrentYear.js` dùng `"use cache"`).
- `next/image`: dùng `preload` thay `priority`; `images.qualities` phải khai báo trong `next.config.mjs` (đang dùng 75 & 90).
- Root layout nằm trong `app/[lang]/` (pattern i18n chính thức); `params` là Promise → phải `await`.

## 8. Cần khách xác nhận

- Link Instagram chính thức (đang để placeholder trong `config/site.js`).
- **Không có ảnh Hanbok** trong kho ảnh — dịch vụ Hanbok đang dùng ảnh Kimono minh hoạ. Bổ sung ảnh để tách album riêng.
- Toạ độ bản đồ lấy theo địa chỉ; nếu cần hiện đúng thẻ địa điểm trên Google Maps, thay `mapsEmbed` bằng link embed có CID.
- Email liên hệ và domain website (để set `NEXT_PUBLIC_SITE_URL`).
