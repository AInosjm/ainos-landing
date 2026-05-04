/*
  Sparse ontology graph for the hero right zone.

  Reads as a page from a structural-engineering journal — clustered density,
  pockets of whitespace, mathematical restraint. NOT a neural-network cliché.

  Two highlighted traversal paths suggest live reasoning:
    • Primary path — violet, 5 nodes, animates first
    • Secondary path — blue, 4 nodes, animates with offset

  Ambient nodes are deliberately at low opacity so the highlighted paths
  carry the foreground attention.
*/

type Node = {
  id: string;
  x: number;
  y: number;
  r?: number;
  label?: string;
  cluster?: "a" | "b" | "c" | "d";
};

const NODES: Node[] = [
  // Cluster A — upper-left dense region
  { id: "a1", x: 8,  y: 14, r: 3, label: "policy", cluster: "a" },
  { id: "a2", x: 18, y: 9,  r: 4, label: "claim", cluster: "a" },
  { id: "a3", x: 14, y: 22, r: 3, cluster: "a" },
  { id: "a4", x: 26, y: 18, r: 3, label: "evidence", cluster: "a" },
  { id: "a5", x: 22, y: 28, r: 3, cluster: "a" },
  { id: "a6", x: 32, y: 11, r: 3, label: "constraint", cluster: "a" },
  { id: "a7", x: 36, y: 23, r: 4, cluster: "a" },

  // Cluster B — central sparse spine
  { id: "b1", x: 46, y: 16, r: 4, label: "state", cluster: "b" },
  { id: "b2", x: 52, y: 30, r: 5, label: "subgraph", cluster: "b" },
  { id: "b3", x: 58, y: 42, r: 4, label: "traversal", cluster: "b" },
  { id: "b4", x: 64, y: 54, r: 5, cluster: "b" },
  { id: "b5", x: 70, y: 66, r: 4, label: "decision", cluster: "b" },

  // Cluster C — lower-right diffuse
  { id: "c1", x: 78, y: 24, r: 3, cluster: "c" },
  { id: "c2", x: 84, y: 36, r: 3, label: "session", cluster: "c" },
  { id: "c3", x: 88, y: 48, r: 3, cluster: "c" },
  { id: "c4", x: 78, y: 58, r: 4, label: "clinician_note", cluster: "c" },
  { id: "c5", x: 92, y: 60, r: 3, cluster: "c" },
  { id: "c6", x: 86, y: 70, r: 3, cluster: "c" },

  // Cluster D — bottom-left port domain
  { id: "d1", x: 12, y: 50, r: 3, label: "vessel", cluster: "d" },
  { id: "d2", x: 22, y: 58, r: 3, cluster: "d" },
  { id: "d3", x: 30, y: 50, r: 4, label: "berth_state", cluster: "d" },
  { id: "d4", x: 18, y: 70, r: 3, cluster: "d" },
  { id: "d5", x: 30, y: 76, r: 3, label: "schedule", cluster: "d" },
  { id: "d6", x: 42, y: 68, r: 3, cluster: "d" },

  // Solitaries — give the field whitespace tension
  { id: "s1", x: 50, y: 78, r: 3 },
  { id: "s2", x: 64, y: 12, r: 3 },
  { id: "s3", x: 6,  y: 38, r: 3 },
];

const EDGES: Array<[string, string]> = [
  ["a1", "a2"], ["a2", "a3"], ["a1", "a3"], ["a2", "a4"], ["a3", "a5"],
  ["a4", "a6"], ["a4", "a7"], ["a5", "a7"], ["a6", "b1"], ["a7", "b1"],
  ["a4", "b1"],
  ["b1", "b2"], ["b2", "b3"], ["b3", "b4"], ["b4", "b5"],
  ["b1", "s2"], ["b2", "c1"], ["b3", "c2"],
  ["c1", "c2"], ["c2", "c3"], ["c3", "c4"], ["c3", "c5"], ["c4", "c5"],
  ["c4", "c6"], ["c5", "c6"], ["c2", "c4"],
  ["d1", "d2"], ["d2", "d3"], ["d1", "d3"], ["d3", "d4"], ["d4", "d5"],
  ["d3", "d6"], ["d5", "d6"], ["d3", "b3"], ["d6", "b4"],
  ["s3", "a3"], ["s3", "d1"], ["s1", "b5"], ["s1", "d5"],
];

// Primary traversal — violet, runs through center spine
const TRAVERSAL_PRIMARY: string[] = ["a4", "b1", "b2", "b3", "b5"];
// Secondary traversal — blue, runs through clinical cluster
const TRAVERSAL_SECONDARY: string[] = ["c2", "c4", "c5", "c6"];

const NODE_BY_ID = new Map(NODES.map((n) => [n.id, n]));

