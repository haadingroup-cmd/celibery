import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a3327 0%, #06211a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#17925f",
            color: "#f1faf5",
            fontSize: 34,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          C
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
          Power, engineered
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
          to disappear.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a9e8c6", marginTop: 28 }}>
          Celibery — GaN chargers, cables & power banks
        </div>
      </div>
    ),
    { ...size },
  );
}
