"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export function PageTransition() {
  const overlay = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const node = overlay.current;
    if (!node) return;

    if (firstRender.current) {
      firstRender.current = false;
      gsap.set(node, { opacity: 0, pointerEvents: "none" });
      return;
    }

    node.style.background = pathname.startsWith("/contact") ? "#11110f" : "#f0efe9";
    gsap.killTweensOf(node);
    gsap.to(node, {
      opacity: 0,
      duration: 0.32,
      ease: "power2.out",
      onComplete: () => {
        node.style.pointerEvents = "none";
      },
    });
  }, [pathname]);

  useEffect(() => {
    const node = overlay.current;
    if (!node) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      event.preventDefault();
      node.style.pointerEvents = "auto";
      node.style.background = url.pathname.startsWith("/contact") ? "#11110f" : "#f0efe9";
      gsap.killTweensOf(node);
      gsap.to(node, {
        opacity: 1,
        duration: 0.16,
        ease: "power2.out",
        onComplete: () => router.push(`${url.pathname}${url.search}${url.hash}`),
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return <div ref={overlay} className="route-fade" aria-hidden="true" />;
}
