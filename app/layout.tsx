import type { Metadata } from "next";
import "./globals.css";
import "./showcase.css";
import "./pages.css";
import "./mobile-nav.css";
import "./rive-intro.css";
import "./case-study.css";
import "./polish.css";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { PageTransition } from "@/components/animation/PageTransition";
import { IntroReveal } from "@/components/animation/IntroReveal";

export const metadata: Metadata = {
  title: { default: "Copywrk — Selected Work", template: "%s — Copywrk" },
  description: "Independent web design and development studio building distinctive websites for service businesses.",
  metadataBase: new URL("https://portfolio-copywrk.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        <IntroReveal />
        <SmoothScroll />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
