"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function ScrollProgress(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(!ref.current)return;const t=gsap.to(ref.current,{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});return()=>t.kill()},[]);return <div ref={ref} className="scroll-progress"/>}
