import type { Metadata } from "next";
import "./globals.css";
import "./showcase.css";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { PageTransition } from "@/components/animation/PageTransition";
import { Cursor } from "@/components/animation/Cursor";

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
        <SmoothScroll />
        <PageTransition />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
