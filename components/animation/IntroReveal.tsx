"use client";

import { useEffect, useRef } from "react";
import { Rive } from "@rive-app/canvas-lite";
import gsap from "gsap";

const RIVE_SRC = "https://public.rive.app/community/runtime-files/3897-8156-ball-loader.riv";
const STATE_MACHINE = "State Machine 1";

export function IntroReveal() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!root.current || !canvas.current) return;

    const node = root.current;
    const canvasNode = canvas.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      node.style.display = "none";
      return;
    }

    document.documentElement.classList.add("intro-lock");
    let finished = false;
    let completionTimer: number | undefined;
    let fallbackTimer: number | undefined;
    let rive: Rive | null = null;

    const finishIntro = () => {
      if (finished) return;
      finished = true;

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          document.documentElement.classList.remove("intro-lock");
          node.style.display = "none";
        },
      });

      tl.to(".rive-loader-frame", { scale: 1.08, duration: 0.42, ease: "power2.inOut" })
        .to(".rive-intro-meta", { yPercent: -130, opacity: 0, duration: 0.38 }, 0)
        .to(node, { clipPath: "inset(0 0 100% 0)", duration: 0.92 }, 0.26);
    };

    const onResize = () => rive?.resizeDrawingSurfaceToCanvas();
    window.addEventListener("resize", onResize);

    try {
      rive = new Rive({
        src: RIVE_SRC,
        canvas: canvasNode,
        artboard: "Loader",
        stateMachines: STATE_MACHINE,
        autoplay: true,
        shouldDisableRiveListeners: true,
        onLoad: () => {
          node.classList.add("rive-is-ready");
          rive?.resizeDrawingSurfaceToCanvas();

          completionTimer = window.setTimeout(() => {
            const inputs = rive?.stateMachineInputs(STATE_MACHINE) ?? [];
            const completionInput = inputs.find((input) =>
              ["loadcomplet", "loadcomplete", "complete", "done"].includes(input.name.toLowerCase())
            );
            completionInput?.fire();
            window.setTimeout(finishIntro, 900);
          }, 1850);
        },
        onLoadError: () => {
          node.classList.add("rive-fallback");
          fallbackTimer = window.setTimeout(finishIntro, 1550);
        },
      });
    } catch {
      node.classList.add("rive-fallback");
      fallbackTimer = window.setTimeout(finishIntro, 1550);
    }

    fallbackTimer = window.setTimeout(() => {
      if (!node.classList.contains("rive-is-ready")) {
        node.classList.add("rive-fallback");
        finishIntro();
      }
    }, 5000);

    return () => {
      window.removeEventListener("resize", onResize);
      if (completionTimer) window.clearTimeout(completionTimer);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      rive?.cleanup();
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  return (
    <div className="intro-reveal rive-intro" ref={root}>
      <div className="rive-intro-meta rive-intro-meta--top">
        <span>COPYWRK®</span>
        <span>LOADING SOMETHING WORTH SEEING</span>
      </div>

      <div className="rive-loader-frame">
        <canvas ref={canvas} className="rive-loader-canvas" aria-hidden="true" />
        <div className="rive-loader-fallback" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="rive-intro-meta rive-intro-meta--bottom">
        <span>01 → 04</span>
        <a href="https://rive.app/marketplace/3897-8156-ball-loader/" target="_blank" rel="noreferrer" tabIndex={-1}>
          Ball Loader · pedroalpera / Rive · CC BY
        </a>
      </div>
    </div>
  );
}
