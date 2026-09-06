"use client";
import Image from "next/image";
import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function ParallaxImage({src,alt,priority=false}:{src:string;alt:string;priority?:boolean}){
 const wrap=useRef<HTMLDivElement>(null);const img=useRef<HTMLDivElement>(null);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(!wrap.current||!img.current)return;const t=gsap.fromTo(img.current,{yPercent:-5,scale:1.08},{yPercent:5,scale:1,ease:'none',scrollTrigger:{trigger:wrap.current,start:'top bottom',end:'bottom top',scrub:true}});return()=>t.kill()},[])
 return <div ref={wrap} className="parallax-image"><div ref={img} className="parallax-image-inner"><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" priority={priority}/></div></div>
}
