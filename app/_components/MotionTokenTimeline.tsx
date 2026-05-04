/*
  Motion-Token Timeline — Physical AI Bridge.

  Six skeletal pose silhouettes along an x-axis (single-line strokes, NOT
  walking-cycle animation). Below each pose: a discrete motion-token box
  with a tokenized label. A continuous violet traversal line flows
  left-to-right through the tokens, suggesting the Motion Language Model
  walking the sequence.

  This sits inside a deliberately graphite section — the only dark band on
  the page — to physically signal "different temporal frame: research
  direction, not shipping product."
*/

type Pose = {
  // Stick figure relative coordinates within a 60x90 box
  head: [number, number];
  shoulders: [[number, number], [number, number]];
  arms: Array<[number, number, number, number]>;
  hips: [number, number];
  legs: Array<[number, number, number, number]>;
  token: string;
};

const POSES: Pose[] = [
  {
    head: [30, 14],
    shoulders: [
      [22, 28],
      [38, 28],
    ],
    arms: [
      [22, 28, 14, 50],
      [38, 28, 46, 50],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 22, 84],
      [30, 50, 38, 84],
    ],
    token: "POSTURE_NEUTRAL",
  },
  {
    head: [30, 14],
    shoulders: [
      [22, 28],
      [38, 28],
    ],
    arms: [
      [22, 28, 8, 36],
      [38, 28, 52, 22],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 24, 84],
      [30, 50, 36, 84],
    ],
    token: "REACH_FORWARD",
  },
  {
    head: [32, 14],
    shoulders: [
      [24, 28],
      [40, 28],
    ],
    arms: [
      [24, 28, 16, 52],
      [40, 28, 50, 44],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 20, 80],
      [30, 50, 42, 84],
    ],
    token: "STEP_TRANSITION",
  },
  {
    head: [30, 12],
    shoulders: [
      [22, 26],
      [38, 26],
    ],
    arms: [
      [22, 26, 14, 22],
      [38, 26, 46, 22],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 22, 70],
      [30, 50, 38, 70],
    ],
    token: "EXTEND_UP",
  },
  {
    head: [28, 16],
    shoulders: [
      [22, 30],
      [38, 30],
    ],
    arms: [
      [22, 30, 12, 48],
      [38, 30, 50, 50],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 18, 84],
      [30, 50, 42, 78],
    ],
    token: "LATERAL_SHIFT",
  },
  {
    head: [30, 14],
    shoulders: [
      [22, 28],
      [38, 28],
    ],
    arms: [
      [22, 28, 16, 50],
      [38, 28, 44, 50],
    ],
    hips: [30, 50],
    legs: [
      [30, 50, 26, 84],
      [30, 50, 34, 84],
    ],
    token: "POSTURE_RECOVERY",
  },
];

