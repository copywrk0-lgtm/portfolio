import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected website design and development work by Copywrk."
};

const solidPlaceholder = (color:string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><rect width="20" height="14" fill="${color}"/></svg>`)}`;

export default function WorkPage(){
  const [featured,...rest]=projects;
  return <div className="page-shell">
    <Header />
    <main className="page-main">
      <section className="page-hero">
        <div className="page-kicker"><span>01 / Work</span><span>Selected digital experiences · 2026</span></div>
        <h1>Work built to be<br/>felt, not filed.</h1>
        <div className="page-hero-foot"><p>A small body of work across weddings, healthcare and automotive brands — each with its own visual language, pacing and interaction system.</p><span>Scroll through the archive ↓</span></div>
      </section>

      <section className="page-section">
        <div className="work-feature">
          <Link className="work-feature-media" href={`/work/${featured.slug}`} style={{background:featured.accent}}>
            <Image src={featured.cover} alt={`${featured.title} project`} fill sizes="(max-width: 760px) 100vw, 65vw" priority placeholder="blur" blurDataURL={solidPlaceholder(featured.accent)} />
          </Link>
          <div className="work-feature-copy">
            <span>Featured / {featured.year}</span>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <Link href={`/work/${featured.slug}`}>View case study ↗</Link>
          </div>
        </div>

        <div className="work-index">
          {rest.map((project,index)=><Link className="work-index-row" href={`/work/${project.slug}`} key={project.slug}>
            <small>0{index+2}</small>
            <h3>{project.title}</h3>
            <p>{project.sector} · {project.services.join(" · ")}</p>
            <b>↗</b>
          </Link>)}
        </div>
      </section>

      <section className="inner-cta">
        <span>Have something that should live here?</span>
        <Link href="/contact">Start a project.<b>↗</b></Link>
      </section>
    </main>
    <Footer />
  </div>
}
