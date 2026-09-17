export function HeroBess() {
  return (
    <div className="relative overflow-hidden border border-border bg-panel">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(42 53 68 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(42 53 68 / 0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <svg
        viewBox="0 0 640 420"
        className="relative z-[1] h-auto w-full"
        role="img"
        aria-label="Batteriespeicher-Containerfeld mit thermischer Hüllkurve"
      >
        <defs>
          <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3a4c" />
            <stop offset="100%" stopColor="#151c26" />
          </linearGradient>
          <linearGradient id="heat" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#c24a2a" stopOpacity="0" />
            <stop offset="55%" stopColor="#c24a2a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e07a4f" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="640" height="420" fill="#0b1016" />
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => {
            const x = 48 + col * 148;
            const y = 78 + row * 92;
            const hot = row === 1 && col === 2;
            return (
              <g key={`${row}-${col}`}>
                {hot ? (
                  <rect
                    className="heat-pulse"
                    x={x - 10}
                    y={y - 18}
                    width="148"
                    height="96"
                    fill="url(#heat)"
                  />
                ) : null}
                <rect
                  x={x}
                  y={y}
                  width="128"
                  height="64"
                  fill="url(#steel)"
                  stroke={hot ? "#c24a2a" : "#3a4b5e"}
                  strokeWidth={hot ? 1.6 : 1}
                />
                <rect
                  x={x}
                  y={y}
                  width="128"
                  height="8"
                  fill={hot ? "#c24a2a" : "#5b8fa8"}
                  opacity={hot ? 0.9 : 0.35}
                />
                {Array.from({ length: 5 }).map((__, i) => (
                  <line
                    key={i}
                    x1={x + 22 * (i + 1)}
                    y1={y + 12}
                    x2={x + 22 * (i + 1)}
                    y2={y + 56}
                    stroke="#8b97a8"
                    strokeOpacity="0.18"
                  />
                ))}
                <text
                  x={x + 8}
                  y={y + 54}
                  fill="#8b97a8"
                  fontSize="9"
                  fontFamily="IBM Plex Mono, ui-monospace, monospace"
                >
                  {`STR ${row + 1}.${col + 1}`}
                </text>
              </g>
            );
          }),
        )}
        <line x1="24" y1="36" x2="120" y2="36" stroke="#5b8fa8" strokeWidth="1" />
        <line x1="24" y1="36" x2="24" y2="56" stroke="#5b8fa8" strokeWidth="1" />
        <text
          x="32"
          y="30"
          fill="#5b8fa8"
          fontSize="10"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
          letterSpacing="1.6"
        >
          IX-SYS · STRING 2.3 · THERMAL ENVELOPE
        </text>
        <text
          x="32"
          y="400"
          fill="#8b97a8"
          fontSize="10"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
        >
          2.4 MWh / CONT · NFPA 855 · VdS 3103
        </text>
      </svg>
    </div>
  );
}
