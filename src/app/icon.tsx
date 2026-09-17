import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07090F",
          color: "#C24A2A",
          fontSize: 22,
          fontFamily: "monospace",
          letterSpacing: 1,
          border: "3px solid #C24A2A",
        }}
      >
        IX
      </div>
    ),
    { ...size },
  );
}
