"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function IntroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const node = root.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      node.style.display = "none";
      return;
    }

    document.documentElement.classList.add("intro-lock");
    const q = gsap.utils.selector(node);
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.documentElement.classList.remove("intro-lock");
        node.style.display = "none";
      },
    });

    tl.set(node, { autoAlpha: 1 })
      .from(q(".intro-label span"), { yPercent: 120, duration: 0.65, stagger: 0.06 })
      .fromTo(
        q(".intro-sisyphus"),
        { xPercent: -18, yPercent: 24 },
        { xPercent: 88, yPercent: -36, duration: 1.8, ease: "power2.inOut" },
        0.28
      )
      .to(q(".intro-boulder"), { rotation: 680, duration: 1.8, ease: "none" }, 0.28)
      .to(q(".intro-person"), { rotation: -5, transformOrigin: "70% 90%", yoyo: true, repeat: 5, duration: 0.14 }, 0.34)
      .to(q(".intro-boulder"), { x: 42, y: -18, duration: 0.34, ease: "power2.out" }, 1.83)
      .to(q(".intro-label span"), { yPercent: -130, duration: 0.42, stagger: 0.035 }, 1.78)
      .to(node, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut" }, 2.06);

    return () => {
      tl.kill();
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  return (
    <div className="intro-reveal" ref={root} aria-hidden="true">
      <div className="intro-label">
        <span>COPYWRK®</span>
        <span>PUSHING PIXELS UPHILL</span>
      </div>
      <div className="intro-scene">
        <div className="intro-hill" />
        <div className="intro-sisyphus">
          <div className="intro-boulder" />
          <svg className="intro-person" viewBox="0 0 90 120" role="presentation">
            <circle cx="52" cy="20" r="8" fill="currentColor" />
            <path d="M49 31 L42 61 L28 82 M43 61 L56 84 M45 43 L64 50 M64 50 L73 42" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="intro-count">01 → 04</div>
    </div>
  );
}
