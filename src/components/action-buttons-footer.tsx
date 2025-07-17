import { Link } from "react-router-dom";

export function ActionButtonsFooter() {
  // Button size for large and small buttons
  const largeWidth = 220;
  const largeHeight = 90;
  const smallWidth = 180;
  const smallHeight = 64;
  const radius = 20;

  // Button border classes for each position
  const borderClasses = [
    "border-t-4 border-r-4 border-b-0 border-l-0", // REGISTER NOW
    "border-t-4 border-r-4 border-b-0 border-l-0", // EXHIBIT NOW
    "border-b-4 border-r-4 border-t-0 border-l-0", // HACKATHON
    "border-b-4 border-r-4 border-t-0 border-l-0", // WORKSHOP
  ];

  // Button labels and sizes
  const buttons = [
    { label: "REGISTER\nNOW", width: largeWidth, height: largeHeight },
    { label: "EXHIBIT\nNOW", width: largeWidth, height: largeHeight },
    { label: "HACKATHON", width: smallWidth, height: smallHeight },
    { label: "WORKSHOP", width: smallWidth, height: smallHeight },
  ];

  const stroke = 2;
  // Helper to get dashArray for each size
  const getDashArray = (w: number, h: number, r: number) =>
    2 * (w + h - 2 * r) + 2 * Math.PI * r;

  return (
    <>
      <style>{`
        .action-btns-container {
            background: radial-gradient(ellipse at 60% 40%, #ffffff33 0%, #7d888eff 80%);
          border-radius: 32px;
          box-shadow: 0 0 60px 0 #00fff033, 0 0 0 2px #232a3e;
          padding: 8px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
        }
        .neon-btn-static {
          background: #0b1030;
          color: #fff;
          font-family: 'Orbitron', monospace;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 24px;
          border-color: #00FFF0 !important;
          box-shadow: 0 4px 32px 0 #00fff033;
          letter-spacing: 0.04em;
          font-size: 1.35rem;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          text-align: center;
          line-height: 1.2;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: pre-line;
        }
        .neon-btn-static:hover {
          background: #00FFF0;
          color: #0b1030;
          box-shadow: 0 0 32px 8px #00FFF0, 0 0 8px 2px #00FFF0;
        }
        .svg-border-anim {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }
        .svg-border-anim__rect {
          stroke-width: ${stroke}px;
          fill: none;
          filter: drop-shadow(0 0 8px #00FFF0) drop-shadow(0 0 15px #00FFF0) drop-shadow(0 0 25px rgba(0, 255, 240, 0.5));
          stroke-dashoffset: 0;
          animation: snake-move-anim 2s linear infinite;
        }
        @keyframes snake-move-anim {
          100% {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
      <div className="action-btns-container">
        {buttons.map((btn, i) => {
          const direction = i % 2 === 0 ? "reverse" : "normal";
          const delay = `${i * 0.2}s`;
          const gradId = `snake-gradient-anim-${i}`;
          const dashArray = getDashArray(btn.width, btn.height, radius);
          return (
            <div
              key={btn.label}
              className="relative"
              style={{
                width: btn.width,
                height: btn.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="#"
                className="neon-btn-static"
                style={{
                  width: btn.width,
                  height: btn.height,
                  borderRadius: radius,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontFamily: "Orbitron, monospace",
                }}
              >
                <span style={{ whiteSpace: "pre-line", width: "100%" }}>
                  {btn.label}
                </span>
                <svg
                  className="svg-border-anim"
                  viewBox={`0 0 ${btn.width} ${btn.height}`}
                  style={{ width: btn.width, height: btn.height }}
                >
                  <defs>
                    <linearGradient id={gradId}>
                      <stop offset="0%" stopColor="#00FFF0" stopOpacity="1" />
                      <stop offset="10%" stopColor="#00FFF0" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00FFF0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect
                    className="svg-border-anim__rect"
                    x={stroke / 2}
                    y={stroke / 2}
                    width={btn.width - stroke}
                    height={btn.height - stroke}
                    rx={radius}
                    ry={radius}
                    style={{
                      animationDirection: direction,
                      animationDelay: delay,
                      stroke: `url(#${gradId})`,
                      strokeDasharray: dashArray,
                      fill: "none",
                    }}
                  />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
