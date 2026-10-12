# ButStudio — Landing Page

Landing page xây dựng bằng **Next.js 16 (App Router)**, **Tailwind CSS v4** và **JavaScript thuần** (không TypeScript).

## Bắt đầu

```bash
npm install
cp .env.example .env.local   # chỉnh NEXT_PUBLIC_SITE_URL khi deploy
npm run dev                  # http://localhost:3000
```

| Script                 | Mô tả                         |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Chạy môi trường phát triển    |
| `npm run build`        | Build production              |
| `npm run start`        | Chạy bản build production     |
| `npm run lint`         | Kiểm tra code với ESLint      |
| `npm run lint:fix`     | Tự sửa lỗi ESLint             |
| `npm run format`       | Format code bằng Prettier     |
| `npm run format:check` | Kiểm tra format (dùng cho CI) |

## Cấu trúc thư mục

```
public/
└── images/
    ├── brand/        # Logo, nhận diện thương hiệu
    ├── hero/         # Ảnh minh hoạ section Hero
    ├── logos/        # Logo đối tác / khách hàng
    ├── avatars/      # Ảnh đại diện testimonial
    └── patterns/     # Hoạ tiết nền (grid, noise...)

src/
├── app/                      # Routing + SEO (App Router)
│   ├── layout.js             # Root layout: font, metadata, Header/Footer
│   ├── page.js               # Trang chủ — ghép các section
│   ├── globals.css           # Tailwind + design tokens (màu, font, animation)
│   ├── not-found.js          # Trang 404
│   ├── icon.svg              # Favicon
│   ├── opengraph-image.js    # Ảnh chia sẻ mạng xã hội (tự sinh)
│   ├── manifest.js           # Web App Manifest
│   ├── robots.js             # /robots.txt
│   └── sitemap.js            # /sitemap.xml
├── components/
│   ├── ui/                   # Component nhỏ, tái sử dụng: Button, Container, Badge, Icon, Logo...
│   ├── layout/               # Header, MobileNav, Footer
│   └── sections/             # Các section của landing: Hero, Features, Pricing, FAQ...
├── config/
│   └── site.js               # Tên thương hiệu, URL, SEO, thông tin liên hệ, mạng xã hội
├── data/
│   └── landing.js            # Toàn bộ nội dung text của landing page
└── lib/
    └── cn.js                 # Helper ghép className
```

## Tuỳ chỉnh nhanh

- **Nội dung**: sửa [src/data/landing.js](src/data/landing.js) — không cần đụng vào component.
- **Thương hiệu / SEO / liên hệ**: sửa [src/config/site.js](src/config/site.js).
- **Màu sắc, font, animation**: sửa khối `@theme` trong [src/app/globals.css](src/app/globals.css). Mọi class `brand-*`, `accent-*` sẽ tự cập nhật.
- **Thêm / bớt / đổi thứ tự section**: sửa [src/app/page.js](src/app/page.js).
- **Ảnh**: đặt vào `public/images/<nhóm>/` và tham chiếu bằng đường dẫn `/images/<nhóm>/<file>`.

## Quy ước

- Mặc định là **Server Component**. Chỉ thêm `"use client"` cho phần cần tương tác
  (hiện có `MobileNav` và `PricingPlans`) để giữ JavaScript gửi xuống trình duyệt ở mức tối thiểu.
- Component đặt tên **PascalCase**, mỗi file một component, export qua `index.js` của từng thư mục.
- Import tuyệt đối với alias `@/` (ví dụ `import { Button } from "@/components/ui"`).
- Dùng `next/image` cho ảnh, `next/link` cho liên kết nội bộ.
- Project bật **Cache Components** (`cacheComponents: true`): không gọi `Date.now()`, `Math.random()`…
  trực tiếp khi render — xem ví dụ `"use cache"` trong [src/components/layout/CurrentYear.js](src/components/layout/CurrentYear.js).

## Deploy

Deploy dễ nhất trên [Vercel](https://vercel.com/new). Nhớ đặt biến môi trường
`NEXT_PUBLIC_SITE_URL` bằng domain thật (ví dụ `https://butstudio.vn`) để sitemap, robots và Open Graph dùng đúng URL.
