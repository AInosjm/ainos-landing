/*
  Proof Map — the page's peak visual.

  Hub-and-spoke composition. The center is one fixed thing — the core
  architecture that ships into every domain. The three orbital clusters
  are visibly different graphs (different node count, node arrangement,
  edge density, palette) — pre-empting the reading "shared ontology
  across verticals" without needing copy.

  Forward arrows: signal flow from each domain into the core.
  Dashed feedback arcs: architecture feedback from each deployment back
  to the core — the engine improves, the per-domain ontologies stay distinct.
*/

const CENTER = { x: 600, y: 360 };

type Cluster = {
  id: "insurance" | "mental-health" | "port";
  cx: number;
  cy: number;
  palette: "blue" | "violet" | "graphite";
  category: string;
  title: string;
  points: Array<[number, number, string?]>;
  edges: Array<[number, number]>;
};

const CLUSTERS: Cluster[] = [
  {
    id: "insurance",
    cx: 200,
    cy: 170,
    palette: "blue",
    category: "regulated enterprise",
    title: "Insurance ontology",
    // 9 nodes — densest, most-connected (compliance graphs are richly cross-linked)
    points: [
      [-60, -38, "policy"],
      [-22, -48, "policyholder"],
      [22, -52, "claim"],
      [62, -32, "evidence_doc"],
      [-78, -4, "constraint"],
      [-30, 4, "coverage_state"],
      [22, 12, "audit_trail"],
      [70, 12, "regulator_rule"],
      [-10, 44, "incident"],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [1, 5], [2, 6],
      [5, 6], [6, 7], [4, 8], [5, 8], [6, 8], [0, 5], [2, 5], [3, 6],
    ],
  },
  {
    id: "mental-health",
    cx: 1000,
    cy: 170,
    palette: "violet",
    category: "clinical workflow",
    title: "Mental health ontology",
    // 7 nodes — temporal/longitudinal chain dominates
    points: [
      [-72, -32, "prior_session"],
      [-22, -42, "session"],
      [32, -36, "patient_log"],
      [-50, 6, "clinician_note"],
      [10, 4, "longitudinal_state"],
      [56, 8, "reasoning_path"],
      [-12, 48, "next_action"],
    ],
    edges: [
      [0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [3, 6],
      [0, 4], [2, 5], [5, 6],
    ],
  },
  {
    id: "port",
    cx: 600,
    cy: 600,
    palette: "graphite",
    category: "physical operations",
    title: "Port operations ontology",
    // 8 nodes — wider, sensor-fanout shape
    points: [
      [-90, -28, "vessel"],
      [-32, -38, "berth_state"],
      [28, -36, "crane_signal"],
      [86, -22, "schedule"],
      [-66, 8, "sensor_stream"],
      [-2, 14, "operation_log"],
      [56, 14, "safety_constraint"],
      [10, 50, "next_dispatch"],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [1, 5], [5, 6], [3, 6],
      [4, 7], [5, 7], [2, 6], [6, 7],
    ],
  },
];

function paletteColor(p: Cluster["palette"]) {
  if (p === "blue") return "var(--blue)";
  if (p === "violet") return "var(--violet)";
  return "var(--text-muted)";
}

function paletteSoft(p: Cluster["palette"]) {
  if (p === "blue") return "rgba(29, 108, 255, 0.55)";
  if (p === "violet") return "rgba(124, 58, 237, 0.55)";
  return "rgba(16, 24, 40, 0.42)";
}

export default function ProofMapDiagram() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1200 720"
        className="h-auto w-full"
        role="img"
        aria-label="Proof map: a hub-and-spoke diagram. The center node is the Core Ontology Architecture — the shared engine. Three orbital clusters surround it: insurance ontology (upper-left, blue, dense), mental health ontology (upper-right, violet, temporally chained), and port operations ontology (bottom-center, graphite, sensor-fanout). Forward arrows show signal flow from each domain into the core; dashed arcs show architecture feedback returning from each deployment to the core. Each cluster has a visibly different node count, edge density, and arrangement — to communicate that ontologies remain domain-specific while only the architecture is shared."
      >
        <defs>
          <pattern id="proof-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--graph-line)"
              strokeWidth="0.4"
            />
          </pattern>

          <marker
            id="proof-forward-blue"
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
            id="proof-forward-violet"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--violet)" />
          </marker>
          <marker
            id="proof-forward-graphite"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text)" />
          </marker>
        </defs>

        {/* Light grid backdrop */}
        <rect width="1200" height="720" fill="var(--surface)" />
        <rect width="1200" height="720" fill="url(#proof-grid)" opacity="0.7" />

        {/* Plate header */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="11"
          letterSpacing="1.6"
          fill="var(--text-muted)"
        >
          <text x="32" y="32">PLATE 02 · PROOF MAP</text>
          <text x="1168" y="32" textAnchor="end">
            SHARED ARCHITECTURE · DOMAIN-SPECIFIC ONTOLOGIES
          </text>
        </g>

        {/* Forward signal flow lines — drawn first, beneath everything */}
        {CLUSTERS.map((c) => (
          <g key={`fwd-${c.id}`} fill="none">
            <line
              x1={c.cx}
              y1={c.cy}
              x2={CENTER.x}
              y2={CENTER.y}
              stroke={paletteColor(c.palette)}
              strokeWidth="1"
              opacity="0.45"
              markerEnd={`url(#proof-forward-${c.palette})`}
            />
          </g>
        ))}

        {/* Feedback arcs — dashed curved arrows from each cluster back to center */}
        {CLUSTERS.map((c) => {
          const dx = CENTER.x - c.cx;
          const dy = CENTER.y - c.cy;
          // perpendicular offset for arc midpoint
          const perp = c.id === "port" ? 1 : -1;
          const midX = (c.cx + CENTER.x) / 2 + (-dy / Math.hypot(dx, dy)) * 80 * perp;
          const midY = (c.cy + CENTER.y) / 2 + (dx / Math.hypot(dx, dy)) * 80 * perp;
          return (
            <g key={`fb-${c.id}`} fill="none">
              <path
                d={`M ${c.cx} ${c.cy} Q ${midX} ${midY} ${CENTER.x} ${CENTER.y}`}
                stroke={paletteColor(c.palette)}
                strokeWidth="0.9"
                strokeDasharray="4 3"
                opacity="0.65"
                markerEnd={`url(#proof-forward-${c.palette})`}
              />
              <text
                x={midX}
                y={midY - 6}
                textAnchor="middle"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                fontSize="9.5"
                letterSpacing="1.4"
                fill={paletteColor(c.palette)}
                opacity="0.85"
              >
                ARCHITECTURE FEEDBACK
              </text>
            </g>
          );
        })}

        {/* Clusters */}
        {CLUSTERS.map((c) => (
          <ClusterNode key={c.id} cluster={c} />
        ))}

        {/* Center hub — the architectural constant */}
        <g>
          {/* halo ring */}
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r="58"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          {/* hub block */}
          <rect
            x={CENTER.x - 110}
            y={CENTER.y - 36}
            width="220"
            height="72"
            fill="var(--text)"
            rx="4"
          />
          <text
            x={CENTER.x}
            y={CENTER.y - 12}
            textAnchor="middle"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="10"
            letterSpacing="2.2"
            fill="var(--violet-soft)"
          >
            SHARED ENGINE
          </text>
          <text
            x={CENTER.x}
            y={CENTER.y + 12}
            textAnchor="middle"
            fontFamily="var(--font-display), ui-serif, serif"
            fontSize="20"
            fontStyle="italic"
            fill="var(--text-inverse)"
          >
            Core Ontology Architecture
          </text>
          <text
            x={CENTER.x}
            y={CENTER.y + 30}
            textAnchor="middle"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="9"
            letterSpacing="1.4"
            fill="rgba(246,248,252,0.55)"
          >
            shared across deployments · improves with feedback
          </text>
        </g>

        {/* Legend — bottom-left */}
        <g transform="translate(32, 660)">
          <line x1="0" y1="0" x2="32" y2="0" stroke="var(--text-muted)" strokeWidth="1" />
          <text
            x="42"
            y="3.5"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="9.5"
            letterSpacing="1.2"
            fill="var(--text-muted)"
          >
            SIGNAL FLOW
          </text>
          <line
            x1="170"
            y1="0"
            x2="202"
            y2="0"
            stroke="var(--text-muted)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <text
            x="212"
            y="3.5"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="9.5"
            letterSpacing="1.2"
            fill="var(--text-muted)"
          >
            ARCHITECTURE FEEDBACK
          </text>
        </g>
      </svg>
    </div>
  );
}

