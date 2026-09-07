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
      const intro = gsap.timeline({ delay: 0.45 });
      intro
        .from(".showcase-intro .intro-line > span", {
          yPercent: 115,
          duration: 1.15,
          stagger: 0.1,
          ease: "power4.out",
        })
        .from(
          ".showcase-intro .intro-meta > *",
          { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          "-=0.55"
        );

      gsap.utils.toArray<HTMLElement>(".showcase-chapter").forEach((chapter) => {
        const frame = chapter.querySelector<HTMLElement>(".chapter-frame");
        const image = chapter.querySelector<HTMLElement>(".chapter-image");
        const title = chapter.querySelector<HTMLElement>(".chapter-title");
        const meta = chapter.querySelectorAll<HTMLElement>(".chapter-reveal");

        if (frame && image) {
          gsap.fromTo(
            frame,
            { clipPath: "inset(12% 8% 12% 8% round 22px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top 88%",
                end: "top 22%",
                scrub: 0.8,
              },
            }
          );
          gsap.fromTo(
            image,
            { scale: 1.16, yPercent: -3 },
            {
              scale: 1.02,
              yPercent: 3,
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

        if (title) {
          gsap.fromTo(
            title,
            { yPercent: 42, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 62%",
                end: "top 28%",
                scrub: 0.55,
              },
            }
          );
        }

        if (meta.length) {
          gsap.from(meta, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: chapter, start: "top 48%" },
          });
        }
      });

      gsap.from(".statement-line > span", {
        yPercent: 110,
        rotate: 1.5,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".studio-statement", start: "top 70%" },
      });

      gsap.utils.toArray<HTMLElement>(".capability-row").forEach((row) => {
        gsap.from(row, {
          y: 55,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });

      gsap.from(".contact-kinetic span", {
        yPercent: 105,
        duration: 1.1,
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
          <p>Four digital identities. Four different rhythms. No recycled visual system.</p>
        </div>

        {projects.map((project, index) => (
          <article className="showcase-chapter" key={project.slug}>
            <div className="chapter-stage">
              <Link href={`/work/${project.slug}`} className="chapter-frame" aria-label={`View ${project.title} case study`}>
                <div className="chapter-image">
                  <Image
                    src={project.cover}
                    alt={`${project.title} website preview`}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
                <div className="chapter-shade" />
                <div className="chapter-top chapter-reveal">
                  <span>0{index + 1}</span>
                  <span>{project.sector}</span>
                  <span>{project.year}</span>
                </div>
                <div className="chapter-title-wrap">
                  <h2 className="chapter-title">{project.title}</h2>
                </div>
                <div className="chapter-bottom chapter-reveal">
                  <p>{project.summary}</p>
                  <span>View case study ↗</span>
                </div>
              </Link>
              {project.liveUrl && (
                <a className="chapter-live chapter-reveal" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live site ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="studio-statement">
        <div className="statement-index">02 / Point of view</div>
        <p className="statement-copy">
          <span className="statement-line"><span>Not another template.</span></span>
          <span className="statement-line"><span>Every interface gets</span></span>
          <span className="statement-line"><span>its own <em>rhythm.</em></span></span>
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
