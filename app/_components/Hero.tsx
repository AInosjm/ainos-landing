import Image from "next/image";
import AiNOSLogo from "./AiNOSLogo";
import SchematicBackdrop from "./SchematicBackdrop";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Atmospheric hero image + blueprint overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/landing/hero-ambient-web.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[82%_50%] opacity-80 sm:object-[68%_50%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,10,9,0.9) 0%, rgba(11,10,9,0.72) 38%, rgba(11,10,9,0.36) 68%, rgba(11,10,9,0.5) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-70">
          <SchematicBackdrop />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 25% 40%, rgba(11,10,9,0.88), rgba(11,10,9,0.08) 72%, rgba(11,10,9,0.22) 100%)",
          }}
        />
      </div>

      <div className="container-edge mx-auto flex min-h-[100svh] max-w-[1480px] flex-col pt-10">
        {/* Nav strip */}
        <header className="flex items-center justify-between pb-16 sm:pb-20">
          <a
            href="/"
            aria-label="AiNOS — home"
            className="group block w-[136px] sm:w-[156px]"
          >
            <AiNOSLogo tone="light" />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 lg:flex"
          >
            {[
              { label: "Thesis", href: "#thesis" },
              { label: "Core Technology", href: "#architecture" },
              { label: "Deployments", href: "#deployments" },
              { label: "Foundation", href: "#foundation" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] tracking-[0.14em] text-bone-400 uppercase transition-colors duration-200 hover:text-bone-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="font-mono text-[12px] tracking-[0.14em] uppercase text-bone-50 relative inline-flex items-center gap-2 group"
          >
            <span className="border-b border-bone-50/30 pb-0.5 transition-colors duration-300 group-hover:border-accent">
              Get in touch
            </span>
            <span
              aria-hidden
              className="inline-block translate-y-[-1px] text-accent transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </header>

        {/* Main hero body */}
        <div className="flex flex-1 items-center py-6 sm:py-10">
          <div className="grid w-full grid-cols-12 gap-x-6">
            {/* Editorial margin note */}
            <aside
              aria-hidden="true"
              className="col-span-12 mb-10 flex items-start gap-3 lg:col-span-3 lg:mb-0"
            >
              <span className="label mt-1">§ 00 / Prologue</span>
            </aside>

            <div className="col-span-12 lg:col-span-9">
              <p
                className="hero-line label mb-8 text-bone-400"
                style={{ ["--hero-delay" as string]: "0ms" }}
              >
                <span className="inline-flex items-center gap-4">
                  <AiNOSLogo
                    tone="muted"
                    className="w-[132px] translate-y-[1px]"
                  />
                  <span className="inline-block h-px w-8 bg-bone-400" />
                  <span>A Decision-Layer Company</span>
                </span>
              </p>

              <h1
                id="hero-title"
                className="font-display text-balance text-[clamp(2.6rem,7.6vw,7.25rem)] leading-[0.94] tracking-[-0.025em] text-bone-50"
              >
                <span
                  className="hero-line block"
                  style={{ ["--hero-delay" as string]: "120ms" }}
                >
                  The Decision
                </span>
                <span
                  className="hero-line block"
                  style={{ ["--hero-delay" as string]: "260ms" }}
                >
                  Operating{" "}
                  <span className="italic text-accent">System</span>
                  <span className="text-accent">.</span>
                </span>
              </h1>

              <p
                className="hero-line mt-10 max-w-[42ch] text-pretty text-[clamp(1.02rem,1.35vw,1.25rem)] leading-[1.55] text-bone-200"
                style={{ ["--hero-delay" as string]: "460ms" }}
              >
                A self-evolving semantic layer that understands context,
                determines what should happen next, and scales that capability
                across{" "}
                <span className="text-bone-50">infrastructure</span>,{" "}
                <span className="text-bone-50">enterprises</span>, and{" "}
                <span className="text-bone-50">everyday life</span>.
              </p>

              {/* Meta row — index marks, very quiet */}
              <div
                className="hero-line mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-hairline pt-6 sm:mt-24"
                style={{ ["--hero-delay" as string]: "640ms" }}
              >
                <MetaMark
                  index="I"
                  label="Ontology"
                  note="Adaptive, auto-scaling"
                />
                <MetaMark
                  index="II"
                  label="Utilization"
                  note="LM × schema coupling"
                />
                <MetaMark
                  index="III"
                  label="Runtime"
                  note="Self-evolving"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hero rail — status line + scroll cue */}
        <div className="flex items-end justify-between pb-10 pt-20 sm:pb-14">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden
              style={{ animation: "schematic-pulse 2.6s ease-in-out infinite" }}
            />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-bone-400">
              Live — Busan Port PoC · Vitality partnership discussion · Vector Institute
            </span>
          </div>

          <a
            href="#thesis"
            className="group flex flex-col items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-bone-400 hover:text-bone-50"
            aria-label="Scroll to thesis section"
          >
            <span className="hidden sm:inline">Scroll</span>
            <span
              aria-hidden
              className="relative block h-10 w-px bg-bone-400/40 overflow-hidden"
            >
              <span
                className="absolute left-0 top-0 block h-4 w-px bg-accent"
                style={{
                  animation: "scroll-hint 2.4s ease-in-out infinite",
                }}
              />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(180%); }
          100% { transform: translateY(180%); }
        }
      `}</style>
    </section>
  );
}

function MetaMark({
  index,
  label,
  note,
}: {
  index: string;
  label: string;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] tracking-[0.22em] text-accent">
        {index}
      </span>
      <span className="font-display text-[1.05rem] leading-none text-bone-50">
        {label}
      </span>
      <span className="font-mono text-[11px] tracking-[0.02em] text-bone-400">
        {note}
      </span>
    </div>
  );
}
