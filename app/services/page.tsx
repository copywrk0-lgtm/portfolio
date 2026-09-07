import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Web design, development, art direction and launch support from Copywrk."
};

const services = [
  {n:"01",title:"Art direction",copy:"A visual direction built around the brand, audience and market — before UI patterns start dictating the personality.",items:["Visual direction","Typography","Art direction","Interaction language"]},
  {n:"02",title:"Web design",copy:"Responsive interfaces with clear hierarchy, stronger perceived value and a journey that makes important actions obvious.",items:["UX structure","Responsive layouts","Design systems","Conversion paths"]},
  {n:"03",title:"Development",copy:"Production-ready builds with motion, responsive behavior and performance handled as part of the experience.",items:["Next.js","Responsive build","Motion systems","Performance"]},
  {n:"04",title:"Launch",copy:"The final stretch: testing, deployment, domain connection and handover without turning launch day into a technical scavenger hunt.",items:["QA","Deployment","Domain setup","Handover"]}
];

export default function ServicesPage(){
  return <div className="page-shell">
    <Header />
    <main className="page-main">
      <section className="page-hero">
        <div className="page-kicker"><span>03 / Capabilities</span><span>Direction → launch</span></div>
        <h1>From blank page<br/>to <em>live website.</em></h1>
        <div className="page-hero-foot"><p>Copywrk handles the visual direction, design and build as one connected process so the finished site does not lose its character between Figma and production.</p><Link href="/contact">Talk about a project ↗</Link></div>
      </section>

      <section className="page-section services-page-list">
        {services.map(service=><article className="services-page-row" key={service.n}>
          <small>{service.n}</small>
          <h3>{service.title}</h3>
          <div><p>{service.copy}</p><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul></div>
        </article>)}
      </section>

      <section className="page-section">
        <div className="page-section-head"><span>Process</span><h2>Enough structure to stay sharp. Enough flexibility to keep the work <em>alive.</em></h2></div>
        <div className="process-strip">
          <article className="process-block"><span>01 / Discover</span><h3>Understand</h3><p>Business, audience, offer, competitors and what the current site is failing to communicate.</p></article>
          <article className="process-block"><span>02 / Direction</span><h3>Define</h3><p>Set the visual idea, hierarchy and interaction language before production expands.</p></article>
          <article className="process-block"><span>03 / Build</span><h3>Develop</h3><p>Turn the approved direction into a responsive, production-ready experience.</p></article>
          <article className="process-block"><span>04 / Ship</span><h3>Launch</h3><p>Test real devices, connect the domain, deploy and hand over the finished build.</p></article>
        </div>
      </section>

      <section className="inner-cta">
        <span>Need the full thing rather than pieces?</span>
        <Link href="/contact"><em>Build it with Copywrk.</em><b>↗</b></Link>
      </section>
    </main>
    <Footer />
  </div>
}
