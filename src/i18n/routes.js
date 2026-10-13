/**
 * Đường dẫn song ngữ: bản tiếng Việt dùng đường dẫn gốc ("/bo-suu-tap/han-phuc"),
 * bản tiếng Anh có đường dẫn & slug tiếng Anh riêng ("/en/collections/hanfu").
 *
 * - Trong code LUÔN viết đường dẫn tiếng Việt và đi qua href(lang, path) → tự dịch sang tiếng Anh.
 * - Route thật vẫn là app/[lang]/bo-suu-tap/[slug] & app/[lang]/dich-vu; next.config.mjs rewrite
 *   URL tiếng Anh về route này (và redirect 308 URL tiếng Anh kiểu cũ /en/bo-suu-tap/... sang URL mới).
 * - Thêm bộ sưu tập mới: thêm 1 dòng vào COLLECTION_SLUGS_EN.
 */

// đoạn đường dẫn: vi → en
export const SEGMENTS_EN = {
  "bo-suu-tap": "collections",
  "dich-vu": "services",
};

// slug bộ sưu tập: vi → en
export const COLLECTION_SLUGS_EN = {
  "viet-phuc": "vietnamese-heritage",
  "han-phuc": "hanfu",
  "don-hoang": "dunhuang-silk-road",
  "nhat-ban": "japanese-kimono",
  "chau-au": "european-royalty",
  "cuoi-truyen-thong": "traditional-wedding",
  "cosplay-halloween": "cosplay-halloween",
  "be-yeu": "little-ones",
};

const invert = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [v, k]));
const SEGMENTS_VI = invert(SEGMENTS_EN);
const COLLECTION_SLUGS_VI = invert(COLLECTION_SLUGS_EN);

export const collectionSlugEn = (viSlug) => COLLECTION_SLUGS_EN[viSlug] ?? viSlug;
export const collectionSlugVi = (slug) => COLLECTION_SLUGS_VI[slug] ?? slug;

// "/bo-suu-tap/han-phuc#x" → "/collections/hanfu#x" (chưa gồm tiền tố /en)
export function toEnPath(viPath) {
  const [path, hash = ""] = viPath.split("#");
  const parts = path.split("/").map((seg, i, arr) => {
    if (i === 1) return SEGMENTS_EN[seg] ?? seg;
    if (i === 2 && arr[1] === "bo-suu-tap") return collectionSlugEn(seg);
    return seg;
  });
  return parts.join("/") + (hash ? `#${hash}` : "");
}

// "/collections/hanfu" → "/bo-suu-tap/han-phuc" (đường dẫn sau khi bỏ tiền tố /en)
export function toViPath(enPath) {
  const [path, hash = ""] = enPath.split("#");
  const parts = path.split("/").map((seg, i, arr) => {
    if (i === 1) return SEGMENTS_VI[seg] ?? seg;
    if (i === 2 && (arr[1] === "collections" || arr[1] === "bo-suu-tap"))
      return collectionSlugVi(seg);
    return seg;
  });
  return parts.join("/") + (hash ? `#${hash}` : "");
}
