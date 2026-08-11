import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Uday Kiran | Full Stack Developer & AI Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#030712",
          color: "#f9fafb",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-3px",
          }}
        >
          Uday Kiran
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#60a5fa",
          }}
        >
          Full Stack Developer • AI • Software Engineering
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            color: "#9ca3af",
          }}
        >
          Building modern applications and AI-powered products
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}