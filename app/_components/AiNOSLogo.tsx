type AiNOSLogoProps = {
  tone?: "light" | "muted";
  className?: string;
  title?: string;
};

const toneVars = {
  light: {
    primary: "var(--bone-50)",
    secondary: "rgba(243,236,224,0.34)",
    accent: "var(--accent)",
  },
  muted: {
    primary: "var(--bone-400)",
    secondary: "rgba(142,133,115,0.24)",
    accent: "var(--accent-soft)",
  },
} as const;

export default function AiNOSLogo({
  tone = "light",
  className = "",
  title = "AiNOS",
}: AiNOSLogoProps) {
  const palette = toneVars[tone];

  return (
    <span
      className={`ainos-logo inline-flex ${className}`}
      style={
        {
          "--logo-primary": palette.primary,
          "--logo-secondary": palette.secondary,
          "--logo-accent": palette.accent,
        } as React.CSSProperties
      }
      aria-label={title}
    >
      <svg
        viewBox="0 0 190 24"
        role="img"
        aria-label={title}
        className="h-auto w-full"
      >
        <title>{title}</title>
        <text
          x="0"
          y="15.5"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="16"
          fontWeight="500"
          letterSpacing="3.2"
          fill="var(--logo-primary)"
        >
          AiNOS
        </text>
        <path
          d="M136 9 H188"
          stroke="var(--logo-secondary)"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <path
          d="M154 9 H176"
          stroke="var(--logo-accent)"
          strokeWidth="1.2"
          strokeLinecap="square"
          className="ainos-logo-accent"
        />
      </svg>
    </span>
  );
}
