/**
 * Song ngữ Việt / Anh.
 * - Chuỗi trong data viết dạng { vi: "...", en: "..." }; localize(data, lang) duyệt sâu và chọn ngôn ngữ.
 * - URL: tiếng Việt tại "/", tiếng Anh tại "/en" (xem rewrites trong next.config.mjs).
 */
export const LOCALES = ["vi", "en"];
export const DEFAULT_LOCALE = "vi";

export const isLocale = (v) => LOCALES.includes(v);

export const t = (vi, en) => ({ vi, en });

const isI18nString = (v) =>
  v &&
  typeof v === "object" &&
  !Array.isArray(v) &&
  "vi" in v &&
  "en" in v &&
  Object.keys(v).length === 2;

export function localize(data, lang) {
  if (Array.isArray(data)) return data.map((d) => localize(d, lang));
  if (data && typeof data === "object") {
    if (isI18nString(data)) return data[lang] ?? data[DEFAULT_LOCALE];
    const out = {};
    for (const k of Object.keys(data)) out[k] = localize(data[k], lang);
    return out;
  }
  return data;
}

// href("en", "/bo-suu-tap") => "/en/bo-suu-tap"; href("vi", "/#about") => "/#about"
export function href(lang, path = "/") {
  if (lang === DEFAULT_LOCALE) return path;
  if (path === "/") return "/en";
  if (path.startsWith("/#")) return `/en${path.slice(1)}`;
  return `/en${path}`;
}

// Đổi ngôn ngữ nhưng giữ nguyên trang đang xem
export function switchLocalePath(pathname, target) {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return href(target, stripped);
}

export function localeFromPath(pathname) {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "vi";
}
