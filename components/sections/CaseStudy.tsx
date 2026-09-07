import Link from "next/link";
import { Project } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";

export function CaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <>
      <Header />
      <main className="project-detail">
        <section className="project-detail-hero">
          <div className="project-detail-kicker">
            <span>{project.sector}</span>
            <span>{project.year}</span>
          </div>

          <TextReveal className="project-detail-title">{project.title}</TextReveal>

          <div className="project-detail-meta">
            <div className="project-meta-block project-meta-about">
              <span className="project-meta-label">About</span>
              <p>{project.summary}</p>
            </div>

            <div className="project-meta-block">
              <span className="project-meta-label">Role</span>
              <p>{project.services.join("\n")}</p>
            </div>

            <div className="project-meta-block">
              <span className="project-meta-label">Launch</span>
              <p>{project.year}</p>
            </div>

            <div className="project-meta-block project-meta-link">
              <span className="project-meta-label">Project</span>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit site →
                </a>
              ) : (
                <p>Selected work</p>
              )}
            </div>
          </div>

          <div className="project-scroll-cue">
            <span>Scroll</span>
            <span>↓</span>
          </div>
        </section>

        <section className="project-detail-cover" style={{ background: project.accent }}>
          <ParallaxImage src={project.cover} alt={`${project.title} cover`} placeholder={project.accent} priority />
          <div className="project-cover-caption">
            <span>{project.title}</span>
            <span>{project.sector}</span>
          </div>
        </section>

        <section className="project-detail-statement">
          <Reveal>
            <p className="project-section-index">01 / Direction</p>
            <h2>{project.headline}</h2>
          </Reveal>
        </section>

        <section className="project-detail-gallery" aria-label={`${project.title} project gallery`}>
          {project.gallery.map((img, index) => (
            <figure className={`project-shot project-shot-${index % 4}`} key={`${img}-${index}`}>
              <div className="project-shot-frame" style={{ background: project.accent }}>
                <div className="project-shot-chrome">
                  <span>{String(index + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span>
                  <span>{project.title}</span>
                  <span>Copywrk ↗</span>
                </div>
                <div className="project-shot-media">
                  <ParallaxImage src={img} alt={`${project.title} project view ${index + 1}`} placeholder={project.accent} />
                </div>
              </div>
              <figcaption>
                <span>{project.sector}</span>
                <span>{project.services.slice(0, 2).join(" · ")}</span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="project-detail-notes">
          <div className="project-notes-heading">
            <span>02 / Project notes</span>
            <p>What shaped the work.</p>
          </div>

          <div className="project-note-row">
            <span>Challenge</span>
            <Reveal><p>{project.challenge}</p></Reveal>
          </div>
          <div className="project-note-row">
            <span>Direction</span>
            <Reveal delay={0.08}><p>{project.direction}</p></Reveal>
          </div>
          <div className="project-note-row">
            <span>Outcome</span>
            <Reveal delay={0.16}><p>{project.result}</p></Reveal>
          </div>
        </section>

        <section className="project-next">
          <div className="project-next-label">Next project</div>
          <Link href={`/work/${next.slug}`} className="project-next-link">
            <span>{next.title}</span>
            <b>↗</b>
          </Link>
          <div className="project-next-media" style={{ background: next.accent }}>
            <ParallaxImage src={next.cover} alt={`${next.title} preview`} placeholder={next.accent} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
