import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ainos.ai"),
  title: {
    default: "AiNOS — Ontology-Driven AI Infrastructure",
    template: "%s · AiNOS",
  },
  description:
    "AiNOS builds ontology-driven AI infrastructure that turns domain signals into semantic structures so language models can reason with context, constraints, and evidence — across regulated, clinical, and physical environments.",
  applicationName: "AiNOS",
  authors: [{ name: "AiNOS" }],
  keywords: [
    "ontology-driven AI",
    "AI infrastructure",
    "domain AI",
    "semantic infrastructure",
    "ontology reasoning",
    "LLM × ontology",
    "AiNOS",
    "Vector Institute",
    "University of Toronto",
  ],
  openGraph: {
    type: "website",
    title: "AiNOS — Ontology-Driven AI Infrastructure",
    description:
      "Ontology-driven AI infrastructure for domain reasoning. Converting multimodal and operational signals into semantic structures across regulated, clinical, and physical environments.",
    siteName: "AiNOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiNOS — Ontology-Driven AI Infrastructure",
    description:
      "Ontology-driven AI infrastructure for domain reasoning across regulated, clinical, and physical environments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
