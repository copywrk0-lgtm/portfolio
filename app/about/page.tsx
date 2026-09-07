import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Studio",
  description: "Copywrk is an independent web design and development studio based in Delhi, working worldwide."
};

export default function AboutPage(){
  return <div className="page-shell">
    <Header />
    <main className="page-main">
      <section className="page-hero">
        <div className="page-kicker"><span>02 / Studio</span><span>Delhi · Worldwide</span></div>
        <h1>Small studio.<br/><em>Big visual appetite.</em></h1>
        <div className="page-hero-foot"><p>Copywrk designs and develops websites for service businesses that want to feel sharper, more intentional and less interchangeable online.</p><span>Independent by design.</span></div>
      </section>

      <section className="page-section">
        <div className="page-section-head"><span>Point of view</span><h2>Good websites do more than look polished. They create <em>memory.</em></h2></div>
        <div className="about-grid">
          <article className="about-card"><span>01 / Direction</span><div><h3>Start with a point of view.</h3><p>Before layouts, motion or code, the site needs a visual idea strong enough to hold the whole experience together.</p></div></article>
          <article className="about-card"><span>02 / Restraint</span><div><h3>Motion should earn its place.</h3><p>Interaction is there to create rhythm, focus and character — not to turn every scroll into a fireworks show.</p></div></article>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-head"><span>Principles</span><h2>How we keep the work from becoming <em>template-shaped.</em></h2></div>
        <div className="about-principles">
          <article className="principle"><small>01</small><h3>Real hierarchy</h3><p>Every page gets its own composition and visual rhythm instead of repeating the same card grid.</p></article>
          <article className="principle"><small>02</small><h3>Responsive by intent</h3><p>Mobile is designed as a version of the experience, not treated as desktop content stacked vertically.</p></article>
          <article className="principle"><small>03</small><h3>Production aware</h3><p>Design decisions account for loading, accessibility, performance and handover from the start.</p></article>
        </div>
      </section>

      <section className="inner-cta">
        <span>See how that thinking becomes a site.</span>
        <Link href="/work"><em>Explore the work.</em><b>↗</b></Link>
      </section>
    </main>
    <Footer />
  </div>
}