function pathFor(ids: string[]): string {
  const pts = ids.map((id) => NODE_BY_ID.get(id)).filter(Boolean) as Node[];
  if (pts.length === 0) return "";
  return pts.map((n, i) => `${i === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}

const TRAVERSAL_PRIMARY_SET = new Set(TRAVERSAL_PRIMARY);
const TRAVERSAL_SECONDARY_SET = new Set(TRAVERSAL_SECONDARY);

export default function SemanticGraphHero() {
  return (
    <svg
      viewBox="0 0 100 90"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label="Sparse ontology graph showing four domain clusters connected by hairline relations, with two highlighted traversal paths in violet and blue suggesting active reasoning over the structure."
    >
      <defs>
        <marker
          id="hero-arrow-violet"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--violet)" />
        </marker>
        <marker
          id="hero-arrow-blue"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--blue)" />
        </marker>
      </defs>

      {/* Hairline grid — barely there, signals "engineering schematic" */}
      <g
        aria-hidden="true"
        stroke="var(--border)"
        strokeWidth="0.04"
        vectorEffect="non-scaling-stroke"
        opacity="0.7"
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v-${i}`} x1={(i * 100) / 10} x2={(i * 100) / 10} y1="0" y2="90" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="100" y1={(i * 90) / 9} y2={(i * 90) / 9} />
        ))}
      </g>

      {/* Ambient edges */}
      <g
        aria-hidden="true"
        stroke="var(--graph-line)"
        strokeWidth="0.18"
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        {EDGES.map(([a, b], i) => {
          const from = NODE_BY_ID.get(a);
          const to = NODE_BY_ID.get(b);
          if (!from || !to) return null;
          return (
            <line
              key={`e-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              strokeDasharray="600"
              strokeDashoffset="600"
              style={{
                animation: `graph-draw 1800ms ${360 + i * 32}ms cubic-bezier(0.2,0.6,0.1,1) both`,
                ["--dash-len" as string]: "600",
              }}
            />
          );
        })}
      </g>

      {/* Secondary traversal — blue */}
      <g aria-hidden="true" fill="none" vectorEffect="non-scaling-stroke">
        <path
          d={pathFor(TRAVERSAL_SECONDARY)}
          stroke="var(--blue)"
          strokeWidth="0.55"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset="200"
          markerEnd="url(#hero-arrow-blue)"
          style={{
            animation: "traverse 4200ms 2200ms cubic-bezier(0.2,0.6,0.1,1) infinite",
            ["--dash-len" as string]: "200",
          }}
        />
      </g>

      {/* Primary traversal — violet */}
      <g aria-hidden="true" fill="none" vectorEffect="non-scaling-stroke">
        <path
          d={pathFor(TRAVERSAL_PRIMARY)}
          stroke="var(--violet)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="220"
          strokeDashoffset="220"
          markerEnd="url(#hero-arrow-violet)"
          style={{
            animation: "traverse 4200ms 1100ms cubic-bezier(0.2,0.6,0.1,1) infinite",
            ["--dash-len" as string]: "220",
          }}
        />
      </g>

      {/* Nodes — squares for ambient (architectural language), circles for traversal nodes (decision points) */}
      <g aria-hidden="true">
        {NODES.map((n) => {
          const isPrimary = TRAVERSAL_PRIMARY_SET.has(n.id);
          const isSecondary = TRAVERSAL_SECONDARY_SET.has(n.id);
          const r = n.r ?? 3;

          if (isPrimary) {
            return (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r * 0.32}
                  fill="var(--violet)"
                  style={{
                    animation: `node-pulse 3.6s ${(parseInt(n.id.replace(/\D/g, "")) || 0) * 240}ms ease-in-out infinite`,
                  }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r * 0.7}
                  fill="none"
                  stroke="var(--violet)"
                  strokeWidth="0.18"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.55"
                />
              </g>
            );
          }
          if (isSecondary) {
            return (
              <circle
                key={n.id}
                cx={n.x}
                cy={n.y}
                r={r * 0.32}
                fill="var(--blue)"
                style={{
                  animation: `node-pulse 4s ${(parseInt(n.id.replace(/\D/g, "")) || 0) * 320}ms ease-in-out infinite`,
                }}
              />
            );
          }
          return (
            <rect
              key={n.id}
              x={n.x - r * 0.22}
              y={n.y - r * 0.22}
              width={r * 0.44}
              height={r * 0.44}
              fill="var(--text-muted)"
              opacity="0.42"
            />
          );
        })}
      </g>

      {/* Micro labels — half-opacity, only on labelled nodes */}
      <g
        aria-hidden="true"
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="1.35"
        letterSpacing="0.01"
        fill="var(--text-muted)"
        opacity="0.6"
      >
        {NODES.filter((n) => n.label).map((n) => {
          const isPrimary = TRAVERSAL_PRIMARY_SET.has(n.id);
          const isSecondary = TRAVERSAL_SECONDARY_SET.has(n.id);
          const fill = isPrimary
            ? "var(--violet)"
            : isSecondary
              ? "var(--blue)"
              : "var(--text-muted)";
          return (
            <text
              key={`l-${n.id}`}
              x={n.x + (n.r ?? 3) * 0.6}
              y={n.y - (n.r ?? 3) * 0.4}
              fill={fill}
              opacity={isPrimary || isSecondary ? 0.95 : 0.55}
            >
              {n.label}
            </text>
          );
        })}
      </g>

      {/* Plate caption — bottom-right, like a journal figure */}
      <g
        aria-hidden="true"
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="1.5"
        letterSpacing="0.18"
        fill="var(--text-soft)"
        opacity="0.7"
      >
        <text x="100" y="87" textAnchor="end">
          FIG · DOMAIN ONTOLOGY × LLM TRAVERSAL
        </text>
      </g>
    </svg>
  );
}
