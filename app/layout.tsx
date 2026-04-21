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
    default: "AiNOS — The Decision Operating System",
    template: "%s · AiNOS",
  },
  description:
    "AiNOS is building the Decision Operating System — a self-evolving semantic layer that understands context, determines what should happen next, and scales that capability across infrastructure, enterprises, and everyday life.",
  applicationName: "AiNOS",
  authors: [{ name: "AiNOS" }],
  keywords: [
    "Decision Operating System",
    "AiNOS",
    "ontology engine",
    "AI infrastructure",
    "AI transformation",
    "semantic layer",
    "agentic systems",
  ],
  openGraph: {
    type: "website",
    title: "AiNOS — The Decision Operating System",
    description:
      "A self-evolving semantic layer that understands context, determines what should happen next, and scales that capability across infrastructure, enterprises, and everyday life.",
    siteName: "AiNOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiNOS — The Decision Operating System",
    description:
      "A self-evolving semantic layer that understands context and determines what should happen next.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
