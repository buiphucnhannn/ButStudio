import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Ảnh chia sẻ mạng xã hội (Facebook, Zalo, LinkedIn...) — sinh tự động lúc build.
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #a855f7 100%)",
        color: "white",
      }}
    >
      <div style={{ fontSize: 36, fontWeight: 700, opacity: 0.85 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 64, fontWeight: 800, marginTop: 24, lineHeight: 1.1 }}>
        {siteConfig.tagline}
      </div>
      <div style={{ fontSize: 28, marginTop: 32, opacity: 0.8, maxWidth: 900 }}>
        {siteConfig.description}
      </div>
    </div>,
    size,
  );
}
