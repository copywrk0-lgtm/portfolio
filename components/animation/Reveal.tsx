"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Reveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(!ref.current)return;const t=gsap.fromTo(ref.current,{y:55,opacity:0},{y:0,opacity:1,duration:1.05,delay,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 86%',once:true}});return()=>{t.kill();}},[delay]);return <div ref={ref} className={className}>{children}</div>
}
