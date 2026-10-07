import { ImageResponse } from "next/og";

export const alt = "Zipporah “Zi” Ronquillo — Healthcare & Digital Growth Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#faf6ee",
          color: "#1c1a17",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#9c4a2c", textTransform: "uppercase" }}>
          Healthcare &amp; Digital Growth Specialist
        </div>
        <div style={{ fontSize: 96, marginTop: 28, lineHeight: 1.05 }}>
          Zipporah “Zi” Ronquillo
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#4a463f" }}>
          zronquillo.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