function ClusterNode({ cluster }: { cluster: Cluster }) {
  const { cx, cy, points, edges, category, title, palette, id } = cluster;
  const stroke = paletteColor(palette);
  const soft = paletteSoft(palette);

  return (
    <g transform={`translate(${cx}, ${cy})`}>
      {/* Subtle cluster boundary */}
      <ellipse
        cx="0"
        cy="0"
        rx="120"
        ry="90"
        fill="none"
        stroke={stroke}
        strokeWidth="0.6"
        strokeDasharray="2 4"
        opacity="0.35"
      />

      {/* Edges */}
      <g stroke={soft} strokeWidth="1" fill="none">
        {edges.map(([a, b], i) => {
          const from = points[a];
          const to = points[b];
          if (!from || !to) return null;
          return <line key={i} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />;
        })}
      </g>

      {/* Nodes */}
      <g fill={stroke}>
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" />
        ))}
      </g>

      {/* Micro labels — only on highlighted entities, not all */}
      <g
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="9.5"
        letterSpacing="0.3"
        fill={stroke}
        opacity="0.85"
      >
        {points.map(([x, y, label], i) =>
          label && i % 2 === 0 ? (
            <text key={`l-${i}`} x={x + 6} y={y - 4}>
              {label}
            </text>
          ) : null
        )}
      </g>

      {/* Cluster caption block — anchored above each cluster */}
      <g transform={`translate(0, ${id === "port" ? 92 : -100})`}>
        <text
          textAnchor="middle"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="2.2"
          fill={stroke}
        >
          {category.toUpperCase()}
        </text>
        <text
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-display), ui-serif, serif"
          fontSize="18"
          fontStyle="italic"
          fill="var(--text)"
        >
          {title}
        </text>
        <text
          y="40"
          textAnchor="middle"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="1.3"
          fill="var(--text-muted)"
        >
          {points.length} nodes · {edges.length} relations
        </text>
      </g>
    </g>
  );
}
