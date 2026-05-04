/*
  Ontology Reasoning Flow — unified vertical composition.

    01 · Multimodal · Operational Signals
              ↓
    02 · Domain-Specific Ontology   (three balanced cluster cells inside the box)
              ↓
    03 · Evidence Subgraph          (small subgraph inset)
              ↓
    04 · LLM × Ontology Traversal   (LLM block walking the graph — the centerpiece)
              ↓
    05 · Decision · Workflow · Action
              ↺
    06 · Architecture Feedback      (closes the loop — improves the engine, not the deployment)

  Every annotation lives INSIDE its step. No right-rail sidebar, no bolted-on
  feedback arc, no floating anchor block. The composition reads as one piece.
*/

const VB_W = 760;
const VB_H = 920;
const STEP_X = 60;
const STEP_W = VB_W - STEP_X * 2; // 640

export default function OntologyFlowDiagram() {
  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-auto w-full"
        role="img"
        aria-label="A six-step ontology reasoning flow. Multimodal and operational signals are converted into domain-specific ontologies (shown as three distinct cluster cells, one per domain). An evidence subgraph is extracted, traversed by an LLM along an inspectable path, and yields a decision. The sixth step closes the loop: architecture feedback that improves the shared engine, not the per-domain deployment."
      >
        <defs>
          <pattern
            id="ofd-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--graph-line)"
              strokeWidth="0.4"
            />
          </pattern>

          <marker
            id="ofd-arrow-blue"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--blue)" />
          </marker>
          <marker
            id="ofd-arrow-violet"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--violet)" />
          </marker>
        </defs>

        {/* Panel + grid */}
        <rect width={VB_W} height={VB_H} fill="var(--surface)" />
        <rect width={VB_W} height={VB_H} fill="url(#ofd-grid)" />
        <rect
          x="0.5"
          y="0.5"
          width={VB_W - 1}
          height={VB_H - 1}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Plate header */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="11"
          letterSpacing="1.6"
          fill="var(--text-muted)"
        >
          <text x="32" y="32">PLATE 01 · ONTOLOGY REASONING FLOW</text>
          <text x={VB_W - 32} y="32" textAnchor="end">
            SCHEMA-AWARE · EVIDENCE-GROUNDED
          </text>
        </g>

        {/* Step 01 — Multimodal · Operational Signals */}
        <SimpleStep
          y={66}
          numeral="01"
          tag="MULTIMODAL · OPERATIONAL"
          title="Multimodal Operational Signals"
          hint="text · audio · image · sensor · operational logs"
        />

        <DownArrow x={VB_W / 2} y={66 + 92} h={20} />

        {/* Step 02 — Domain-Specific Ontology — three balanced cluster cells */}
        <g>
          <rect
            x={STEP_X}
            y={194}
            width={STEP_W}
            height={184}
            fill="var(--surface)"
            stroke="var(--blue)"
            strokeWidth="1.2"
            rx="4"
          />
          <text
            x={STEP_X + 24}
            y={218}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.6"
            fill="var(--blue)"
          >
            02 · DOMAIN-SPECIFIC ONTOLOGY
          </text>
          <text
            x={STEP_X + 24}
            y={244}
            fontFamily="var(--font-display), ui-serif, serif"
            fontSize="22"
            fontStyle="italic"
            fill="var(--text)"
          >
            One per domain. Different shapes by design.
          </text>

          {/* Three balanced cluster cells, equal-width inside step */}
          {(() => {
            const cellsTop = 264;
            const cellH = 96;
            const cellGap = 16;
            const cellsAvailable = STEP_W - 48;
            const cellW = (cellsAvailable - cellGap * 2) / 3;
            const cellsLeft = STEP_X + 24;

            const clusters: Array<{
              tag: string;
              palette: "blue" | "violet" | "graphite";
              points: Array<[number, number]>;
              edges: Array<[number, number]>;
            }> = [
              {
                tag: "INSURANCE",
                palette: "blue",
                points: [
                  [-30, -20],
                  [-2, -28],
                  [26, -18],
                  [16, 4],
                  [-16, 6],
                  [0, -8],
                ],
                edges: [
                  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
                  [5, 1], [5, 4], [5, 2],
                ],
              },
              {
                tag: "MENTAL HEALTH",
                palette: "violet",
                points: [
                  [-30, 6],
                  [-12, -16],
                  [10, -22],
                  [28, -2],
                  [16, 18],
                  [-8, 18],
                ],
                edges: [
                  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
                  [1, 4], [2, 5],
                ],
              },
              {
                tag: "PORT OPERATIONS",
                palette: "graphite",
                points: [
                  [-30, -16],
                  [-4, -22],
                  [22, -10],
                  [-18, 8],
                  [4, 14],
                  [28, 12],
                ],
                edges: [
                  [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5],
                  [1, 4], [3, 5],
                ],
              },
            ];

            return clusters.map((c, i) => {
              const x = cellsLeft + i * (cellW + cellGap);
              return (
                <BalancedClusterCell
                  key={c.tag}
                  x={x}
                  y={cellsTop}
                  w={cellW}
                  h={cellH}
                  tag={c.tag}
                  palette={c.palette}
                  points={c.points}
                  edges={c.edges}
                />
              );
            });
          })()}
        </g>

        <DownArrow x={VB_W / 2} y={194 + 184} h={20} />

        {/* Step 03 — Evidence Subgraph */}
        <g>
          <rect
            x={STEP_X}
            y={394}
            width={STEP_W}
            height={84}
            fill="var(--surface)"
            stroke="var(--blue)"
            strokeWidth="1.2"
            rx="4"
          />
          <text
            x={STEP_X + 24}
            y={418}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.6"
            fill="var(--blue)"
          >
            03 · EVIDENCE SUBGRAPH
          </text>
          <text
            x={STEP_X + 24}
            y={444}
            fontFamily="var(--font-display), ui-serif, serif"
            fontSize="22"
            fontStyle="italic"
            fill="var(--text)"
          >
            Extracted from the ontology — typed, traceable.
          </text>
          <text
            x={STEP_X + 24}
            y={464}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="var(--text-muted)"
          >
            typed entities · relations · constraints · provenance
          </text>

          {/* Subgraph illustration on the right */}
          <g transform={`translate(${STEP_X + STEP_W - 110}, 410)`}>
            <g stroke="var(--blue)" strokeWidth="1" fill="none" opacity="0.85">
              <line x1="0" y1="32" x2="22" y2="14" />
              <line x1="22" y1="14" x2="50" y2="20" />
              <line x1="50" y1="20" x2="44" y2="48" />
              <line x1="44" y1="48" x2="14" y2="52" />
              <line x1="14" y1="52" x2="0" y2="32" />
              <line x1="50" y1="20" x2="14" y2="52" />
            </g>
            <g fill="var(--blue)">
              {[[0, 32], [22, 14], [50, 20], [44, 48], [14, 52]].map(
                ([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2.6" />
                )
              )}
            </g>
          </g>
        </g>

        <DownArrow x={VB_W / 2} y={394 + 84} h={24} violet />

        {/* Step 04 — LLM × Ontology Traversal — the centerpiece */}
        <g>
          <rect
            x={STEP_X}
            y={502}
            width={STEP_W}
            height={120}
            fill="var(--surface-violet)"
            stroke="var(--violet)"
            strokeWidth="1.4"
            rx="4"
          />
          <text
            x={STEP_X + 24}
            y={526}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.6"
            fill="var(--violet)"
          >
            04 · LLM × ONTOLOGY TRAVERSAL
          </text>
          <text
            x={STEP_X + 24}
            y={552}
            fontFamily="var(--font-display), ui-serif, serif"
            fontSize="22"
            fontStyle="italic"
            fill="var(--text)"
          >
            The LLM walks the graph.
          </text>
          <text
            x={STEP_X + 24}
            y={576}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="var(--violet)"
          >
            schema-aware
          </text>
          <text
            x={STEP_X + 24}
            y={594}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="var(--violet)"
          >
            evidence-grounded
          </text>
          <text
            x={STEP_X + 24}
            y={612}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="var(--violet)"
          >
            path-inspectable
          </text>

          {/* LLM block + ontology graph + violet traversal — right side, balanced */}
          <g transform={`translate(${STEP_X + STEP_W - 220}, 520)`}>
            {/* LLM block */}
            <rect
              x="0"
              y="32"
              width="50"
              height="32"
              fill="var(--surface)"
              stroke="var(--violet)"
              strokeWidth="1.2"
              rx="3"
            />
            <text
              x="25"
              y="52"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
              fill="var(--violet)"
            >
              LLM
            </text>

            {/* arc into the graph */}
            <path
              d="M 54 48 C 78 48, 100 54, 124 50"
              stroke="var(--violet)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 2"
              markerEnd="url(#ofd-arrow-violet)"
            />

            {/* Ontology graph */}
            <g transform="translate(130, 12)">
              <g stroke="var(--violet)" strokeWidth="0.9" fill="none" opacity="0.55">
                <line x1="6" y1="36" x2="32" y2="14" />
                <line x1="32" y1="14" x2="62" y2="22" />
                <line x1="62" y1="22" x2="76" y2="50" />
                <line x1="76" y1="50" x2="44" y2="62" />
                <line x1="44" y1="62" x2="6" y2="36" />
                <line x1="32" y1="14" x2="44" y2="62" />
                <line x1="62" y1="22" x2="6" y2="36" />
              </g>
              {/* highlighted traversal */}
              <path
                d="M 6 36 L 32 14 L 62 22 L 76 50"
                stroke="var(--violet)"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="220"
                strokeDashoffset="220"
                style={{
                  animation:
                    "traverse 4400ms 600ms cubic-bezier(0.2,0.6,0.1,1) infinite",
                }}
              />
              {[[6, 36], [32, 14], [62, 22], [76, 50], [44, 62]].map(
                ([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="var(--violet)" />
                )
              )}
            </g>
          </g>
        </g>

        <DownArrow x={VB_W / 2} y={502 + 120} h={24} />

        {/* Step 05 — Decision · Workflow · Action */}
        <SimpleStep
          y={650}
          numeral="05"
          tag="DECISION"
          title="Decision · Workflow · Action"
          hint="next-best action · operational state · audit trail"
        />

        {/* Loop indicator: down-and-curve to step 06 */}
        <g fill="none">
          <path
            d={`M ${VB_W / 2} ${650 + 92} L ${VB_W / 2} ${756} C ${VB_W / 2} ${766}, ${VB_W / 2 - 8} ${776}, ${VB_W / 2 - 14} ${776}`}
            stroke="var(--violet)"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d={`M ${VB_W / 2 - 14} ${776} L ${STEP_X + 56} ${776}`}
            stroke="var(--violet)"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d={`M ${STEP_X + 56} ${776} L ${STEP_X + 56} ${794}`}
            stroke="var(--violet)"
            strokeWidth="1.4"
            markerEnd="url(#ofd-arrow-violet)"
          />
        </g>

        {/* Step 06 — Architecture Feedback (closes the loop) */}
        <g>
          <rect
            x={STEP_X}
            y={802}
            width={STEP_W}
            height={88}
            fill="var(--text)"
            stroke="var(--violet)"
            strokeWidth="1.4"
            rx="4"
          />
          <text
            x={STEP_X + 24}
            y={826}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.6"
            fill="var(--violet-soft)"
          >
            06 · ARCHITECTURE FEEDBACK
          </text>
          <text
            x={STEP_X + 24}
            y={854}
            fontFamily="var(--font-display), ui-serif, serif"
            fontSize="22"
            fontStyle="italic"
            fill="var(--text-inverse)"
          >
            Improves the engine, not the deployment.
          </text>
          <text
            x={STEP_X + 24}
            y={874}
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="rgba(246,248,252,0.62)"
          >
            shared core architecture · domain ontologies stay distinct
          </text>

          {/* Loop icon on the right */}
          <g
            transform={`translate(${STEP_X + STEP_W - 80}, 826)`}
            fill="none"
            stroke="var(--violet-soft)"
            strokeWidth="1.4"
          >
            <path d="M 8 28 a 22 16 0 1 1 44 0" />
            <path d="M 52 28 a 22 16 0 1 1 -44 0" />
            <path d="M 4 24 L 8 28 L 12 24" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 56 32 L 52 28 L 48 32" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SimpleStep({
  y,
  numeral,
  tag,
  title,
  hint,
}: {
  y: number;
  numeral: string;
  tag: string;
  title: string;
  hint: string;
}) {
  return (
    <g>
      <rect
        x={STEP_X}
        y={y}
        width={STEP_W}
        height={92}
        fill="var(--surface)"
        stroke="var(--blue)"
        strokeWidth="1.2"
        rx="4"
      />
      <text
        x={STEP_X + 24}
        y={y + 24}
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="10.5"
        letterSpacing="1.6"
        fill="var(--blue)"
      >
        {numeral} · {tag}
      </text>
      <text
        x={STEP_X + 24}
        y={y + 52}
        fontFamily="var(--font-display), ui-serif, serif"
        fontSize="22"
        fontStyle="italic"
        fill="var(--text)"
      >
        {title}
      </text>
      <text
        x={STEP_X + 24}
        y={y + 76}
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="10.5"
        letterSpacing="1.2"
        fill="var(--text-muted)"
      >
        {hint}
      </text>
    </g>
  );
}

