/*
  Technical-Moat architecture diagram — three stacked layers, light theme.

    Layer I  · Auto-Scaling Domain Ontology
                 raw signals → typed nodes (entities · states · relations · constraints)
                 a small node cluster on the right shows one node being added
                 (highlighted blue dashed) — the engine evolves with deployment data.

    Layer II · LLM × Ontology Traversal
                 the LLM walks a graph; a violet path through the ontology is
                 highlighted (path-inspectable). NOT "LM × Schema" — the relabel
                 is the point of this layer.

    Layer III· Self-Evolving Runtime
                 closed feedback loop: deployment → reasoning-path review →
                 architecture improvement (the architecture-improvement arc is in
                 violet, tying back to the moat headline above the diagram).
*/

export default function ArchitectureDiagram() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 800 720"
        className="h-auto w-full"
        role="img"
        aria-label="AiNOS technical-moat architecture. Three stacked layers — Auto-Scaling Domain Ontology, LLM × Ontology Traversal, and Self-Evolving Runtime — each rendered as a labeled white panel with a small inset diagram. Layer I shows a domain ontology with one new node being added. Layer II shows an LLM walking a violet path through an ontology graph. Layer III shows a closed feedback loop where deployment review feeds back into architecture improvement."
      >
        <defs>
          <pattern
            id="moat-grid"
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
            id="moat-arrow-blue"
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
            id="moat-arrow-violet"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--violet)" />
          </marker>
        </defs>

        {/* Frame + grid */}
        <rect width="800" height="720" fill="var(--surface)" />
        <rect width="800" height="720" fill="url(#moat-grid)" opacity="0.7" />
        <rect
          x="0.5"
          y="0.5"
          width="799"
          height="719"
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
          <text x="32" y="32">PLATE 03 · TECHNICAL MOAT</text>
          <text x="768" y="32" textAnchor="end">
            PROPRIETARY · HELD AS IP
          </text>
        </g>

        {/* Top row — input vocabulary */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.6"
          fill="var(--text-soft)"
        >
          <text x="40" y="68">TEXT</text>
          <text x="160" y="68">AUDIO</text>
          <text x="280" y="68">IMAGE</text>
          <text x="400" y="68">VIDEO</text>
          <text x="520" y="68">SENSOR</text>
          <text x="768" y="68" textAnchor="end">OPERATIONAL SIGNALS</text>
        </g>
        <g stroke="var(--blue)" strokeWidth="0.8" opacity="0.55" fill="none">
          <line x1="60" y1="76" x2="60" y2="100" strokeDasharray="2 3" />
          <line x1="180" y1="76" x2="180" y2="100" strokeDasharray="2 3" />
          <line x1="300" y1="76" x2="300" y2="100" strokeDasharray="2 3" />
          <line x1="420" y1="76" x2="420" y2="100" strokeDasharray="2 3" />
          <line x1="540" y1="76" x2="540" y2="100" strokeDasharray="2 3" />
          <line x1="720" y1="76" x2="720" y2="100" strokeDasharray="2 3" />
        </g>

        {/* ─── LAYER I — Auto-Scaling Domain Ontology ─── */}
        <Layer
          y={108}
          numeral="I"
          label="AUTO-SCALING DOMAIN ONTOLOGY"
          title="Auto-Scaling Domain Ontology"
          caption="bootstrap · evolve · retire"
        >
          {/* Inset diagram — domain ontology with one new node */}
          <g transform="translate(488, 130)">
            {/* edges */}
            <g stroke="var(--blue)" strokeWidth="1" fill="none" opacity="0.7">
              <line x1="20" y1="40" x2="60" y2="20" />
              <line x1="60" y1="20" x2="100" y2="38" />
              <line x1="100" y1="38" x2="120" y2="64" />
              <line x1="20" y1="40" x2="36" y2="74" />
              <line x1="36" y1="74" x2="80" y2="80" />
              <line x1="80" y1="80" x2="120" y2="64" />
              <line x1="60" y1="20" x2="80" y2="80" />
              <line x1="100" y1="38" x2="36" y2="74" />
            </g>
            {/* existing nodes */}
            <g fill="var(--blue)">
              {[[20, 40], [60, 20], [100, 38], [36, 74], [80, 80], [120, 64]].map(
                ([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" />
                )
              )}
            </g>
            {/* new evolving node — dashed outline */}
            <circle
              cx="160"
              cy="48"
              r="6"
              fill="var(--surface)"
              stroke="var(--blue)"
              strokeWidth="1.4"
              strokeDasharray="2 2"
            />
            <line
              x1="120"
              y1="64"
              x2="160"
              y2="48"
              stroke="var(--blue)"
              strokeWidth="0.9"
              strokeDasharray="3 2"
            />
            <text
              x="172"
              y="36"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.2"
              fill="var(--blue)"
            >
              NEW NODE
            </text>
            <text
              x="172"
              y="48"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.2"
              fill="var(--text-muted)"
            >
              auto-induced
            </text>
            <text
              x="172"
              y="60"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.2"
              fill="var(--text-muted)"
            >
              from deployment
            </text>
          </g>
        </Layer>

        {/* Connector — Layer I → Layer II */}
        <line
          x1="120"
          y1="276"
          x2="120"
          y2="306"
          stroke="var(--blue)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-blue)"
        />
        <line
          x1="400"
          y1="276"
          x2="400"
          y2="306"
          stroke="var(--blue)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-blue)"
        />
        <line
          x1="680"
          y1="276"
          x2="680"
          y2="306"
          stroke="var(--blue)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-blue)"
        />

        {/* ─── LAYER II — LLM × Ontology Traversal ─── */}
        <Layer
          y={314}
          numeral="II"
          label="LLM × ONTOLOGY TRAVERSAL"
          title="LLM × Ontology Traversal"
          caption="schema-aware · evidence-grounded · path-inspectable"
          violet
        >
          {/* Inset — LLM block + ontology graph + violet traversal path */}
          <g transform="translate(444, 332)">
            <rect
              x="0"
              y="20"
              width="56"
              height="36"
              fill="var(--surface)"
              stroke="var(--violet)"
              strokeWidth="1.2"
              rx="3"
            />
            <text
              x="28"
              y="42"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2.2"
              fill="var(--violet)"
            >
              LLM
            </text>

            {/* Curved arrow into the graph */}
            <path
              d="M 60 38 C 88 38, 108 50, 138 46"
              stroke="var(--violet)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 2"
              markerEnd="url(#moat-arrow-violet)"
            />

            {/* Ontology graph */}
            <g transform="translate(140, 0)" stroke="var(--violet)" fill="none">
              <g strokeWidth="1" opacity="0.55">
                <line x1="10" y1="34" x2="42" y2="14" />
                <line x1="42" y1="14" x2="76" y2="22" />
                <line x1="76" y1="22" x2="100" y2="48" />
                <line x1="100" y1="48" x2="78" y2="74" />
                <line x1="78" y1="74" x2="32" y2="68" />
                <line x1="32" y1="68" x2="10" y2="34" />
                <line x1="42" y1="14" x2="78" y2="74" />
                <line x1="76" y1="22" x2="32" y2="68" />
              </g>
              {/* Highlighted traversal */}
              <path
                d="M 10 34 L 42 14 L 76 22 L 100 48 L 78 74"
                stroke="var(--violet)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="260"
                strokeDashoffset="260"
                style={{
                  animation: "traverse 4800ms 400ms cubic-bezier(0.2,0.6,0.1,1) infinite",
                }}
              />
              {/* Nodes */}
              <g fill="var(--violet)">
                {[[10, 34], [42, 14], [76, 22], [100, 48], [78, 74], [32, 68]].map(
                  ([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" />
                  )
                )}
              </g>
            </g>
          </g>
        </Layer>

        {/* Connector — Layer II → Layer III */}
        <line
          x1="120"
          y1="482"
          x2="120"
          y2="512"
          stroke="var(--violet)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-violet)"
        />
        <line
          x1="400"
          y1="482"
          x2="400"
          y2="512"
          stroke="var(--violet)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-violet)"
        />
        <line
          x1="680"
          y1="482"
          x2="680"
          y2="512"
          stroke="var(--violet)"
          strokeWidth="1.2"
          markerEnd="url(#moat-arrow-violet)"
        />

        {/* ─── LAYER III — Self-Evolving Runtime ─── */}
        <Layer
          y={520}
          numeral="III"
          label="SELF-EVOLVING RUNTIME"
          title="Self-Evolving Runtime"
          caption="deployment · feedback · architecture improvement"
        >
          {/* Inset — feedback loop */}
          <g transform="translate(450, 540)">
            <g fill="none" strokeWidth="1.2">
              {/* Forward arc: deployment → reasoning review */}
              <path
                d="M 30 60 C 30 14, 200 14, 200 60"
                stroke="var(--blue)"
                fill="none"
                markerEnd="url(#moat-arrow-blue)"
              />
              {/* Return arc: review → architecture improvement (violet — the moat) */}
              <path
                d="M 200 70 C 200 116, 30 116, 30 70"
                stroke="var(--violet)"
                fill="none"
                markerEnd="url(#moat-arrow-violet)"
              />
            </g>

            {/* Loop endpoint labels */}
            <rect
              x="6"
              y="58"
              width="56"
              height="14"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="0.8"
            />
            <text
              x="34"
              y="68"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.4"
              fill="var(--text)"
            >
              DEPLOY
            </text>
            <rect
              x="172"
              y="58"
              width="56"
              height="14"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="0.8"
            />
            <text
              x="200"
              y="68"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.4"
              fill="var(--text)"
            >
              REVIEW
            </text>

            <text
              x="116"
              y="6"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.4"
              fill="var(--blue)"
            >
              REASONING-PATH FEEDBACK
            </text>
            <text
              x="116"
              y="128"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              letterSpacing="1.4"
              fill="var(--violet)"
            >
              ARCHITECTURE IMPROVEMENT
            </text>
          </g>
        </Layer>

        {/* Bottom row — outputs */}
        <g stroke="var(--violet)" strokeWidth="0.8" opacity="0.65" fill="none">
          <line x1="120" y1="690" x2="120" y2="704" strokeDasharray="2 3" />
          <line x1="280" y1="690" x2="280" y2="704" strokeDasharray="2 3" />
          <line x1="440" y1="690" x2="440" y2="704" strokeDasharray="2 3" />
          <line x1="600" y1="690" x2="600" y2="704" strokeDasharray="2 3" />
          <line x1="720" y1="690" x2="720" y2="704" strokeDasharray="2 3" />
        </g>
      </svg>
    </div>
  );
}

function Layer({
  y,
  numeral,
  label,
  title,
  caption,
  violet = false,
  children,
}: {
  y: number;
  numeral: string;
  label: string;
  title: string;
  caption: string;
  violet?: boolean;
  children: React.ReactNode;
}) {
  const accent = violet ? "var(--violet)" : "var(--blue)";
  return (
    <g>
      <rect
        x="32"
        y={y}
        width={736}
        height={160}
        fill={violet ? "var(--surface-violet)" : "var(--surface)"}
        stroke={accent}
        strokeWidth="1.2"
        rx="4"
      />
      {/* Corner ticks for editorial detail */}
      <Corners x={32} y={y} w={736} h={160} accent={accent} />

      {/* Layer numeral block */}
      <g transform={`translate(56, ${y + 24})`}>
        <text
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="2.2"
          fill={accent}
        >
          LAYER {numeral} · {label}
        </text>
        <text
          y="32"
          fontFamily="var(--font-display), ui-serif, serif"
          fontSize="26"
          fontStyle="italic"
          fill="var(--text)"
        >
          {title}
        </text>
        <text
          y="56"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="11"
          letterSpacing="1.4"
          fill="var(--text-muted)"
        >
          {caption}
        </text>
      </g>

      {children}
    </g>
  );
}

function Corners({
  x,
  y,
  w,
  h,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  accent: string;
}) {
  const t = 7;
  const pts: Array<[number, number, number, number]> = [
    [x, y, x + t, y],
    [x, y, x, y + t],
    [x + w, y, x + w - t, y],
    [x + w, y, x + w, y + t],
    [x, y + h, x + t, y + h],
    [x, y + h, x, y + h - t],
    [x + w, y + h, x + w - t, y + h],
    [x + w, y + h, x + w, y + h - t],
  ];
  return (
    <g stroke={accent} strokeWidth="1.4">
      {pts.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  );
}
