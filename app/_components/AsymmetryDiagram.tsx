/*
  Build-time vs sell-cycle asymmetry — the single most important visual
  argument for the multi-vertical strategy. Two horizontal bars, editorial
  axis markings. Deliberately quiet.
*/
export default function AsymmetryDiagram() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 800 360"
        className="h-auto w-full"
        role="img"
        aria-label="Comparison of build time and enterprise sell cycle. Build time compresses 10 to 100 times in the AI-native era, while enterprise sell cycles have not compressed at all."
      >
        {/* Timeline axis */}
        <g
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="1.4"
          fill="var(--bone-400)"
        >
          <line x1="120" y1="320" x2="780" y2="320" stroke="var(--bone-400)" strokeOpacity="0.45" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            const x = 120 + (i * 660) / 6;
            const labels = ["T₀", "1 mo", "3 mo", "6 mo", "12 mo", "18 mo", "24+ mo"];
            return (
              <g key={i}>
                <line x1={x} y1="320" x2={x} y2="326" stroke="var(--bone-400)" strokeOpacity="0.55" />
                <text x={x} y="340" textAnchor="middle">
                  {labels[i]}
                </text>
              </g>
            );
          })}
        </g>

        {/* BUILD row */}
        <g>
          <text
            x="20"
            y="95"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="2"
            fill="var(--accent)"
          >
            BUILD
          </text>
          <text
            x="20"
            y="115"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            fontSize="20"
            fill="var(--bone-50)"
          >
            10–100×
          </text>
          <text
            x="20"
            y="134"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.2"
            fill="var(--bone-400)"
          >
            FASTER
          </text>

          {/* Bar — short */}
          <rect x="120" y="90" width="85" height="26" fill="var(--accent)" opacity="0.85" />
          <rect
            x="120"
            y="90"
            width="660"
            height="26"
            fill="none"
            stroke="var(--bone-400)"
            strokeOpacity="0.3"
            strokeDasharray="2 4"
          />
          <text
            x="215"
            y="108"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="1"
            fill="var(--bone-50)"
          >
            new vertical deployment — weeks
          </text>
        </g>

        {/* SELL row */}
        <g>
          <text
            x="20"
            y="215"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="2"
            fill="var(--bone-200)"
          >
            SELL
          </text>
          <text
            x="20"
            y="235"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            fontSize="20"
            fill="var(--bone-50)"
          >
            1×
          </text>
          <text
            x="20"
            y="254"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.2"
            fill="var(--bone-400)"
          >
            UNCHANGED
          </text>

          {/* Long bar */}
          <rect x="120" y="210" width="660" height="26" fill="var(--bone-200)" opacity="0.16" />
          <rect
            x="120"
            y="210"
            width="660"
            height="26"
            fill="none"
            stroke="var(--bone-200)"
            strokeOpacity="0.5"
          />
          <text
            x="400"
            y="228"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="1"
            fill="var(--bone-50)"
          >
            enterprise sell · deploy · integrate — quarters to years
          </text>
        </g>

        {/* Idle-capacity caption between bars */}
        <g>
          <line x1="205" y1="118" x2="205" y2="208" stroke="var(--accent)" strokeDasharray="2 3" strokeOpacity="0.6" />
          <line x1="780" y1="118" x2="780" y2="208" stroke="var(--accent)" strokeDasharray="2 3" strokeOpacity="0.6" />
          <text
            x="492"
            y="170"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="1.6"
            fill="var(--accent)"
          >
            ← IDLE BUILD CAPACITY IF DEPLOYED SINGLE-VERTICAL →
          </text>
        </g>
      </svg>
    </div>
  );
}