function DownArrow({
  x,
  y,
  h,
  violet = false,
}: {
  x: number;
  y: number;
  h: number;
  violet?: boolean;
}) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + h}
      stroke={violet ? "var(--violet)" : "var(--blue)"}
      strokeWidth="1.4"
      markerEnd={violet ? "url(#ofd-arrow-violet)" : "url(#ofd-arrow-blue)"}
    />
  );
}

/* Beautifully balanced cluster pictogram — own bordered cell, properly sized
   nodes and edges, label centered below. Replaces the previous stick-sketch. */
function BalancedClusterCell({
  x,
  y,
  w,
  h,
  tag,
  palette,
  points,
  edges,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  tag: string;
  palette: "blue" | "violet" | "graphite";
  points: Array<[number, number]>;
  edges: Array<[number, number]>;
}) {
  const stroke =
    palette === "blue"
      ? "var(--blue)"
      : palette === "violet"
        ? "var(--violet)"
        : "var(--text-muted)";
  const cellBg =
    palette === "blue"
      ? "rgba(29,108,255,0.04)"
      : palette === "violet"
        ? "rgba(124,58,237,0.04)"
        : "rgba(16,24,40,0.03)";
  const cx = x + w / 2;
  const graphCenterY = y + h / 2 - 8;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={cellBg}
        stroke={stroke}
        strokeWidth="0.8"
        strokeOpacity="0.45"
        rx="3"
      />

      <g transform={`translate(${cx}, ${graphCenterY})`}>
        {/* edges */}
        <g stroke={stroke} strokeWidth="1" fill="none" opacity="0.7">
          {edges.map(([a, b], i) => {
            const from = points[a];
            const to = points[b];
            if (!from || !to) return null;
            return (
              <line
                key={i}
                x1={from[0]}
                y1={from[1]}
                x2={to[0]}
                y2={to[1]}
              />
            );
          })}
        </g>
        {/* nodes */}
        <g fill={stroke}>
          {points.map(([px, py], i) => (
            <circle key={i} cx={px} cy={py} r="2.6" />
          ))}
        </g>
      </g>

      <text
        x={cx}
        y={y + h - 10}
        textAnchor="middle"
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="9.5"
        letterSpacing="1.4"
        fill={stroke}
      >
        {tag}
      </text>
    </g>
  );
}
