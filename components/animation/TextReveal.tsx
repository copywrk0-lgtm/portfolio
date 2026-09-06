"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function TextReveal({children,className=""}:{children:string;className?:string}){
 const ref=useRef<HTMLDivElement>(null); const words=children.split(' ');
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(!ref.current)return;const targets=ref.current.querySelectorAll('.word > span');const t=gsap.fromTo(targets,{y:'115%'},{y:'0%',duration:1.1,stagger:.045,ease:'power4.out',scrollTrigger:{trigger:ref.current,start:'top 87%',once:true}});return()=>t.kill()},[]);
 return <div ref={ref} className={className}>{words.map((w,i)=><span className="word" key={i}><span>{w}&nbsp;</span></span>)}</div>
}
