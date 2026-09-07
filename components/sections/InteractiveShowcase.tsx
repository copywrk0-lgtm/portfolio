"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

const capabilities = [
  ["01", "Art direction", "A visual system with a point of view — not a template wearing your logo."],
  ["02", "Web design", "Editorial hierarchy, conversion-aware UX and responsive layouts designed as one system."],
  ["03", "Development", "Fast, production-ready builds with motion that supports the experience instead of slowing it down."],
  ["04", "Launch", "Domain connection, deployment, QA and a clean handover when the site is ready to go live."],
];

export function InteractiveShowcase() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ delay: 0.05 });
      intro
        .from(".showcase-intro .intro-line > span", {
          yPercent: 115,
          duration: 0.95,
          stagger: 0.08,
          ease: "power4.out",
        })
        .from(
          ".showcase-intro .intro-meta > *",
          { y: 20, opacity: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" },
          "-=0.5"
        );

      gsap.utils.toArray<HTMLElement>(".project-reel").forEach((chapter, index) => {
        const projectWindow = chapter.querySelector<HTMLElement>(".project-window");
        const image = chapter.querySelector<HTMLElement>(".project-window-image");
        const ghost = chapter.querySelector<HTMLElement>(".project-ghost-title");
        const copy = chapter.querySelector<HTMLElement>(".project-reel-copy");
        const rails = chapter.querySelectorAll<HTMLElement>(".project-rail > *");
        const direction = index % 2 === 0 ? -1 : 1;

        if (projectWindow) {
          gsap.fromTo(
            projectWindow,
            {
              xPercent: direction * 18,
              rotate: direction * 5.5,
              scale: 0.78,
              yPercent: 9,
            },
            {
              xPercent: 0,
              rotate: 0,
              scale: 1,
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top 92%",
                end: "top 24%",
                scrub: 0.9,
              },
            }
          );

          gsap.to(projectWindow, {
            scale: 0.9,
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              start: "bottom 72%",
              end: "bottom 12%",
              scrub: 0.8,
            },
          });
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.18 },
            {
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (ghost) {
          gsap.fromTo(
            ghost,
            { xPercent: direction * 8, opacity: 0.04 },
            {
              xPercent: direction * -8,
              opacity: 0.13,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 1,
              },
            }
          );
        }

        if (copy) {
          gsap.from(copy, {
            y: 44,
            opacity: 0,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: { trigger: chapter, start: "top 50%" },
          });
        }

        if (rails.length) {
          gsap.from(rails, {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: chapter, start: "top 58%" },
          });
        }
      });

      gsap.from(".statement-line > span", {
        y: 42,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".studio-statement", start: "top 72%" },
      });

      gsap.utils.toArray<HTMLElement>(".capability-row").forEach((row) => {
        gsap.from(row, {
          y: 42,
          opacity: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });

      gsap.from(".contact-kinetic span", {
        yPercent: 105,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: ".showcase-contact", start: "top 62%" },
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root} className="showcase-main">
      <section className="showcase-intro" aria-labelledby="showcase-title">
        <div className="intro-meta">
          <span>Independent digital studio</span>
          <span>Delhi · Worldwide</span>
          <span>2026 / Selected work</span>
        </div>
        <h1 id="showcase-title">
          <span className="intro-line"><span>Digital work</span></span>
          <span className="intro-line"><span>with a <em>pulse.</em></span></span>
        </h1>
        <div className="intro-meta intro-meta--bottom">
          <p>Copywrk designs and develops expressive websites for service businesses that refuse to look interchangeable.</p>
          <a href="#work">Scroll to explore ↓</a>
        </div>
      </section>

      <section className="showcase-work" id="work" aria-label="Selected work">
        <div className="work-intro">
          <span>01 / Selected work</span>
          <p>A moving project reel — each website treated like a piece on a gallery wall, not another portfolio card.</p>
        </div>

        {projects.map((project, index) => (
          <article className={`project-reel project-reel-${index + 1}`} key={project.slug}>
            <div className="project-reel-stage">
              <div className="project-ghost" aria-hidden="true">
                <div className="project-ghost-title">{project.title}</div>
              </div>

              <div className="project-rail project-rail-left">
                <span>0{index + 1} / 0{projects.length}</span>
                <span>{project.sector}</span>
              </div>

              <div className="project-rail project-rail-right">
                <span>{project.year}</span>
                <span>{project.services.slice(0, 2).join(" · ")}</span>
              </div>

              <Link
                href={`/work/${project.slug}`}
                className="project-window"
                aria-label={`View ${project.title} case study`}
              >
                <div className="project-window-chrome">
                  <span>{project.title}</span>
                  <span>copywrk / selected work</span>
                  <span>↗</span>
                </div>
                <div className="project-window-viewport" style={{ background: project.accent }}>
                  <div className="project-window-image">
                    <Image
                      src={project.cover}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 760px) 92vw, 74vw"
                      priority={index === 0}
                      onLoad={(event) => event.currentTarget.classList.add("is-loaded")}
                    />
                  </div>
                  <div className="project-window-vignette" />
                  <div className="project-window-title">{project.title}</div>
                  <div className="project-window-open">Open case study ↗</div>
                </div>
              </Link>

              <div className="project-reel-copy">
                <p>{project.summary}</p>
                <Link href={`/work/${project.slug}`}>Case study ↗</Link>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>
                )}
              </div>

              <div className="project-position" aria-hidden="true">
                {projects.map((item, dotIndex) => (
                  <span className={dotIndex === index ? "is-active" : ""} key={item.slug} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="studio-statement">
        <div className="statement-index">02 / Point of view</div>
        <p className="statement-copy">
          <span className="statement-line"><span>Not another template.</span></span>
          <span className="statement-line"><span>Every interface gets</span></span>
          <span className="statement-line"><span>its own rhythm.</span></span>
        </p>
        <div className="statement-foot">
          <p>Strategy where it matters. Restraint where it helps. Motion where it changes how the work feels.</p>
          <span>Design · Development · Motion</span>
        </div>
      </section>

      <section className="showcase-capabilities" id="services">
        <div className="capabilities-head">
          <span>03 / Capabilities</span>
          <p>From first direction to production launch.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, copy]) => (
            <div className="capability-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>↗</b>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-contact" id="contact">
        <div className="contact-kicker">04 / Start something worth showing</div>
        <a className="contact-kinetic" href="mailto:copywrk0@gmail.com">
          <span>Have a project?</span>
          <span><em>Let&apos;s talk.</em> ↗</span>
        </a>
        <div className="showcase-contact-foot">
          <span>Copywrk · Delhi / Worldwide</span>
          <span>Available for select web projects</span>
          <span>© 2026</span>
        </div>
      </section>
    </main>
  );
}
