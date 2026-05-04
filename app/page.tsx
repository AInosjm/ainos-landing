import Image from "next/image";
import Hero from "./_components/Hero";
import Reveal from "./_components/Reveal";
import ArchitectureDiagram from "./_components/ArchitectureDiagram";
import OntologyFlowDiagram from "./_components/OntologyFlowDiagram";
import ProofMapDiagram from "./_components/ProofMapDiagram";
import MotionTokenTimeline from "./_components/MotionTokenTimeline";
import AiNOSLogo from "./_components/AiNOSLogo";

export default function Page() {
  return (
    <main id="main" className="relative">
      <div className="grain" aria-hidden />

      <Hero />

      <WhyNow />
      <OntologyReasoningInfrastructure />

      <ProofMap />
      <TechnicalMoat />
      <ExpansionPaths />

      <PhysicalAIBridge />
      <ResearchFoundation />

      <Closing />

      <Footer />
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Shared scaffolding                                                      */
/* ──────────────────────────────────────────────────────────────────────── */

function SectionHead({
  chapter,
  index,
  kicker,
  blurb,
}: {
  chapter: string;
  index: string;
  kicker: string;
  blurb?: React.ReactNode;
}) {
  return (
    <div className="col-span-12 mb-10 lg:col-span-3 lg:mb-0">
      <div className="flex flex-col gap-2">
        <span className="chapter-mark">CH {chapter}</span>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--blue)]">
            §{" "}
            <span aria-hidden>{index}</span>
          </span>
          <span className="label">{kicker}</span>
        </div>
      </div>
      {blurb ? (
        <div className="mt-6 max-w-[32ch] text-[13px] leading-[1.6] text-[var(--text-muted)]">
          {blurb}
        </div>
      ) : null}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH I · § 02 — Why Now                                                   */
/* ──────────────────────────────────────────────────────────────────────── */

function WhyNow() {
  const frictions = [
    {
      kicker: "Regulated Enterprise",
      label: "Compliance, auditability, institutional constraints.",
      desc: "Decisions must be defensible against regulators, audit trails, and institutional process — not just plausibly worded.",
    },
    {
      kicker: "Clinical Workflow",
      label: "Longitudinal context, clinician review, reasoning continuity.",
      desc: "What happened in prior sessions, what the clinician noted, what the patient logged — context accumulates and must remain reviewable.",
    },
    {
      kicker: "Physical Operations",
      label: "Sensor signals, temporal state, operational consequence.",
      desc: "Real-world systems carry state across time, and an action has physical consequences. Flat context is not enough.",
    },
  ];

  return (
    <section
      id="why-now"
      aria-labelledby="why-now-title"
      className="surface-white"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="I"
            index="02"
            kicker="Why Now"
            blurb={
              <>
                LLMs keep getting stronger. Domain work does not get
                context-free.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-12">
              {/* Pull-quote */}
              <Reveal className="md:col-span-5">
                <h2
                  id="why-now-title"
                  className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08] tracking-[-0.018em] text-[var(--text)] text-balance"
                >
                  Better models do not remove
                  <br />
                  <span className="italic">domain context.</span>
                  <br />
                  They make structured context
                  <br />
                  <span className="italic text-[var(--blue)]">
                    more valuable.
                  </span>
                </h2>
                <p className="mt-10 max-w-[36ch] text-[14.5px] leading-[1.6] text-[var(--text-muted)]">
                  Each domain has its own entities, states, relations, evidence
                  chains, and lines of responsibility. None of that comes from
                  the model. It has to be built — and kept — outside it.
                </p>
              </Reveal>

              {/* Friction blocks */}
              <div className="md:col-span-7">
                <div className="space-y-8">
                  {frictions.map((f, i) => (
                    <Reveal
                      key={f.kicker}
                      delay={120 + i * 100}
                      className="border-t border-[var(--border)] pt-7"
                    >
                      <p className="label mb-2">{`0${i + 1} · ${f.kicker}`}</p>
                      <p className="font-display text-[clamp(1.2rem,1.8vw,1.45rem)] leading-[1.18] text-[var(--text)]">
                        {f.label}
                      </p>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.65] text-[var(--text-muted)]">
                        {f.desc}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <Reveal
                  delay={460}
                  className="mt-12 border-t border-[var(--border)] pt-7"
                >
                  <p className="font-display text-[clamp(1.05rem,1.4vw,1.25rem)] italic leading-[1.5] text-[var(--text)] max-w-[52ch]">
                    The gap is not in the model. It is between the model and
                    the meaning of the domain it operates in.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH I · § 03 — Ontology Reasoning Infrastructure                         */
/* ──────────────────────────────────────────────────────────────────────── */

function OntologyReasoningInfrastructure() {
  const concepts = [
    {
      kicker: "Concept · 01",
      title: "Typed entities, states, relations, constraints, evidence.",
      desc: "Raw signals become structure with type. Every node is a thing the domain already cares about — not an embedding.",
    },
    {
      kicker: "Concept · 02",
      title: "LLMs traverse structured ontology paths — not flat context.",
      desc: "The model walks the graph. It picks up the right neighbors, the relevant constraints, the evidence subgraph that supports the next step.",
    },
    {
      kicker: "Concept · 03",
      title:
        "Output is a reasoning path — inspectable, improvable, operational.",
      desc: "Not an answer. A trajectory through structure that can be reviewed, corrected, and folded back into the architecture.",
    },
  ];

  return (
    <section
      id="architecture"
      aria-labelledby="ontology-title"
      className="surface-soft"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="I"
            index="03"
            kicker="Ontology Reasoning Infrastructure"
            blurb={
              <>
                Where signal becomes structure, and structure becomes the
                surface a model can reason on.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="ontology-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-[var(--text)] text-balance"
              >
                AiNOS builds the infrastructure that lets AI{" "}
                <span className="italic text-[var(--violet)]">traverse</span>{" "}
                domain meaning,
                <br />
                not just retrieve context.
              </h2>
            </Reveal>

            <Reveal delay={140} className="mt-14">
              <figure className="overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
                  <p className="label">Plate 01 · Reasoning flow</p>
                  <p className="label hidden sm:block">
                    signal → ontology → traversal → action → architecture
                  </p>
                </div>
                <div className="px-3 py-6 sm:px-6 sm:py-8">
                  <OntologyFlowDiagram />
                </div>
              </figure>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
              {concepts.map((c, i) => (
                <Reveal
                  key={c.kicker}
                  delay={i * 140}
                  className="border-t border-[var(--border)] pt-7"
                >
                  <p className="label mb-3 text-[var(--violet)]">{c.kicker}</p>
                  <h3 className="font-display text-[clamp(1.2rem,1.8vw,1.45rem)] leading-[1.18] text-[var(--text)]">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-[var(--text-muted)]">
                    {c.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH II · § 04 — Proof Map  ★ peak visual                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function ProofMap() {
  const lanes = [
    {
      pillTone: "blue" as const,
      pillLabel: "Proof — Regulated Enterprise",
      title: "Vitality / Insurance Compliance",
      body: "Compliance-heavy reasoning, auditability, and fragmented enterprise context — proven against the texture of regulated insurance environments.",
      expansion: "Expansion → Insurance AX full packet",
    },
    {
      pillTone: "violet" as const,
      pillLabel: "Proof — Clinical Workflow",
      title: "SAIRO / MMG Mental Health Platform",
      body: "Longitudinal context, clinician-facing reasoning continuity, and prior-session continuity organized into a clinical reasoning path. Built with MMG and clinical partners.",
      expansion: "Expansion → Mental health platform ecosystem",
    },
    {
      pillTone: "graphite" as const,
      pillLabel: "Proof — Physical Operations",
      title: "Busan Smart Port / Fori",
      body: "Central intelligence for port-side operations, logistics, and physical infrastructure reasoning. Ongoing PoC with Fori and the Port of Busan.",
      expansion: "Expansion → Port central intelligence + physical AI bridge",
    },
  ];

  return (
    <section
      id="proof"
      aria-labelledby="proof-title"
      className="surface-porcelain"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-32 sm:py-44">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="II"
            index="04"
            kicker="Proof Map"
            blurb={
              <>
                Same reasoning philosophy. Three different domain ontologies.
                One core architecture that accumulates from each deployment.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="proof-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-[var(--text)] text-balance"
              >
                Proof across domains where{" "}
                <span className="italic">generic AI</span> breaks first.
              </h2>
              <p className="mt-6 max-w-[64ch] text-[clamp(0.98rem,1.15vw,1.1rem)] leading-[1.6] text-[var(--text)]">
                Same reasoning philosophy. Three different domain ontologies.
                One core architecture that learns from every deployment.
              </p>
            </Reveal>

            {/* ★ Peak visual */}
            <Reveal delay={160} className="mt-16">
              <figure className="overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
                  <p className="label">Plate 02 · Proof map</p>
                  <p className="label hidden sm:block">
                    shared engine · domain-specific ontologies
                  </p>
                </div>
                <div className="px-3 py-4 sm:px-6 sm:py-6">
                  <ProofMapDiagram />
                </div>
              </figure>
            </Reveal>

            {/* Three lane cards */}
            <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
              {lanes.map((lane, i) => (
                <Reveal
                  key={lane.title}
                  delay={i * 140}
                  className="flex flex-col border-t border-[var(--border)] pt-7"
                >
                  <span className={`pill pill-${lane.pillTone} self-start mb-5`}>
                    {lane.pillLabel}
                  </span>
                  <h3 className="font-display text-[clamp(1.25rem,1.9vw,1.6rem)] leading-[1.16] text-[var(--text)]">
                    {lane.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-[var(--text)]">
                    {lane.body}
                  </p>
                  <p className="mt-6 font-mono text-[11px] tracking-[0.10em] uppercase text-[var(--text-soft)]">
                    {lane.expansion}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH II · § 05 — Technical Moat                                            */
/* ──────────────────────────────────────────────────────────────────────── */

function TechnicalMoat() {
  const layers = [
    {
      id: "I",
      title: "Auto-Scaling Domain Ontology",
      body: (
        <>
          A proprietary engine that converts raw signals into{" "}
          <span className="term">typed entities</span>,{" "}
          <span className="term">states</span>,{" "}
          <span className="term">relations</span>, and{" "}
          <span className="term">constraints</span>, then evolves the graph as
          deployment data accumulates. Per-domain ontologies stay specific to
          each domain; the engine that builds them gets better with every
          environment it enters.
        </>
      ),
      note: "Domain-specific output. Architecture-level accumulation.",
    },
    {
      id: "II",
      title: "LLM × Ontology Traversal",
      body: (
        <>
          Most systems combining LLMs with structured knowledge use them
          shallowly — naïve retrieval, surface context injection. AiNOS has
          built an architecture where language models exploit a{" "}
          <span className="term-violet">continuously evolving ontology</span>{" "}
          to its full potential —{" "}
          <span className="term-violet">schema-aware</span>,{" "}
          <span className="term-violet">evidence-grounded</span>, and{" "}
          <span className="term-violet">path-inspectable</span>. Where raw
          model capability turns into structured reasoning.
        </>
      ),
      note: "The bridge between model capability and structured reasoning.",
    },
    {
      id: "III",
      title: "Self-Evolving Runtime",
      body: (
        <>
          Across every deployment, systems{" "}
          <span className="term">update themselves</span> in response to
          reasoning-path review and operational feedback. Maintenance burden
          does not scale linearly with the number of deployments — the
          structural precondition that makes parallel deployment sustainable,
          and the operational mechanism behind multi-domain proof.
        </>
      ),
      note: "Runtime that improves without linear engineering cost.",
    },
  ];

  return (
    <section
      id="moat"
      aria-labelledby="moat-title"
      className="surface-violet"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="II"
            index="05"
            kicker="Technical Moat"
            blurb={
              <>
                The engine that keeps producing better ontologies — not any one
                ontology in particular.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="moat-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-[var(--text)] text-balance"
              >
                The moat is not one ontology.
                <br />
                <span className="italic text-[var(--violet)]">
                  It is the architecture that keeps producing better ones.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={160} className="mt-14">
              <figure className="overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
                  <p className="label">Plate 03 · Technical moat</p>
                  <p className="label hidden sm:block">
                    proprietary · held as IP
                  </p>
                </div>
                <div className="px-3 py-4 sm:px-6 sm:py-6">
                  <ArchitectureDiagram />
                </div>
              </figure>
            </Reveal>

            <div className="mt-20 divide-y divide-[var(--border)]">
              {layers.map((layer, i) => (
                <Reveal
                  key={layer.id}
                  delay={120 + i * 120}
                  className="py-10 first:pt-0"
                >
                  <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                    <div className="col-span-12 md:col-span-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[2.5rem] italic leading-none text-[var(--blue)]">
                          {layer.id}
                        </span>
                        <span
                          className="h-px w-8 bg-[var(--blue)] opacity-70"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.012em] text-[var(--text)]">
                        {layer.title}
                      </h3>
                      <p className="mt-4 max-w-[62ch] text-[clamp(0.98rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--text)]">
                        {layer.body}
                      </p>
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.10em] text-[var(--text-muted)]">
                        {layer.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH II · § 06 — Expansion Paths                                          */
/* ──────────────────────────────────────────────────────────────────────── */

function ExpansionPaths() {
  const paths = [
    {
      kicker: "Path 01",
      category: "Clinical Workflow",
      title: "Mental Health Platform Ecosystem",
      stages: [
        { mark: "current leverage", body: "SAIRO clinical workflow + MMG partnership" },
        { mark: "repeatable system", body: "Mental health platform for clinical operators" },
        { mark: "expansion surface", body: "Clinical DaaS / IaaS infrastructure" },
        { mark: "partner ecosystem", body: "MMG + select clinical and consumer partners" },
      ],
    },
    {
      kicker: "Path 02",
      category: "Physical Operations",
      title: "Port Central Intelligence",
      stages: [
        { mark: "current leverage", body: "Busan Smart Port PoC + Fori" },
        { mark: "repeatable system", body: "Port-side logistics & operations management" },
        { mark: "expansion surface", body: "Cross-port deployment + physical AI bridge" },
        { mark: "partner ecosystem", body: "Fori + select port and infrastructure partners" },
      ],
    },
    {
      kicker: "Path 03",
      category: "Regulated Enterprise",
      title: "Insurance AX Full Packet",
      stages: [
        { mark: "current leverage", body: "Vitality compliance + insurance context" },
        { mark: "repeatable system", body: "Compliance · underwriting · operational reasoning" },
        { mark: "expansion surface", body: "Multi-carrier deployment of the AX packet" },
        { mark: "partner ecosystem", body: "Vitality + select insurance partners under disclosure" },
      ],
    },
  ];

  return (
    <section
      id="expansion"
      aria-labelledby="expansion-title"
      className="surface-white"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="II"
            index="06"
            kicker="Expansion Paths"
            blurb={
              <>
                Each proof surface is a foothold for a repeatable system, not a
                one-off engagement.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="expansion-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-[var(--text)] text-balance"
              >
                From proof surfaces
                <br />
                <span className="italic">
                  to repeatable business systems.
                </span>
              </h2>
            </Reveal>

            <div className="mt-16 space-y-12">
              {paths.map((path, i) => (
                <Reveal
                  key={path.title}
                  delay={i * 140}
                  className="border-t-2 border-[var(--text)] pt-8"
                >
                  {/* Path header — unified row: kicker + category + title */}
                  <div className="mb-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--blue)] whitespace-nowrap">
                      {path.kicker.toUpperCase()}
                      <span className="mx-3 text-[var(--text-soft)]">·</span>
                      <span className="text-[var(--text-muted)]">{path.category}</span>
                    </span>
                    <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.12] tracking-[-0.012em] text-[var(--text)]">
                      {path.title}
                    </h3>
                  </div>

                  {/* Journey: 4 stages + 3 arrow cells in a 7-track grid (desktop).
                      On mobile this collapses to a vertical stack with downward
                      tick connectors. */}
                  <div
                    className="hidden md:grid md:items-stretch md:gap-x-3"
                    style={{ gridTemplateColumns: '1fr 28px 1fr 28px 1fr 28px 1fr' }}
                  >
                    {path.stages.map((stage, j) => (
                      <Stage
                        key={stage.mark}
                        index={j}
                        mark={stage.mark}
                        body={stage.body}
                        terminal={j === path.stages.length - 1}
                        showArrow={j < path.stages.length - 1}
                      />
                    ))}
                  </div>

                  {/* Mobile stacked version */}
                  <ol className="grid gap-y-5 md:hidden">
                    {path.stages.map((stage, j) => (
                      <li key={stage.mark} className="relative pl-12">
                        <StageBadge index={j} terminal={j === path.stages.length - 1} mobile />
                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--blue)]">
                          {stage.mark}
                        </p>
                        <p className="mt-1.5 font-display text-[1.05rem] leading-[1.3] text-[var(--text)]">
                          {stage.body}
                        </p>
                        {j < path.stages.length - 1 ? (
                          <span
                            aria-hidden
                            className="absolute left-[18px] top-[44px] block h-7 w-px bg-[var(--blue)] opacity-50"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420} className="mt-16">
              <p className="max-w-[60ch] text-[14.5px] leading-[1.65] text-[var(--text-muted)]">
                Several relationships above are referenced as{" "}
                <span className="text-[var(--text)]">
                  select strategic partners
                </span>{" "}
                where public disclosure is not yet appropriate.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stage card — unified column layout used inside the desktop journey grid.
   The destination stage (terminal=true) is rendered in graphite to mark the
   end of the journey, breaking the otherwise blue-only rhythm. */
function Stage({
  index,
  mark,
  body,
  terminal,
  showArrow,
}: {
  index: number;
  mark: string;
  body: string;
  terminal: boolean;
  showArrow: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 pt-1">
        <StageBadge index={index} terminal={terminal} />
        <span
          className={`font-mono text-[10.5px] tracking-[0.18em] uppercase ${
            terminal ? "text-[var(--text)]" : "text-[var(--blue)]"
          }`}
        >
          {mark}
        </span>
        <p className="font-display text-[1.02rem] leading-[1.3] text-[var(--text)] text-pretty">
          {body}
        </p>
      </div>
      {showArrow ? (
        <div
          aria-hidden
          className="flex items-center justify-center pt-12 text-[var(--blue)]"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" className="opacity-80">
            <path
              d="M 1 7 L 19 7 M 13 1 L 19 7 L 13 13"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </>
  );
}

function StageBadge({
  index,
  terminal,
  mobile = false,
}: {
  index: number;
  terminal: boolean;
  mobile?: boolean;
}) {
  const positionClass = mobile ? "absolute left-0 top-0" : "";
  return (
    <span
      className={`${positionClass} inline-flex h-9 w-9 items-center justify-center rounded-full border ${
        terminal
          ? "border-[var(--text)] bg-[var(--text)] text-[var(--text-inverse)]"
          : "border-[var(--blue)] bg-[var(--surface)] text-[var(--blue)]"
      }`}
    >
      <span className="font-mono text-[11px] tracking-[0.06em]">
        0{index + 1}
      </span>
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH III · § 07 — Physical AI Bridge   (graphite contrast band)            */
/* ──────────────────────────────────────────────────────────────────────── */

function PhysicalAIBridge() {
  return (
    <section
      id="physical-ai"
      aria-labelledby="physical-ai-title"
      className="surface-deep relative overflow-hidden"
      style={{ color: "var(--text-inverse)" }}
    >
      {/* fine grid texture only on the dark band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(246,248,252,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,248,252,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40 relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 mb-10 lg:col-span-3 lg:mb-0">
            <div className="flex flex-col gap-2">
              <span
                className="chapter-mark"
                style={{ color: "var(--violet-soft)" }}
              >
                CH III
              </span>
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-[11px] tracking-[0.22em]"
                  style={{ color: "var(--violet-soft)" }}
                >
                  § 07
                </span>
                <span
                  className="font-mono text-[11px] tracking-[0.10em] uppercase"
                  style={{ color: "rgba(246,248,252,0.55)" }}
                >
                  Physical AI Bridge
                </span>
              </div>
            </div>
            <p
              className="mt-6 max-w-[32ch] text-[13px] leading-[1.6]"
              style={{ color: "rgba(246,248,252,0.55)" }}
            >
              The same reasoning philosophy, extended from language tokens to
              motion tokens.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <span className="pill pill-violet self-start mb-7 inline-flex">
                Phase 2 · Frontier Research Direction
              </span>

              <h2
                id="physical-ai-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-balance"
                style={{ color: "var(--text-inverse)" }}
              >
                The same reasoning philosophy
                <br />
                extends from language to{" "}
                <span
                  className="italic"
                  style={{ color: "var(--violet-soft)" }}
                >
                  motion.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <p
                className="max-w-[64ch] text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.6]"
                style={{ color: "rgba(246,248,252,0.78)" }}
              >
                Continuous human-motion signals are converted into structured
                motion representations — pose, temporal dynamics, action
                primitives, behavioral state — that a Motion Language Model
                can reason over to interpret physical behavior, behavioral
                state, or operational state.
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-14">
              <figure
                className="overflow-hidden border"
                style={{ borderColor: "rgba(246,248,252,0.14)" }}
              >
                <div
                  className="flex items-center justify-between border-b px-5 py-4 sm:px-6"
                  style={{ borderColor: "rgba(246,248,252,0.14)" }}
                >
                  <p
                    className="label"
                    style={{ color: "rgba(246,248,252,0.55)" }}
                  >
                    Plate 04 · Motion token stream
                  </p>
                  <p
                    className="label hidden sm:block"
                    style={{ color: "rgba(246,248,252,0.55)" }}
                  >
                    illustrative — research direction
                  </p>
                </div>
                <div className="px-3 py-6 sm:px-6 sm:py-8 overflow-x-auto">
                  <div className="min-w-[860px]">
                    <MotionTokenTimeline />
                  </div>
                </div>
              </figure>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
              {[
                {
                  k: "Motionization",
                  v: "Continuous human-motion signals become discrete or structured motion representations.",
                },
                {
                  k: "Motion Tokens",
                  v: "Pose, temporal dynamics, action primitives, behavioral state — a temporal vocabulary.",
                },
                {
                  k: "Motion Language Model",
                  v: "Motion sequences treated as a language-like representation a model can reason over.",
                },
              ].map((c, i) => (
                <Reveal
                  key={c.k}
                  delay={120 + i * 120}
                  className="border-t pt-6"
                  style={{ borderColor: "rgba(246,248,252,0.14)" } as React.CSSProperties}
                >
                  <p
                    className="label mb-3"
                    style={{ color: "var(--violet-soft)" }}
                  >
                    {c.k}
                  </p>
                  <p
                    className="text-[14.5px] leading-[1.65]"
                    style={{ color: "rgba(246,248,252,0.78)" }}
                  >
                    {c.v}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={520} className="mt-12">
              <p
                className="max-w-[60ch] text-[12.5px] leading-[1.7]"
                style={{ color: "rgba(246,248,252,0.55)" }}
              >
                Framed as a frontier research direction. AiNOS does not
                position this work as a clinical product, and does not perform
                medical diagnosis or treatment.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH III · § 08 — Research Foundation                                     */
/* ──────────────────────────────────────────────────────────────────────── */

function ResearchFoundation() {
  const partners = [
    {
      mark: "vector-institute-logo-horizontal.png",
      width: 2702,
      height: 992,
      maxH: 80,
      name: "Vector Institute",
      researchLabels: [
        "Schema induction",
        "ontology evolution",
        "LM × ontology coupling",
      ],
      blurb:
        "AI research and ecosystem connection grounding AiNOS in Toronto's frontier-AI network.",
      alt: "Vector Institute official logo",
    },
    {
      mark: "university-of-toronto-logo-stacked-black.png",
      width: 2048,
      height: 734,
      maxH: 96,
      name: "University of Toronto",
      researchLabels: [
        "Frontier-AI ecosystem",
        "graduate research collaboration",
        "motion-language research foundation",
      ],
      blurb:
        "Academic and research foundation across one of the world's strongest AI environments.",
      alt: "University of Toronto official logo",
    },
  ];

  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="surface-porcelain"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <SectionHead
            chapter="III"
            index="08"
            kicker="Research Foundation"
            blurb={
              <>
                Research-grade work needs research-grade scaffolding — and a
                real ecosystem.
              </>
            }
          />

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="research-title"
                className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.018em] text-[var(--text)] text-balance"
              >
                Built inside one of the world&apos;s
                <br />
                <span className="italic text-[var(--blue)]">
                  strongest AI ecosystems.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={140} className="mt-14">
              <div className="border-y border-[var(--border)]">
                <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
                  <p className="label">Research foundation</p>
                  <p className="label hidden sm:block">Official partner marks</p>
                </div>
                <div className="grid grid-cols-1 divide-y divide-[var(--border)] md:grid-cols-2 md:divide-x md:divide-y-0">
                  {partners.map((p) => (
                    <article
                      key={p.name}
                      className="flex flex-col gap-6 bg-[var(--surface)] px-6 py-10 sm:px-10 sm:py-12"
                    >
                      <div
                        className="flex min-h-[140px] items-center justify-center"
                      >
                        <Image
                          src={`/partners/${p.mark}`}
                          alt={p.alt}
                          width={p.width}
                          height={p.height}
                          sizes="(min-width: 768px) 360px, 80vw"
                          className="h-auto w-full max-w-[320px] object-contain"
                          style={{ maxHeight: `${p.maxH}px` }}
                        />
                      </div>
                      <div>
                        <p className="font-display text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.1] text-[var(--text)]">
                          {p.name}
                        </p>
                        <p className="mt-3 font-mono text-[11px] tracking-[0.10em] uppercase text-[var(--blue)]">
                          {p.researchLabels.join(" · ")}
                        </p>
                        <p className="mt-4 max-w-[40ch] text-[14.5px] leading-[1.65] text-[var(--text-muted)]">
                          {p.blurb}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300} className="mt-12 border-t border-[var(--border)] pt-10">
              <p className="max-w-[64ch] text-[clamp(0.98rem,1.1vw,1.05rem)] leading-[1.65] text-[var(--text)]">
                AiNOS is built with research foundations connected to the
                Vector Institute and the University of Toronto, grounding its
                ontology and motion-language research in one of the world&apos;s
                strongest AI ecosystems.
              </p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.10em] uppercase text-[var(--text-soft)]">
                Additional partners under disclosure agreements across
                regulated, clinical, and physical-operations domains.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  CH IV · § 09 — Closing                                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function Closing() {
  return (
    <section
      id="contact"
      aria-labelledby="closing-title"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg) 65%, var(--surface-soft) 100%)",
      }}
    >
      <div className="container-edge mx-auto max-w-[1480px] py-32 sm:py-48">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-col gap-2">
              <span className="chapter-mark">CH IV</span>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--blue)]">
                  § 09
                </span>
                <span className="label">Partner</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <p className="label mb-7 inline-flex items-center gap-4">
                <AiNOSLogo
                  tone="dark"
                  className="w-[136px] translate-y-[1px]"
                />
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-[var(--text-muted)] opacity-60"
                />
                <span>Mission</span>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2
                id="closing-title"
                className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--text)] text-balance"
              >
                Build domain AI infrastructure
                <br />
                with{" "}
                <span className="italic text-[var(--blue)]">AiNOS.</span>
              </h2>
            </Reveal>

            <Reveal delay={260} className="mt-12 max-w-[56ch]">
              <p className="text-[clamp(1.05rem,1.25vw,1.2rem)] leading-[1.6] text-[var(--text)]">
                We work with partners building regulated, clinical, and
                physical AI systems — environments where domain context
                determines whether AI can be trusted.
              </p>
            </Reveal>

            <Reveal delay={400} className="mt-14">
              <a
                href="mailto:hello@ainos.ai"
                className="group relative inline-flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--blue)]/40 pt-5 pr-2 transition-colors duration-300 hover:border-[var(--blue)]"
              >
                <span className="font-display text-[clamp(1.4rem,2.4vw,2rem)] italic text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--blue)]">
                  Partner with us
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]">
                  hello@ainos.ai
                </span>
                <span
                  aria-hidden
                  className="inline-block translate-y-[-2px] text-[var(--blue)] transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Footer                                                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="surface-porcelain border-t border-[var(--border)]">
      <div className="container-edge mx-auto max-w-[1480px] py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <AiNOSLogo tone="dark" className="w-[136px]" />
            <span className="font-mono text-[11px] tracking-[0.10em] text-[var(--text-muted)]">
              {new Date().getFullYear()}
            </span>
          </div>

          <nav aria-label="Footer" className="flex items-center gap-8">
            <a
              href="mailto:hello@ainos.ai"
              className="font-mono text-[11px] uppercase tracking-[0.10em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--blue)]"
            >
              Contact
            </a>
            <a
              href="mailto:careers@ainos.ai"
              className="font-mono text-[11px] uppercase tracking-[0.10em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--blue)]"
            >
              Careers
            </a>
            <a
              href="#main"
              className="font-mono text-[11px] uppercase tracking-[0.10em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--blue)]"
            >
              Top ↑
            </a>
          </nav>
        </div>
        <p className="mt-10 max-w-[72ch] text-[11px] leading-[1.7] text-[var(--text-soft)]">
          AiNOS, the adaptive ontology engine, the LLM × ontology traversal
          architecture, and related research components are held as
          proprietary intellectual property. Partner relationships referenced
          reflect active engagements, ongoing PoCs, or research collaborations
          under disclosure as appropriate.
        </p>
      </div>
    </footer>
  );
}
