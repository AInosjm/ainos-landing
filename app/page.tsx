import Image from "next/image";
import Hero from "./_components/Hero";
import Reveal from "./_components/Reveal";
import ArchitectureDiagram from "./_components/ArchitectureDiagram";
import AsymmetryDiagram from "./_components/AsymmetryDiagram";
import AiNOSLogo from "./_components/AiNOSLogo";

export default function Page() {
  return (
    <main id="main" className="relative">
      {/* Subtle atmospheric grain — rendered above everything, barely perceptible */}
      <div className="grain" aria-hidden />

      <Hero />

      <SectionDivider />
      <Thesis />

      <SectionDivider />
      <Architecture />

      <SectionDivider />
      <Deployments />

      <SectionDivider />
      <Contrarian />

      <SectionDivider />
      <Foundation />

      <SectionDivider />
      <Closing />

      <Footer />
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Shared                                                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="container-edge mx-auto max-w-[1480px]">
      <div className="rule" />
    </div>
  );
}

function AmbientSectionImage({
  src,
  alt,
  objectPosition = "center",
  opacityClass = "opacity-20",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  opacityClass?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${opacityClass}`}
        style={{ objectPosition }}
      />
    </div>
  );
}

function SectionHead({
  index,
  kicker,
  children,
}: {
  index: string;
  kicker: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="col-span-12 mb-10 lg:col-span-3 lg:mb-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
          §{" "}
          <span aria-hidden>{index}</span>
        </span>
        <span className="label">{kicker}</span>
      </div>
      {children ? (
        <div className="mt-6 max-w-[32ch] text-[13px] leading-[1.6] text-bone-400">
          {children}
        </div>
      ) : null}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  § 01 — Thesis                                                           */
/* ──────────────────────────────────────────────────────────────────────── */

function Thesis() {
  return (
    <section
      id="thesis"
      aria-labelledby="thesis-title"
      className="relative isolate overflow-hidden container-edge mx-auto max-w-[1480px] py-28 sm:py-40"
    >
      <AmbientSectionImage
        src="/landing/thesis-ambient-web.png"
        alt=""
        objectPosition="58% 44%"
        opacityClass="opacity-[0.34]"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,10,9,0.68) 0%, rgba(11,10,9,0.56) 22%, rgba(11,10,9,0.38) 52%, rgba(11,10,9,0.66) 100%)",
        }}
      />
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <SectionHead index="01" kicker="Thesis">
          The layer most AI systems stop one step short of.
        </SectionHead>

        <div className="col-span-12 lg:col-span-9">
          <Reveal>
            <h2
              id="thesis-title"
              className="font-display text-[clamp(2rem,4.8vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-bone-50 text-balance"
            >
              Most AI systems generate outputs.
              <br />
              <span className="text-bone-400 italic">
                Very few make decisions.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-y-8 border-t border-hairline pt-10 md:grid-cols-12 md:gap-x-10">
            <Reveal delay={120} className="md:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.65] text-bone-100">
                Real decisions aren’t one-shot prompts. They require
                understanding{" "}
                <span className="term">entities</span>,{" "}
                <span className="term">states</span>,{" "}
                <span className="term">relationships</span>,{" "}
                <span className="term">goals</span>,{" "}
                <span className="term">constraints</span>, and change over
                time — continuously, in real-world context.
              </p>
            </Reveal>
            <Reveal delay={260} className="md:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.65] text-bone-100">
                Today’s AI is mostly model-centric or workflow-centric. Very
                few systems are designed as a{" "}
                <span className="text-bone-50">reusable operating layer</span>{" "}
                for decision-making itself. AiNOS exists to build that missing
                layer.
              </p>
            </Reveal>
          </div>

          {/* Contrast pair — quiet editorial block */}
          <div className="mt-20 grid grid-cols-1 border-t border-hairline pt-10 md:grid-cols-2">
            <Reveal delay={80} className="pr-6 md:border-r md:border-hairline">
              <p className="label mb-3">What exists today</p>
              <ul className="space-y-3 text-[15px] leading-[1.6] text-bone-400">
                <li>— Generates content per prompt</li>
                <li>— Automates single tasks</li>
                <li>— Orchestrates pre-defined workflows</li>
                <li>— Stops at output, not decision</li>
              </ul>
            </Reveal>
            <Reveal delay={220} className="mt-10 md:mt-0 md:pl-10">
              <p className="label mb-3 text-accent">What a Decision OS does</p>
              <ul className="space-y-3 text-[15px] leading-[1.6] text-bone-100">
                <li>— Understands world as evolving structure</li>
                <li>— Translates signals into meaning</li>
                <li>— Determines the next appropriate action</li>
                <li>— Improves with every interaction</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  § 02 — Architecture                                                     */
/* ──────────────────────────────────────────────────────────────────────── */

function Architecture() {
  const layers = [
    {
      id: "I",
      title: "Adaptive Ontology Engine",
      body: (
        <>
          A proprietary engine that{" "}
          <span className="term">auto-bootstraps</span> domain ontologies from
          raw data and continuously{" "}
          <span className="term">evolves</span> them as the system operates.
          Node types and edge types are introduced, refined, and retired as
          the environment shifts. Unlike hand-designed schemas that calcify
          on day one, the ontology is a living artifact — and the engine that
          builds it is the same across every vertical.
        </>
      ),
      note: "Domain-agnostic. Accumulates deployment sophistication with every environment it enters.",
    },
    {
      id: "II",
      title: "Language-Model · Ontology Utilization",
      body: (
        <>
          Most systems combining LLMs with structured knowledge use it
          shallowly — naïve triple retrieval, surface context injection.
          AiNOS has built a proprietary architecture that lets language
          models exploit a{" "}
          <span className="term">continuously evolving schema</span> to its
          full potential. This is where raw model capability becomes
          structured decision-making — and where a large share of the
          Decision OS’s practical quality lives.
        </>
      ),
      note: "The bridge between model capability and genuinely structured reasoning.",
    },
    {
      id: "III",
      title: "Self-Evolving Production Infrastructure",
      body: (
        <>
          Across every deployment, systems{" "}
          <span className="term">update themselves</span> in response to
          feedback and user-experience signals. Maintenance burden does not
          scale linearly with the number of verticals — the structural
          precondition that makes parallel deployment sustainable, and the
          operational mechanism behind the multi-vertical strategy.
        </>
      ),
      note: "Runtime that improves without linear engineering cost.",
    },
  ];

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="relative bg-ink-800"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHead index="02" kicker="Core Technology">
            Three stacked moats, held proprietary, operating as one system.
          </SectionHead>

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="architecture-title"
                className="font-display text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.04] tracking-[-0.02em] text-bone-50 text-balance"
              >
                One scalable base.
                <br />
                <span className="italic text-accent">Built to adapt.</span>
              </h2>
            </Reveal>

            {/* Diagram */}
            <Reveal delay={160} className="mt-20 rounded-none border border-hairline bg-ink-900/80 p-6 sm:p-10">
              <div className="flex items-center justify-between">
                <p className="label">Fig. 01 · Core technology stack</p>
                <p className="label hidden sm:block">Proprietary · held as IP</p>
              </div>
              <div className="mt-8">
                <ArchitectureDiagram />
              </div>
            </Reveal>

            {/* Layer descriptions — editorial numbered entries */}
            <div className="mt-24 space-y-0 divide-y divide-hairline">
              {layers.map((layer, i) => (
                <Reveal key={layer.id} delay={100 + i * 120} className="group py-10 first:pt-0">
                  <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                    <div className="col-span-12 md:col-span-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[2.25rem] italic leading-none text-accent">
                          {layer.id}
                        </span>
                        <span className="h-px w-8 bg-accent/70" aria-hidden />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.08] tracking-[-0.015em] text-bone-50">
                        {layer.title}
                      </h3>
                      <p className="mt-4 max-w-[62ch] text-[clamp(0.98rem,1.1vw,1.08rem)] leading-[1.65] text-bone-100">
                        {layer.body}
                      </p>
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400">
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
/*  § 03 — Deployments                                                      */
/* ──────────────────────────────────────────────────────────────────────── */

function Deployments() {
  const surfaces = [
    {
      index: "A",
      category: "AI-Native Infrastructure",
      title: "The Decision OS, instantiated in physical environments.",
      proof: [
        {
          name: "SmartPort · Busan",
          body: "5G-enabled port infrastructure proof of concept at Busan Port, in partnership with Fori Automation and a 5G network company.",
          role: "Terminal-level logistics as continuous decision surface.",
        },
        {
          name: "Shipyard safety & ops",
          body: "Vision-based monitoring, dynamic schedule orchestration, and worker-condition management inside active shipyard environments.",
          role: "Perception bound to operational judgment in safety-critical sites.",
        },
      ],
    },
    {
      index: "B",
      category: "AI Transformation",
      title: "High-stakes institutional decision environments.",
      proof: [
        {
          name: "Vitality · South Africa",
          body: "Active partnership discussions in insurance transformation, led by AiNOS’s CEO — previously Chief Strategy Officer at Prudential.",
          role: "The Decision OS as structured reasoning over fragmented enterprise context.",
        },
        {
          name: "Finance expansion",
          body: "Preparing deployments into hedge funds, private equity, and investment banking — research synthesis, opportunity filtering, decision pathways.",
          role: "Reusable decision primitives across repeated enterprise environments.",
        },
      ],
    },
    {
      index: "C",
      category: "Consumer Platforms",
      title: "Behavior-rich, emotionally resonant surfaces.",
      proof: [
        {
          name: "Character AI across software and retail",
          body: "AI-native character chatting experience, expanding from software into ~120 JC Penney mall locations in the United States.",
          role: "Continuous character, media, and physical-space interaction as one experiential system.",
        },
        {
          name: "Health · partnership with MMG",
          body: "Platform that interprets user condition and recommends the next action — in partnership with MMG.",
          role: "Semantic understanding of state → next-best action, at life-decision scale.",
        },
      ],
    },
  ];

  return (
    <section
      id="deployments"
      aria-labelledby="deployments-title"
      className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40"
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <SectionHead index="03" kicker="Deployments">
          Not three businesses. One core, instantiated three ways.
        </SectionHead>

        <div className="col-span-12 lg:col-span-9">
          <Reveal>
            <h2
              id="deployments-title"
              className="font-display text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.04] tracking-[-0.02em] text-bone-50 text-balance"
            >
              Same architecture.
              <br />
              <span className="italic text-accent">Three surfaces.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-16">
            <figure className="overflow-hidden border border-hairline bg-ink-900/80">
              <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
                <p className="label">Plate 01 · Deployment surfaces</p>
                <p className="label hidden sm:block">One core, three environments</p>
              </div>
              <Image
                src="/landing/deployments-triptych-v2-web.png"
                alt="Editorial triptych showing AiNOS across smart-port infrastructure, enterprise decision environments, and everyday-life interfaces."
                width={1600}
                height={900}
                sizes="(min-width: 1280px) 980px, (min-width: 768px) 80vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>

          <div className="mt-20 space-y-20">
            {surfaces.map((s, i) => (
              <Reveal key={s.index} delay={i * 140} className="relative">
                <header className="flex items-baseline gap-5 border-b border-hairline pb-6">
                  <span className="font-display text-[2.5rem] italic leading-none text-accent">
                    {s.index}
                  </span>
                  <div>
                    <p className="label">{s.category}</p>
                    <h3 className="mt-2 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.015em] text-bone-50">
                      {s.title}
                    </h3>
                  </div>
                </header>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {s.proof.map((p, j) => (
                    <article
                      key={j}
                      className="group relative flex flex-col border-t border-hairline pt-8"
                    >
                      <p className="label mb-4 text-bone-400">
                        Proof · 0{j + 1}
                      </p>
                      <h4 className="font-display text-[1.45rem] leading-[1.15] text-bone-50">
                        {p.name}
                      </h4>
                      <p className="mt-4 text-[15px] leading-[1.65] text-bone-100">
                        {p.body}
                      </p>
                      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400">
                        → {p.role}
                      </p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  § 04 — Contrarian Argument                                              */
/* ──────────────────────────────────────────────────────────────────────── */

function Contrarian() {
  const conditions = [
    {
      title: "Shared architectural core",
      body: "Every deployment reuses the ontology engine, the utilization architecture, and the self-evolving runtime — not a fresh build.",
    },
    {
      title: "Dedicated vertical ownership",
      body: "Each deployment has an accountable owner who dreams about that specific problem. Founder attention is not the bottleneck on any single vertical.",
    },
    {
      title: "Self-evolving infrastructure",
      body: "Maintenance cost of running many deployments in parallel is structurally minimal — systems update themselves from feedback, not from added headcount.",
    },
  ];

  return (
    <section
      id="contrarian"
      aria-labelledby="contrarian-title"
      className="relative overflow-hidden bg-ink-800"
    >
      <div className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHead index="04" kicker="Counter-position">
            Why disciplined breadth, not focus, is the rational response to
            the AI-native era.
          </SectionHead>

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <h2
                id="contrarian-title"
                className="font-display text-[clamp(2.1rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-bone-50 text-balance"
              >
                Conventional wisdom says{" "}
                <span className="italic text-bone-400">focus</span>.
                <br />
                <span className="text-bone-50">We disagree.</span>
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-10 max-w-[58ch]">
              <p className="text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.65] text-bone-100">
                Focus was the right answer when{" "}
                <span className="text-bone-50">construction</span> was the
                bottleneck. In the AI-native era, two timelines have
                decoupled: build time has compressed 10–100×, while
                enterprise sell-and-deployment cycles have not compressed at
                all. Deploying into a single vertical leaves build capacity
                idle while sell cycles mature.
              </p>
            </Reveal>

            {/* The asymmetry visual */}
            <Reveal delay={220} className="mt-16 border border-hairline bg-ink-900/60 p-6 sm:p-10">
              <div className="flex items-baseline justify-between border-b border-hairline pb-5">
                <p className="label">Fig. 02 · Build vs. sell asymmetry</p>
                <p className="label hidden sm:block">AI-native era</p>
              </div>
              <div className="mt-8">
                <AsymmetryDiagram />
              </div>
              <p className="mt-8 max-w-[62ch] text-[14px] leading-[1.6] text-bone-400">
                Running multiple verticals in parallel absorbs surplus build
                capacity into independent sell cycles. Breadth stops being a
                dilution risk and becomes a structural advantage — provided
                three enabling conditions are already in place.
              </p>
            </Reveal>

            {/* Enabling conditions */}
            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
              {conditions.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 120}
                  className="relative border-t border-accent/40 pt-6"
                >
                  <p className="label mb-4 text-accent">
                    Enabling condition · 0{i + 1}
                  </p>
                  <h3 className="font-display text-[1.4rem] leading-[1.15] text-bone-50">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-bone-400">
                    {c.body}
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
/*  § 05 — Foundation                                                       */
/* ──────────────────────────────────────────────────────────────────────── */

function Foundation() {
  return (
    <section
      id="foundation"
      aria-labelledby="foundation-title"
      className="container-edge mx-auto max-w-[1480px] py-28 sm:py-40"
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <SectionHead index="05" kicker="Foundation">
          Research-grade problems deserve research-grade scaffolding.
        </SectionHead>

        <div className="col-span-12 lg:col-span-9">
          <Reveal>
            <h2
              id="foundation-title"
              className="font-display text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.04] tracking-[-0.02em] text-bone-50 text-balance"
            >
              Built inside one of the world&apos;s
              <br />
              <span className="italic text-accent">strongest AI ecosystems.</span>
            </h2>
          </Reveal>

          <Reveal delay={40} className="mt-16">
            <div className="border-y border-hairline">
              <div className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-4 sm:px-6">
                <p className="label">Research partners</p>
                <p className="label hidden sm:block">Official partner marks</p>
              </div>
              <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2">
                <article className="bg-ink-900 px-5 py-6 sm:px-6">
                  <p className="label mb-4 text-accent">Partner · 01</p>
                  <div className="flex min-h-[200px] items-center justify-center border border-hairline bg-bone-50/96 px-6 py-8">
                    <Image
                      src="/partners/vector-institute-logo-horizontal.png"
                      alt="Vector Institute official logo"
                      width={2702}
                      height={992}
                      sizes="(min-width: 768px) 360px, 80vw"
                      className="h-auto max-h-[72px] w-full object-contain"
                    />
                  </div>
                  <p className="mt-5 font-display text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.08] text-bone-50">
                    Vector Institute
                  </p>
                  <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.65] text-bone-400">
                    AI research and ecosystem partner connecting AiNOS to
                    Toronto&apos;s broader frontier-AI network.
                  </p>
                </article>
                <article className="bg-ink-900 px-5 py-6 sm:px-6">
                  <p className="label mb-4 text-accent">Partner · 02</p>
                  <div className="flex min-h-[200px] items-center justify-center border border-hairline bg-bone-50/96 px-6 py-8">
                    <Image
                      src="/partners/university-of-toronto-logo-stacked-black.png"
                      alt="University of Toronto official logo"
                      width={2048}
                      height={734}
                      sizes="(min-width: 768px) 360px, 80vw"
                      className="h-auto max-h-[86px] w-full object-contain"
                    />
                  </div>
                  <p className="mt-5 font-display text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.08] text-bone-50">
                    University of Toronto
                  </p>
                  <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.65] text-bone-400">
                    Academic and research foundation anchoring the work inside
                    one of the world&apos;s strongest AI environments.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>

          {/* Research */}
          <Reveal delay={120} className="mt-16 border-t border-hairline pt-10">
            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <p className="label">Research</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-display text-[clamp(1.3rem,2.2vw,1.85rem)] leading-[1.2] text-bone-50">
                  Partnership with the{" "}
                  <span className="italic">Vector Institute</span> and the
                  University of Toronto.
                </p>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.65] text-bone-400">
                  Schema induction, continual ontology evolution, and
                  language-model × schema coupling are tackled inside one of
                  the leading global centers of AI research — with access to
                  top-tier researchers, infrastructure, and the broader
                  Toronto AI ecosystem.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Leadership */}
          <Reveal delay={220} className="mt-10 border-t border-hairline pt-10">
            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <p className="label">Leadership</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-display text-[clamp(1.3rem,2.2vw,1.85rem)] leading-[1.2] text-bone-50">
                  Enterprise-grade operating depth in the domains being
                  entered.
                </p>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.65] text-bone-400">
                  AiNOS&apos;s CEO previously served as{" "}
                  <span className="text-bone-100">
                    Chief Strategy Officer at Prudential
                  </span>{" "}
                  — one of the largest insurance companies in the world.
                  Institutional experience, sector-scale strategic judgment,
                  and enterprise-grade relationships applied directly to the
                  AX effort.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Partners */}
          <Reveal delay={320} className="mt-10 border-t border-hairline pt-10">
            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <p className="label">Partners in deployment</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="divide-y divide-hairline">
                  {[
                    { name: "Fori Automation", role: "SmartPort infrastructure partner" },
                    {
                      name: "Ericsson",
                      role: "SmartPort · 5G architecture",
                      blurred: true,
                      blurAriaLabel: "Confidential telecom deployment partner",
                      roleAriaLabel: "SmartPort 5G architecture",
                    },
                    { name: "Vitality", role: "Insurance AX partnership (South Africa)" },
                    {
                      name: "Nintendo IP partnerships",
                      role: "Entertainment / character AI",
                      blurred: true,
                      blurAriaLabel: "Confidential entertainment IP partner",
                      roleAriaLabel: "Entertainment character AI",
                    },
                    {
                      name: "JC Penney",
                      role: "100+ shopping malls · potential entertainment partnership",
                      blurred: true,
                      blurAriaLabel: "Confidential retail deployment partner",
                      roleAriaLabel: "100 plus shopping malls potential entertainment partnership",
                    },
                    { name: "MMG", role: "Health platform distribution" },
                    {
                      name: "HYC (한양디지털헬스케어센터)",
                      role: "Movement-code behavior AI · digital healthcare collaboration",
                    },
                  ].map((p) => (
                    <li
                      key={p.name}
                      className="group flex items-baseline justify-between gap-6 py-4"
                    >
                      <span
                        className={[
                          "font-display text-[1.1rem] text-bone-50 transition-colors duration-200 group-hover:text-accent",
                          p.blurred ? "blur-sm select-none opacity-80" : "",
                        ].join(" ")}
                        aria-label={p.blurred ? p.blurAriaLabel : undefined}
                      >
                        {p.name}
                      </span>
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400"
                        aria-label={p.blurred ? p.roleAriaLabel : undefined}
                      >
                        {p.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  § 06 — Closing                                                          */
/* ──────────────────────────────────────────────────────────────────────── */

function Closing() {
  return (
    <section
      id="contact"
      aria-labelledby="closing-title"
      className="relative overflow-hidden bg-ink-900"
    >
      <AmbientSectionImage
        src="/landing/closing-ambient-web.png"
        alt=""
        objectPosition="72% 50%"
        opacityClass="opacity-[0.78]"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,10,9,0.6) 0%, rgba(11,10,9,0.42) 34%, rgba(11,10,9,0.18) 70%, rgba(11,10,9,0.32) 100%)",
        }}
        aria-hidden
      />
      {/* Quiet blueprint corner motif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <pattern id="close-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bone-400)" strokeWidth="0.15" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#close-grid)" />
        </svg>
      </div>

      <div className="container-edge mx-auto max-w-[1480px] py-32 sm:py-48">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
                § 06
              </span>
              <span className="label">Mission</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal>
              <p className="label mb-6 text-bone-400">
                <span className="inline-flex items-center gap-4">
                  <AiNOSLogo
                    tone="muted"
                    className="w-[136px] translate-y-[1px]"
                  />
                  <span className="inline-block h-px w-8 bg-bone-400" />
                </span>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2
                id="closing-title"
                className="font-display text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.025em] text-bone-50 text-balance"
              >
                Make better decisions
                <br />
                <span className="italic text-accent">inevitable.</span>
              </h2>
            </Reveal>

            <Reveal delay={260} className="mt-14 max-w-[50ch]">
              <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.6] text-bone-200">
                The next important software layer will not merely generate
                outputs. It will determine what happens next. If you are an
                institution, investor, or engineer who wants to help build
                that layer — get in touch.
              </p>
            </Reveal>

            <Reveal delay={360} className="mt-16">
              <a
                href="mailto:hello@ainos.ai"
                className="group relative inline-flex items-center gap-5 border-t border-accent/40 pt-5 pr-2"
              >
                <span className="font-display text-[clamp(1.3rem,2.2vw,1.9rem)] italic text-bone-50 transition-colors duration-300 group-hover:text-accent">
                  Partner with us
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  hello@ainos.ai
                </span>
                <span
                  aria-hidden
                  className="inline-block translate-y-[-2px] text-accent transition-transform duration-300 group-hover:translate-x-1.5"
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
    <footer className="border-t border-hairline">
      <div className="container-edge mx-auto max-w-[1480px] py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <AiNOSLogo tone="muted" className="w-[136px]" />
            <span className="font-mono text-[11px] tracking-[0.22em] text-bone-400">
              {new Date().getFullYear()}
            </span>
          </div>

          <nav aria-label="Footer" className="flex items-center gap-8">
            <a
              href="mailto:hello@ainos.ai"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 transition-colors duration-200 hover:text-bone-50"
            >
              Contact
            </a>
            <a
              href="mailto:careers@ainos.ai"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 transition-colors duration-200 hover:text-bone-50"
            >
              Careers
            </a>
            <a
              href="#main"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 transition-colors duration-200 hover:text-bone-50"
            >
              Top ↑
            </a>
          </nav>
        </div>
        <p className="mt-10 max-w-[60ch] text-[11px] leading-[1.6] text-bone-700">
          AiNOS, the adaptive ontology engine, and related architectural
          components are held as proprietary intellectual property. All
          deployment partnerships referenced above reflect active engagements
          or proofs of concept at the time of writing.
        </p>
      </div>
    </footer>
  );
}
