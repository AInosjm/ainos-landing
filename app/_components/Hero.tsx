import Link from "next/link";
import AiNOSLogo from "./AiNOSLogo";
import SemanticGraphHero from "./SemanticGraphHero";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden surface-porcelain"
    >
      {/* Quiet ambient warmth pulling the eye toward the graph zone — barely a whisper. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 78% 38%, rgba(29,108,255,0.05), transparent 70%)",
        }}
      />

      <div className="container-edge mx-auto flex min-h-[100svh] max-w-[1480px] flex-col">
        {/* Nav strip */}
        <header className="flex items-center justify-between pt-7 pb-12 sm:pt-9 sm:pb-16">
          <Link
            href="/"
            aria-label="AiNOS — home"
            className="group block w-[136px] sm:w-[152px]"
          >
            <AiNOSLogo tone="dark" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 lg:flex"
          >
            {[
              { label: "Why Now", href: "#why-now" },
              { label: "Architecture", href: "#architecture" },
              { label: "Proof", href: "#proof" },
              { label: "Research", href: "#research" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11.5px] tracking-[0.10em] uppercase text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--blue)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.10em] uppercase text-[var(--text)]"
          >
            <span className="border-b border-[var(--border)] pb-0.5 transition-colors duration-200 group-hover:border-[var(--blue)] group-hover:text-[var(--blue)]">
              Partner with us
            </span>
            <span
              aria-hidden
              className="inline-block translate-y-[-1px] text-[var(--blue)] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </header>

        {/* Main hero body */}
        <div className="flex flex-1 items-center py-6 sm:py-8">
          <div className="grid w-full grid-cols-12 gap-x-6 gap-y-12">
            {/* Left zone — typography */}
            <div className="col-span-12 lg:col-span-7">
              {/* Eyebrow — IR-deck-precise positioning */}
              <p
                className="hero-line label mb-9 flex flex-wrap items-center gap-3 text-[var(--text-muted)]"
                style={{ ["--hero-delay" as string]: "0ms" }}
              >
                <AiNOSLogo
                  tone="muted"
                  className="w-[120px] translate-y-[1px]"
                />
                <span className="inline-block h-px w-7 bg-[var(--text-muted)] opacity-60" />
                <span>Ontology-Driven Multimodal AI Infrastructure</span>
              </p>

              {/* H1 — three lines, staggered */}
              <h1
                id="hero-title"
                className="font-display text-balance text-[clamp(2.4rem,6.8vw,6.5rem)] leading-[0.94] tracking-[-0.02em] text-[var(--text)]"
              >
                <span
                  className="hero-line block"
                  style={{ ["--hero-delay" as string]: "120ms" }}
                >
                  The Semantic
                </span>
                <span
                  className="hero-line block italic text-[var(--blue)]"
                  style={{ ["--hero-delay" as string]: "240ms" }}
                >
                  Infrastructure
                </span>
                <span
                  className="hero-line block"
                  style={{ ["--hero-delay" as string]: "360ms" }}
                >
                  for Domain AI
                  <span className="text-[var(--blue)]">.</span>
                </span>
              </h1>

              {/* Sub-line — IR-precise restatement */}
              <p
                className="hero-line mt-9 max-w-[56ch] text-pretty text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--text)]"
                style={{ ["--hero-delay" as string]: "520ms" }}
              >
                AiNOS turns multimodal and operational signals into{" "}
                <span className="text-[var(--blue)]">domain-specific semantic structures</span>,
                so language models can reason with context, constraints, and{" "}
                <span className="text-[var(--violet)]">evidence</span>.
              </p>

              {/* Meta row — three architectural primitives */}
              <div
                className="hero-line mt-12 grid max-w-2xl grid-cols-1 gap-y-6 border-t border-[var(--border)] pt-7 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0"
                style={{ ["--hero-delay" as string]: "660ms" }}
              >
                <MetaMark
                  index="I"
                  label="Domain Ontology"
                  note="Signal → semantic structure"
                />
                <MetaMark
                  index="II"
                  label="Reasoning Architecture"
                  note="LLM × ontology traversal"
                  violet
                />
                <MetaMark
                  index="III"
                  label="Self-Evolving Runtime"
                  note="Feedback → architecture improvement"
                />
              </div>

              {/* CTA pair */}
              <div
                className="hero-line mt-12 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ ["--hero-delay" as string]: "800ms" }}
              >
                <a href="#contact" className="cta-primary">
                  Partner with AiNOS
                  <span className="cta-arrow" aria-hidden>
                    →
                  </span>
                </a>
                <a href="#architecture" className="cta-secondary">
                  View architecture
                </a>
              </div>
            </div>

            {/* Right zone — sparse ontology graph */}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="hero-line relative aspect-[4/3] w-full lg:aspect-auto lg:h-full"
                style={{ ["--hero-delay" as string]: "200ms" }}
              >
                <SemanticGraphHero />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rail — live status + scroll cue */}
        <div className="flex flex-col items-start justify-between gap-4 pt-10 pb-8 sm:flex-row sm:items-end sm:gap-6 sm:pt-16 sm:pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--blue)]"
              aria-hidden
              style={{ animation: "schematic-pulse 2.6s ease-in-out infinite" }}
            />
            <span className="font-mono text-[11px] tracking-[0.10em] uppercase text-[var(--text-muted)]">
              Live —
              <span className="text-[var(--text)]"> Vector Institute</span> ·
              MMG mental health platform · Busan Smart Port
              <span className="text-[var(--text-soft)]"> (PoC)</span> · Vitality
              partnership discussion
            </span>
          </div>

          <a
            href="#why-now"
            className="group hidden items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)] hover:text-[var(--blue)] sm:flex"
            aria-label="Scroll to Why Now section"
          >
            <span>Scroll</span>
            <span
              aria-hidden
              className="relative block h-10 w-px bg-[var(--text-muted)] opacity-50 overflow-hidden"
            >
              <span
                className="absolute left-0 top-0 block h-4 w-px bg-[var(--blue)]"
                style={{
                  animation: "scroll-hint 2.4s ease-in-out infinite",
                }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MetaMark({
  index,
  label,
  note,
  violet = false,
}: {
  index: string;
  label: string;
  note: string;
  violet?: boolean;
}) {
  const accent = violet ? "var(--violet)" : "var(--blue)";
  return (
    <div className="flex flex-col gap-2">
      <span
        className="font-mono text-[10px] tracking-[0.22em]"
        style={{ color: accent }}
      >
        {index}
      </span>
      <span className="font-display text-[1.05rem] leading-tight text-[var(--text)]">
        {label}
      </span>
      <span className="font-mono text-[11px] tracking-[0.02em] text-[var(--text-muted)]">
        {note}
      </span>
    </div>
  );
}
