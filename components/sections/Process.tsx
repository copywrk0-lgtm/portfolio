"use client";
import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "@/components/ui/SectionHead";
const steps=['Discover','Direction','Build','Refine','Launch'];
export function Process(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(!ref.current)return;const items=ref.current.querySelectorAll('.process-step');const t=gsap.from(items,{x:80,opacity:0,stagger:.12,duration:.9,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 75%'}});return()=>t.kill()},[]);return <section className="process"><SectionHead index="03" title="Process" copy="Simple enough to move quickly. Structured enough to get the details right."/><div ref={ref} className="process-track">{steps.map((s,i)=><div className="process-step" key={s}><small>0{i+1}</small><span>{s}</span>{i<steps.length-1&&<b>→</b>}</div>)}</div></section>}
