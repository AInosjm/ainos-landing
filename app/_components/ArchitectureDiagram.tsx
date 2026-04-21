/*
  Hand-crafted blueprint diagram for the three architectural moats.
  Inputs at top (multimodal signals) feed down through three layers;
  decisions emerge at the bottom. Pure SVG + CSS — no stock imagery.
*/
export default function ArchitectureDiagram() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 800 640"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of the AiNOS Decision OS architecture, showing multimodal inputs feeding three stacked layers — adaptive ontology engine, language-model utilization architecture, and self-evolving production infrastructure — which produce decisions and actions."
      >
        <defs>
          <pattern
            id="blueprint-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bone-400)" strokeWidth="0.3" opacity="0.15" />
          </pattern>

          <marker
            id="arrow-bone"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--bone-400)" />
          </marker>
          <marker
            id="arrow-accent"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        <rect width="800" height="640" fill="url(#blueprint-grid)" />

        {/* Inputs row */}
        <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4" fill="var(--bone-400)">
          <text x="40" y="32" textAnchor="start">TEXT</text>
          <text x="190" y="32" textAnchor="start">AUDIO</text>
          <text x="340" y="32" textAnchor="start">VIDEO</text>
          <text x="490" y="32" textAnchor="start">IMAGE</text>
          <text x="760" y="32" textAnchor="end">OPERATIONAL SIGNALS</text>
        </g>

        {/* Input feed lines */}
        <g stroke="var(--bone-400)" strokeWidth="0.8" opacity="0.55" fill="none">
          <line x1="50" y1="44" x2="50" y2="110" strokeDasharray="2 3" />
          <line x1="200" y1="44" x2="200" y2="110" strokeDasharray="2 3" />
          <line x1="350" y1="44" x2="350" y2="110" strokeDasharray="2 3" />
          <line x1="500" y1="44" x2="500" y2="110" strokeDasharray="2 3" />
          <line x1="720" y1="44" x2="720" y2="110" strokeDasharray="2 3" />
        </g>

        {/* ——— LAYER I — Adaptive Ontology Engine ——— */}
        <g>
          <rect
            x="30"
            y="120"
            width="740"
            height="130"
            fill="none"
            stroke="var(--bone-200)"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
          {/* Corner ticks — blueprint detail */}
          <Corners x={30} y={120} w={740} h={130} />

          {/* Layer label */}
          <g transform="translate(48, 148)">
            <text fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="var(--accent)">
              LAYER I
            </text>
            <text
              y="24"
              fontFamily="var(--font-display)"
              fontSize="26"
              fill="var(--bone-50)"
              style={{ fontStyle: "italic" }}
            >
              Adaptive Ontology Engine
            </text>
            <text
              y="50"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--bone-400)"
            >
              bootstrap · evolve · retire
            </text>
          </g>

          {/* Mini ontology graph on the right side of the layer */}
          <g transform="translate(440, 140)" stroke="var(--bone-200)" strokeOpacity="0.8" strokeWidth="0.8" fill="none">
            {/* nodes */}
            {[
              [30, 40], [90, 15], [150, 45], [210, 20], [270, 55],
              [60, 80], [130, 85], [200, 75], [260, 95], [300, 40],
            ].map(([x, y], i) => (
              <rect key={i} x={x - 2} y={y - 2} width="4" height="4" fill="var(--bone-200)" />
            ))}
            {/* edges */}
            <g opacity="0.55">
              <line x1="30" y1="40" x2="90" y2="15" />
              <line x1="90" y1="15" x2="150" y2="45" />
              <line x1="150" y1="45" x2="210" y2="20" />
              <line x1="210" y1="20" x2="270" y2="55" />
              <line x1="30" y1="40" x2="60" y2="80" />
              <line x1="60" y1="80" x2="130" y2="85" />
              <line x1="130" y1="85" x2="200" y2="75" />
              <line x1="200" y1="75" x2="260" y2="95" />
              <line x1="260" y1="95" x2="300" y2="40" />
              <line x1="150" y1="45" x2="130" y2="85" />
              <line x1="90" y1="15" x2="60" y2="80" />
              <line x1="210" y1="20" x2="200" y2="75" />
            </g>
            {/* accent "new" edge — evolving */}
            <line x1="260" y1="95" x2="150" y2="45" stroke="var(--accent)" strokeDasharray="3 2" />
          </g>
        </g>

        {/* ——— LAYER II — LM / Ontology Utilization ——— */}
        <g transform="translate(0, 150)">
          <rect
            x="30"
            y="120"
            width="740"
            height="130"
            fill="none"
            stroke="var(--bone-200)"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
          <Corners x={30} y={120} w={740} h={130} />

          <g transform="translate(48, 148)">
            <text fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="var(--accent)">
              LAYER II
            </text>
            <text
              y="24"
              fontFamily="var(--font-display)"
              fontSize="26"
              fill="var(--bone-50)"
              style={{ fontStyle: "italic" }}
            >
              Utilization Architecture
            </text>
            <text
              y="50"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--bone-400)"
            >
              language model × evolving schema
            </text>
          </g>

          {/* LM × schema coupling — two columns with cross-connections */}
          <g transform="translate(440, 140)">
            {/* LM column */}
            <rect x="20" y="0" width="90" height="90" fill="none" stroke="var(--bone-400)" strokeOpacity="0.6" />
            <text x="65" y="16" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6" fill="var(--bone-400)">
              LM
            </text>
            {[0, 1, 2, 3].map((i) => (
              <line
                key={`lm-${i}`}
                x1={30 + i * 20}
                y1="28"
                x2={30 + i * 20}
                y2="80"
                stroke="var(--bone-200)"
                strokeOpacity="0.35"
                strokeWidth="0.6"
              />
            ))}

            {/* Schema column */}
            <rect x="190" y="0" width="90" height="90" fill="none" stroke="var(--bone-400)" strokeOpacity="0.6" />
            <text x="235" y="16" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6" fill="var(--bone-400)">
              SCHEMA
            </text>
            {[
              [200, 30], [230, 36], [260, 28],
              [205, 52], [240, 58], [270, 50],
              [210, 72], [250, 78],
            ].map(([x, y], i) => (
              <rect key={`s-${i}`} x={x - 1.5} y={y - 1.5} width="3" height="3" fill="var(--bone-200)" />
            ))}

            {/* Coupling arrows between columns */}
            <g stroke="var(--accent)" strokeWidth="0.9" fill="none">
              <path d="M 110 30 C 140 30 160 30 190 30" markerEnd="url(#arrow-accent)" />
              <path d="M 190 55 C 160 55 140 55 110 55" markerEnd="url(#arrow-accent)" />
              <path d="M 110 80 C 140 80 160 80 190 80" markerEnd="url(#arrow-accent)" />
            </g>
          </g>
        </g>

        {/* ——— LAYER III — Self-Evolving Production Infrastructure ——— */}
        <g transform="translate(0, 300)">
          <rect
            x="30"
            y="120"
            width="740"
            height="130"
            fill="none"
            stroke="var(--bone-200)"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
          <Corners x={30} y={120} w={740} h={130} />

          <g transform="translate(48, 148)">
            <text fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="var(--accent)">
              LAYER III
            </text>
            <text
              y="24"
              fontFamily="var(--font-display)"
              fontSize="26"
              fill="var(--bone-50)"
              style={{ fontStyle: "italic" }}
            >
              Self-Evolving Runtime
            </text>
            <text
              y="50"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--bone-400)"
            >
              feedback · retrain · redeploy
            </text>
          </g>

          {/* Feedback loop symbol on the right */}
          <g transform="translate(440, 140)" fill="none" strokeWidth="0.9" stroke="var(--bone-200)" strokeOpacity="0.7">
            <path
              d="M 40 45 C 40 10, 220 10, 220 45 L 260 45 L 240 30 M 260 45 L 240 60"
            />
            <path
              d="M 260 55 C 260 90, 80 90, 80 55 L 40 55 L 60 40 M 40 55 L 60 70"
              stroke="var(--accent)"
            />
            <text x="150" y="8" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6" fill="var(--bone-400)">
              DEPLOY
            </text>
            <text x="150" y="104" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6" fill="var(--accent)">
              FEEDBACK
            </text>
          </g>
        </g>

        {/* Flow lines between layers — subtle */}
        <g stroke="var(--bone-400)" strokeOpacity="0.5" strokeDasharray="2 3" strokeWidth="0.6">
          <line x1="110" y1="250" x2="110" y2="270" />
          <line x1="400" y1="250" x2="400" y2="270" />
          <line x1="690" y1="250" x2="690" y2="270" />
          <line x1="110" y1="400" x2="110" y2="420" />
          <line x1="400" y1="400" x2="400" y2="420" />
          <line x1="690" y1="400" x2="690" y2="420" />
        </g>

        {/* Outputs row */}
        <g stroke="var(--bone-400)" strokeWidth="0.8" opacity="0.55" fill="none">
          <line x1="130" y1="550" x2="130" y2="600" strokeDasharray="2 3" />
          <line x1="310" y1="550" x2="310" y2="600" strokeDasharray="2 3" />
          <line x1="490" y1="550" x2="490" y2="600" strokeDasharray="2 3" />
          <line x1="670" y1="550" x2="670" y2="600" strokeDasharray="2 3" />
        </g>

        <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4" fill="var(--bone-400)">
          <text x="40" y="620">NEXT-BEST ACTION</text>
          <text x="220" y="620">SEMANTIC STATE</text>
          <text x="430" y="620">ORCHESTRATION</text>
          <text x="760" y="620" textAnchor="end">CONTINUOUS DECISION</text>
        </g>
      </svg>
    </div>
  );
}

function Corners({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const t = 6;
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
    <g stroke="var(--accent)" strokeWidth="1">
      {pts.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  );
}
