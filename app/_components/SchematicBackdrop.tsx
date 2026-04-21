/*
  Ambient blueprint-style schematic for the hero.
  A sparse graph of nodes (entities) connected by hairline edges (relations)
  that slowly draw themselves in. Deliberately restrained — evokes an
  engineering schematic, never a neural net.
*/
export default function SchematicBackdrop() {
  // Deterministic node grid — no randomness to keep server/client output identical
  const cols = 9;
  const rows = 6;
  const gapX = 100 / (cols + 1);
  const gapY = 100 / (rows + 1);

  const nodes: { x: number; y: number; id: string }[] = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      // Slight organic jitter derived from index so it's stable
      const jx = ((c * 17 + r * 31) % 7) - 3;
      const jy = ((c * 13 + r * 23) % 7) - 3;
      nodes.push({
        x: c * gapX + jx * 0.2,
        y: r * gapY + jy * 0.25,
        id: `n-${r}-${c}`,
      });
    }
  }

  // A small editorial selection of edges — not every-to-every
  const pairs: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
    [9, 10], [10, 11], [11, 12], [13, 14], [14, 15], [16, 17],
    [0, 9], [2, 11], [4, 13], [6, 15], [8, 17],
    [9, 18], [11, 20], [13, 22], [15, 24], [17, 26],
    [18, 19], [20, 21], [22, 23], [24, 25],
    [18, 27], [20, 29], [22, 31], [24, 33], [26, 35],
    [27, 28], [29, 30], [31, 32], [33, 34],
    [27, 36], [29, 38], [31, 40], [33, 42],
    [36, 37], [38, 39], [40, 41], [42, 43], [44, 45],
    [36, 45], [38, 47], [40, 49], [42, 51],
    [45, 46], [47, 48], [49, 50], [51, 52],
  ];

  const validPairs = pairs.filter(([a, b]) => a < nodes.length && b < nodes.length);

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        maskImage:
          "radial-gradient(ellipse 75% 65% at 60% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 65% at 60% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 95%)",
      }}
    >
      {/* Hairline base grid for blueprint feel */}
      <g opacity="0.06" stroke="var(--bone-400)" strokeWidth="0.06" vectorEffect="non-scaling-stroke">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v-${i}`} x1={(i * 100) / 12} x2={(i * 100) / 12} y1="0" y2="100" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="100" y1={(i * 100) / 8} y2={(i * 100) / 8} />
        ))}
      </g>

      {/* Edges — slow draw, staggered */}
      <g stroke="var(--bone-400)" strokeWidth="0.15" fill="none" vectorEffect="non-scaling-stroke">
        {validPairs.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          const dashLen = 600;
          return (
            <line
              key={`e-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              strokeDasharray={dashLen}
              strokeDashoffset={dashLen}
              style={{
                animation: `schematic-draw 2400ms ${400 + i * 55}ms cubic-bezier(0.2,0.6,0.1,1) both`,
                opacity: 0.55,
              }}
            />
          );
        })}
      </g>

      {/* Nodes — tiny architectural squares, never circles */}
      <g fill="var(--bone-200)" opacity="0.9">
        {nodes.map((n, i) => {
          // Highlight a small subset in accent bronze — "load-bearing" entities
          const accented = i % 11 === 3 || i % 13 === 5;
          return (
            <rect
              key={n.id}
              x={n.x - 0.2}
              y={n.y - 0.2}
              width="0.4"
              height="0.4"
              fill={accented ? "var(--accent)" : "var(--bone-200)"}
              opacity={accented ? 0.9 : 0.35}
              style={{
                animation: `schematic-pulse ${6 + (i % 5)}s ${i * 90}ms ease-in-out infinite`,
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}
