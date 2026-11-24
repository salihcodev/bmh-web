import { ImageResponse } from "next/og";

import { isLocale } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const line = isLocale(locale) && locale === "en" ? "Helping hands, organized." : "Be My Hand";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#C9F158",
          color: "#202020",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 500 }}>Be My Hand</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 12 }}>{line}</div>
      </div>
    ),
    { ...size },
  );
}
