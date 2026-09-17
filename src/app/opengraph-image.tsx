import { ImageResponse } from "next/og";

export const alt = "IONEX Brandschutz — Brandschutz für Batteriespeicher";
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
          justifyContent: "space-between",
          background: "#07090F",
          color: "#E8EEF4",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#5B8FA8",
          }}
        >
          <span>IONEX BRANDSCHUTZ</span>
          <span>BESS · DE / EU+</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 920 }}>
            Brandschutz für Batteriespeicher.
          </div>
          <div style={{ fontSize: 26, color: "#8B97A8", maxWidth: 820 }}>
            Prüfbare Nachweise für Projektentwickler und Betreiber.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 18,
            color: "#C24A2A",
            letterSpacing: 2,
          }}
        >
          <span>NFPA 855</span>
          <span>VdS 3103</span>
          <span>IEC 62933-5-2</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
