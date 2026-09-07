import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website design and development project with Copywrk."
};

export default function ContactPage(){
  return <div className="contact-page">
    <Header />
    <main className="contact-page-main">
      <section className="contact-page-hero">
        <div className="page-kicker"><span>04 / Contact</span><span>Delhi · Worldwide</span></div>
        <h1>Have a site worth<br/><em>doing properly?</em></h1>
        <a className="contact-big-link" href="mailto:copywrk0@gmail.com">copywrk0@gmail.com ↗</a>
        <div className="contact-info-grid">
          <span>Web design + development</span>
          <span>Available for select projects</span>
          <span><Link href="/work">See the work ↗</Link></span>
        </div>
      </section>
    </main>
  </div>
}
