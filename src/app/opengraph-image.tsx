import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Niraj Panchal — Database Performance, Full-Stack Engineering, and AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px 84px",
        backgroundColor: "#F8F7F2",
        color: "#171916",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "4px",
        }}
      >
        <div
          style={{
            width: 1,
            height: 28,
            backgroundColor: "#C8C8BD",
            margin: "0 20px",
            display: "contents",
          }}
        />
        NIRAJ PANCHAL
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-3px",
            maxWidth: 980,
            display: "contents",
          }}
        >
          I make software
          <br />
          work better.
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 25,
            lineHeight: 1.5,
            color: "#55594F",
            maxWidth: 800,
            display: "contents",
          }}
        >
          Database performance. Full-stack optimization.
          <br />
          Practical AI integration.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #D8D8CE",
          paddingTop: 24,
          fontSize: 16,
          letterSpacing: "2px",
          color: "#55594F",
        }}
      >
        <div>ENGINEERING · DATABASES · AI</div>
        <div style={{ color: "#52745D" }}>Better systems. Real impact.</div>
      </div>
    </div>,
    { ...size }
  );
}