export default function MotionTokenTimeline() {
  const cellWidth = 160;
  const offsetX = 60;
  const totalWidth = offsetX + POSES.length * cellWidth + 60;

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${totalWidth} 320`}
        className="h-auto w-full"
        role="img"
        aria-label="Motion token timeline. Six simplified skeletal pose silhouettes along an axis, each tokenized into a discrete labeled box below. A violet traversal line flows through the token sequence to suggest a Motion Language Model walking the temporal vocabulary."
      >
        {/* Subtle horizontal axis */}
        <line
          x1="0"
          y1="116"
          x2={totalWidth}
          y2="116"
          stroke="rgba(246,248,252,0.18)"
          strokeWidth="0.6"
        />

        {/* Time axis ticks */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9.5"
          letterSpacing="1.4"
          fill="rgba(246,248,252,0.45)"
        >
          {POSES.map((_, i) => {
            const x = offsetX + i * cellWidth + cellWidth / 2;
            return (
              <g key={`tick-${i}`}>
                <line
                  x1={x}
                  y1="110"
                  x2={x}
                  y2="120"
                  stroke="rgba(246,248,252,0.32)"
                  strokeWidth="0.8"
                />
                <text x={x} y="100" textAnchor="middle">
                  t{String(i + 1).padStart(2, "0")}
                </text>
              </g>
            );
          })}
        </g>

        {/* Skeletal poses (above the axis) */}
        {POSES.map((pose, i) => {
          const baseX = offsetX + i * cellWidth + cellWidth / 2 - 30;
          return (
            <g
              key={`pose-${i}`}
              transform={`translate(${baseX}, 0)`}
              stroke="var(--violet-soft)"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={pose.head[0]} cy={pose.head[1]} r="6" />
              <line
                x1={pose.head[0]}
                y1={pose.head[1] + 6}
                x2={(pose.shoulders[0][0] + pose.shoulders[1][0]) / 2}
                y2={(pose.shoulders[0][1] + pose.shoulders[1][1]) / 2}
              />
              <line
                x1={pose.shoulders[0][0]}
                y1={pose.shoulders[0][1]}
                x2={pose.shoulders[1][0]}
                y2={pose.shoulders[1][1]}
              />
              {pose.arms.map((seg, j) => (
                <line key={`arm-${j}`} x1={seg[0]} y1={seg[1]} x2={seg[2]} y2={seg[3]} />
              ))}
              <line
                x1={(pose.shoulders[0][0] + pose.shoulders[1][0]) / 2}
                y1={(pose.shoulders[0][1] + pose.shoulders[1][1]) / 2}
                x2={pose.hips[0]}
                y2={pose.hips[1]}
              />
              {pose.legs.map((seg, j) => (
                <line key={`leg-${j}`} x1={seg[0]} y1={seg[1]} x2={seg[2]} y2={seg[3]} />
              ))}
            </g>
          );
        })}

        {/* Token boxes (below the axis) */}
        {POSES.map((pose, i) => {
          const cx = offsetX + i * cellWidth + cellWidth / 2;
          return (
            <g key={`token-${i}`}>
              <rect
                x={cx - 64}
                y="160"
                width="128"
                height="42"
                fill="rgba(124, 58, 237, 0.08)"
                stroke="var(--blue-soft)"
                strokeWidth="1"
                rx="3"
              />
              <text
                x={cx}
                y="178"
                textAnchor="middle"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                fontSize="9.5"
                letterSpacing="1.4"
                fill="var(--blue-soft)"
              >
                t{String(i + 1).padStart(2, "0")} · TOKEN
              </text>
              <text
                x={cx}
                y="194"
                textAnchor="middle"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                fontSize="11"
                letterSpacing="1.2"
                fill="var(--text-inverse)"
              >
                {pose.token}
              </text>
            </g>
          );
        })}

        {/* Traversal line through the tokens */}
        {(() => {
          const path = POSES.map((_, i) => {
            const cx = offsetX + i * cellWidth + cellWidth / 2;
            return `${i === 0 ? "M" : "L"} ${cx} 224`;
          }).join(" ");
          return (
            <g aria-hidden="true">
              <line
                x1={offsetX}
                y1="224"
                x2={totalWidth - 60}
                y2="224"
                stroke="rgba(246,248,252,0.10)"
                strokeWidth="0.6"
              />
              <path
                d={path}
                stroke="var(--violet-soft)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2400"
                strokeDashoffset="2400"
                style={{
                  animation: "traverse 6000ms 600ms cubic-bezier(0.2,0.6,0.1,1) infinite",
                }}
              />
              {POSES.map((_, i) => {
                const cx = offsetX + i * cellWidth + cellWidth / 2;
                return (
                  <circle
                    key={`tnode-${i}`}
                    cx={cx}
                    cy="224"
                    r="3.5"
                    fill="var(--violet-soft)"
                    style={{
                      animation: `node-pulse 4s ${i * 380}ms ease-in-out infinite`,
                    }}
                  />
                );
              })}
            </g>
          );
        })()}

        {/* Bottom annotation row — ML stages flow */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9.5"
          letterSpacing="1.4"
          fill="rgba(246,248,252,0.65)"
        >
          {(() => {
            const stages = [
              "SIGNAL",
              "MOTIONIZATION",
              "TOKENS",
              "MOTION LM",
              "PHYSICAL AI REASONING",
            ];
            const span = totalWidth - offsetX - 60;
            return stages.map((stage, i) => {
              const x = offsetX + (i * span) / (stages.length - 1);
              const anchor =
                i === 0 ? "start" : i === stages.length - 1 ? "end" : "middle";
              return (
                <g key={`stage-${i}`}>
                  <text x={x} y="278" textAnchor={anchor}>
                    {stage}
                  </text>
                  {i < stages.length - 1 ? (
                    <text
                      x={x + (span / (stages.length - 1)) / 2}
                      y="278"
                      textAnchor="middle"
                      fill="rgba(246,248,252,0.32)"
                      fontSize="11"
                    >
                      →
                    </text>
                  ) : null}
                </g>
              );
            });
          })()}
        </g>

        {/* Plate caption — single, right-aligned */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9.5"
          letterSpacing="1.6"
          fill="rgba(246,248,252,0.40)"
        >
          <text x={totalWidth - 60} y="306" textAnchor="end">
            TEMPORAL VOCABULARY · LANGUAGE-LIKE REPRESENTATION
          </text>
        </g>
      </svg>
    </div>
  );
}
