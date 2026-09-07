"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const SESSION_KEY = "copywrk:intro-seen";

export function IntroReveal() {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    const shouldShow = pathname === "/" && !alreadySeen && !reduceMotion;

    if (!shouldShow) {
      node.style.display = "none";
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.documentElement.classList.add("intro-lock");
    node.style.display = "grid";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          document.documentElement.classList.remove("intro-lock");
          node.style.display = "none";
        },
      });

      tl.set(node, { opacity: 1, clipPath: "inset(0 0 0 0)" })
        .fromTo(".brand-reveal-line", { scaleX: 0 }, { scaleX: 1, duration: 0.16, transformOrigin: "left center" })
        .fromTo(".brand-reveal-ball", { x: "-22vw", rotate: -70, scale: 0.86 }, { x: "22vw", rotate: 70, scale: 1, duration: 0.24 }, 0.04)
        .to(node, { clipPath: "inset(0 0 100% 0)", duration: 0.22 }, 0.18);
    }, node);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("intro-lock");
    };
  }, [pathname]);

  return (
    <div className="intro-reveal brand-reveal" ref={root} aria-hidden="true">
      <div className="brand-reveal-track">
        <span className="brand-reveal-line" />
        <span className="brand-reveal-ball" />
      </div>
    </div>
  );
}
