"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export function PageTransition(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{ if(!ref.current)return; const ctx=gsap.context(()=>{
   const tl=gsap.timeline({defaults:{ease:'expo.inOut'}});
   tl.set(ref.current,{display:'block'}).to(ref.current,{yPercent:-100,duration:1.15,delay:.12}).set(ref.current,{display:'none'});
 });return()=>ctx.revert();},[]);
 return <div ref={ref} className="page-curtain" aria-hidden="true"><span>COPYWRK®</span></div>
}
