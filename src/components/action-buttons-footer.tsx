import { Link } from "react-router-dom";

export function ActionButtonsFooter() {
  const largeWidth = 220;
  const largeHeight = 90;
  const smallWidth = 180;
  const smallHeight = 64;
  const radius = 20;
  const stroke = 2;

  const buttons = [
    { label: "REGISTER\nNOW", width: largeWidth, height: largeHeight },
    { label: "EXHIBIT\nNOW", width: largeWidth, height: largeHeight },
    { label: "HACKATHON", width: smallWidth, height: smallHeight },
    { label: "WORKSHOP", width: smallWidth, height: smallHeight },
  ];

  const getDashArray = (w: number, h: number, r: number) =>
    2 * (w + h - 2 * r) + 2 * Math.PI * r;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-6 rounded-3xl p-2 bg-[rgba(255, 255, 255, 0.78)] border border-cyan-400/30 shadow-[0_8px_32px_0_rgba(0,255,240,0.15)] backdrop-blur-md">
      {buttons.map((btn, i) => {
        const direction = i % 2 === 0 ? "reverse" : "normal";
        const delay = `${i * 0.2}s`;
        const gradId = `snake-gradient-anim-${i}`;
        const dashArray = getDashArray(btn.width, btn.height, radius);
        const sizeClass =
          btn.width === largeWidth
            ? "lg:w-[220px] lg:h-[90px] w-[180px] h-[64px]"
            : "w-[180px] h-[64px]";

        return (
          <div
            key={btn.label}
            className={`relative flex items-center justify-center ${sizeClass}`}
          >
            <Link
              to="#"
              className={`flex items-center justify-center font-orbitron font-bold uppercase rounded-2xl border border-[#00FFF0] shadow-[0_4px_32px_0_#00fff033] tracking-wide text-[1.35rem] text-white bg-[#0b1030] text-center whitespace-pre-line transition-colors duration-200 hover:bg-[#00FFF0] hover:text-[#0b1030] ${sizeClass}`}
              style={{ borderRadius: radius }}
            >
              <span className="w-full whitespace-pre-line">{btn.label}</span>
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
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
                  x={stroke / 2}
                  y={stroke / 2}
                  width={btn.width - stroke}
                  height={btn.height - stroke}
                  rx={radius}
                  ry={radius}
                  style={{
                    animation: `snake-move-anim 2s linear infinite`,
                    animationDirection: direction,
                    animationDelay: delay,
                    stroke: `url(#${gradId})`,
                    strokeDasharray: dashArray,
                    strokeWidth: stroke,
                    fill: "none",
                    filter:
                      "drop-shadow(0 0 8px #00FFF0) drop-shadow(0 0 15px #00FFF0) drop-shadow(0 0 25px rgba(0,255,240,0.5))",
                  }}
                />
                <style>{`
                  @keyframes snake-move-anim {
                    100% { stroke-dashoffset: -1000; }
                  }
                `}</style>
              </svg>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
