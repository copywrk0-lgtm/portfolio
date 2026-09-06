"use client";
import { useEffect,useRef } from "react";
import gsap from "gsap";
export function Hero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{if(!root.current)return;const q=gsap.utils.selector(root);const tl=gsap.timeline({delay:.85});tl.from(q('.hero-kicker'),{y:20,opacity:0,duration:.7}).from(q('.hero-line > span'),{yPercent:115,duration:1.25,stagger:.12,ease:'power4.out'},'-=.35').from(q('.hero-foot > *'),{y:28,opacity:0,duration:.8,stagger:.12},'-=.55');return()=>{tl.kill();}},[])
 return <section className="hero" ref={root}><p className="hero-kicker">Independent web design & development studio · Delhi / Worldwide</p><h1><span className="hero-line"><span>We build websites</span></span><span className="hero-line"><span>worth <em>remembering.</em></span></span></h1><div className="hero-foot"><p>Copywrk designs and develops distinctive digital experiences that make service businesses impossible to scroll past.</p><a href="#work">Explore selected work ↓</a></div><div className="hero-orbit" aria-hidden="true"><span>SCROLL</span></div></section>
}
